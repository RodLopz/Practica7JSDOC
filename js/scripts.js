/**
 * Clase que representa una tarea.
 */
class Task {
    /**
     * Constructor de la clase Task.
     * @param {string} text - El texto de la tarea.
     */
    constructor(text) {
        this.text = text;
        this.completed = false;
    }
}

/**
 * Clase que gestiona las tareas.
 */
class TaskManager {
    /**
     * Constructor de la clase TaskManager.
     */
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }

    // Métodos de la clase TaskManager...
}

/**
 * Instancia de TaskManager.
 */
const taskManager = new TaskManager();

// Funciones adicionales y event listeners...
