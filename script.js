// ===== VARIABLES GLOBALES =====
let tasks = [];
let currentFilter = 'all';
let taskIdCounter = 1;

// ===== ÉLÉMENTS DOM =====
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const tasksContainer = document.getElementById('tasksContainer');
const emptyState = document.getElementById('emptyState');

// Boutons de filtre
const filterAll = document.getElementById('filterAll');
const filterPending = document.getElementById('filterPending');
const filterCompleted = document.getElementById('filterCompleted');

// Compteurs
const countAll = document.getElementById('countAll');
const countPending = document.getElementById('countPending');
const countCompleted = document.getElementById('countCompleted');

// ===== FONCTIONS DE GESTION DU LOCALSTORAGE =====

/**
 * Sauvegarde les tâches dans localStorage
 */
function saveTasks() {
    try {
        localStorage.setItem('todoApp_tasks', JSON.stringify(tasks));
        localStorage.setItem('todoApp_counter', taskIdCounter.toString());
    } catch (error) {
        console.error('Erreur lors de la sauvegarde:', error);
    }
}

/**
 * Charge les tâches depuis localStorage
 */
function loadTasks() {
    try {
        const savedTasks = localStorage.getItem('todoApp_tasks');
        const savedCounter = localStorage.getItem('todoApp_counter');
        
        if (savedTasks) {
            tasks = JSON.parse(savedTasks);
        }
        
        if (savedCounter) {
            taskIdCounter = parseInt(savedCounter, 10);
        }
    } catch (error) {
        console.error('Erreur lors du chargement:', error);
        tasks = [];
        taskIdCounter = 1;
    }
}

// ===== FONCTIONS CRUD =====

/**
 * Crée une nouvelle tâche
 * @param {string} text - Le texte de la tâche
 */
function createTask(text) {
    if (!text.trim()) return;
    
    const newTask = {
        id: taskIdCounter++,
        text: text.trim(),
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    tasks.push(newTask);
    saveTasks();
    renderTasks();
    updateCounters();
    
    // Vider l'input et remettre le focus
    taskInput.value = '';
    taskInput.focus();
}

/**
 * Met à jour l'état d'une tâche (terminée/non terminée)
 * @param {number} taskId - L'ID de la tâche
 */
function toggleTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
        updateCounters();
    }
}

/**
 * Supprime une tâche
 * @param {number} taskId - L'ID de la tâche à supprimer
 */
function deleteTask(taskId) {
    // Demander confirmation pour éviter les suppressions accidentelles
    if (confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
        tasks = tasks.filter(task => task.id !== taskId);
        saveTasks();
        renderTasks();
        updateCounters();
    }
}

// ===== FONCTIONS D'AFFICHAGE =====

/**
 * Crée l'élément HTML pour une tâche
 * @param {Object} task - L'objet tâche
 * @returns {HTMLElement} - L'élément DOM de la tâche
 */
function createTaskElement(task) {
    const taskItem = document.createElement('div');
    taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;
    taskItem.dataset.taskId = task.id;
    
    taskItem.innerHTML = `
        <input 
            type="checkbox" 
            class="task-checkbox" 
            ${task.completed ? 'checked' : ''}
            onchange="toggleTask(${task.id})"
        >
        <span class="task-text">${escapeHtml(task.text)}</span>
        <button 
            class="task-delete" 
            onclick="deleteTask(${task.id})"
            title="Supprimer cette tâche"
        >
            🗑️
        </button>
    `;
    
    return taskItem;
}

/**
 * Échappe les caractères HTML pour éviter les injections
 * @param {string} text - Le texte à échapper
 * @returns {string} - Le texte échappé
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Affiche toutes les tâches selon le filtre actuel
 */
function renderTasks() {
    // Filtrer les tâches selon le filtre actuel
    let filteredTasks = tasks;
    
    switch (currentFilter) {
        case 'pending':
            filteredTasks = tasks.filter(task => !task.completed);
            break;
        case 'completed':
            filteredTasks = tasks.filter(task => task.completed);
            break;
        default:
            filteredTasks = tasks;
    }
    
    // Vider le conteneur
    tasksContainer.innerHTML = '';
    
    // Afficher l'état vide si pas de tâches
    if (filteredTasks.length === 0) {
        if (tasks.length === 0) {
            // Aucune tâche du tout
            emptyState.innerHTML = `
                <p>🎯 Aucune tâche pour le moment</p>
                <p class="empty-subtitle">Ajoutez votre première tâche ci-dessus !</p>
            `;
        } else {
            // Pas de tâches pour ce filtre
            const filterMessages = {
                'pending': '🔄 Aucune tâche en attente',
                'completed': '✅ Aucune tâche terminée'
            };
            emptyState.innerHTML = `
                <p>${filterMessages[currentFilter] || 'Aucune tâche'}</p>
            `;
        }
        tasksContainer.appendChild(emptyState);
        return;
    }
    
    // Afficher les tâches filtrées
    filteredTasks
        .sort((a, b) => {
            // Trier par état (non terminées en premier) puis par date de création
            if (a.completed !== b.completed) {
                return a.completed ? 1 : -1;
            }
            return new Date(b.createdAt) - new Date(a.createdAt);
        })
        .forEach(task => {
            const taskElement = createTaskElement(task);
            tasksContainer.appendChild(taskElement);
        });
}

/**
 * Met à jour les compteurs des filtres
 */
function updateCounters() {
    const totalTasks = tasks.length;
    const pendingTasks = tasks.filter(task => !task.completed).length;
    const completedTasks = tasks.filter(task => task.completed).length;
    
    countAll.textContent = totalTasks;
    countPending.textContent = pendingTasks;
    countCompleted.textContent = completedTasks;
}

/**
 * Change le filtre actuel et met à jour l'affichage
 * @param {string} filter - Le nouveau filtre ('all', 'pending', 'completed')
 */
function setFilter(filter) {
    currentFilter = filter;
    
    // Mettre à jour les boutons de filtre
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeButton = {
        'all': filterAll,
        'pending': filterPending,
        'completed': filterCompleted
    }[filter];
    
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    // Réafficher les tâches
    renderTasks();
}

// ===== GESTIONNAIRES D'ÉVÉNEMENTS =====

/**
 * Initialise tous les gestionnaires d'événements
 */
function initEventListeners() {
    // Ajout de tâche par clic sur le bouton
    addTaskBtn.addEventListener('click', () => {
        createTask(taskInput.value);
    });
    
    // Ajout de tâche par pression sur Entrée
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            createTask(taskInput.value);
        }
    });
    
    // Boutons de filtre
    filterAll.addEventListener('click', () => setFilter('all'));
    filterPending.addEventListener('click', () => setFilter('pending'));
    filterCompleted.addEventListener('click', () => setFilter('completed'));
    
    // Focus automatique sur l'input au chargement
    taskInput.focus();
}

// ===== INITIALISATION =====

/**
 * Initialise l'application
 */
function initApp() {
    console.log('🚀 Initialisation de l\'application de gestion de tâches...');
    
    // Charger les données sauvegardées
    loadTasks();
    
    // Initialiser les événements
    initEventListeners();
    
    // Première mise à jour de l'affichage
    renderTasks();
    updateCounters();
    
    console.log(`✅ Application initialisée avec ${tasks.length} tâche(s) chargée(s)`);
}

// ===== DÉMARRAGE DE L'APPLICATION =====

// Démarrer l'application quand le DOM est chargé
document.addEventListener('DOMContentLoaded', initApp);

// ===== FONCTIONS UTILITAIRES SUPPLÉMENTAIRES =====

/**
 * Exporte les tâches sous format JSON (pour debug/backup)
 */
function exportTasks() {
    const dataToExport = {
        tasks: tasks,
        exportDate: new Date().toISOString(),
        totalTasks: tasks.length
    };
    
    console.log('Données exportées:', JSON.stringify(dataToExport, null, 2));
    return dataToExport;
}

/**
 * Efface toutes les données (pour debug/reset)
 */
function clearAllData() {
    if (confirm('⚠️ Êtes-vous sûr de vouloir supprimer TOUTES les tâches ? Cette action est irréversible.')) {
        tasks = [];
        taskIdCounter = 1;
        saveTasks();
        renderTasks();
        updateCounters();
        console.log('🧹 Toutes les données ont été effacées');
    }
}

// Rendre les fonctions de debug disponibles globalement pour les tests
window.debugTodoApp = {
    exportTasks,
    clearAllData,
    getTasks: () => tasks,
    getTaskCount: () => tasks.length
};
