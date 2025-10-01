import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function addTodo() {
    if (text.trim() === "") return;
    setTodos([...todos, text]);
    setText("");
  }

  function removeTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      addTodo();
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">
          Gestor de Tareas Inteligente
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          Organiza tu día de manera eficiente con nuestro sistema de gestión de tareas.
        </p>
        <p className="text-md text-gray-600">
          Añade, visualiza y mantén el control de todas tus actividades pendientes de forma sencilla y elegante.
        </p>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Añadir Nueva Tarea
        </h2>
        <p id="todo-help" className="text-gray-600 mb-4">
          Escribe tu tarea en el campo de abajo y presiona Enter o haz clic en "Agregar" para incluirla en tu lista personal.
        </p>
        
        <div className="flex gap-3">
          <label htmlFor="todo-input" className="sr-only">
            Nueva tarea
          </label>
          <input
            id="todo-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Describe tu nueva tarea aquí..."
            aria-describedby="todo-help"
            className="flex-1 px-4 py-2 border-2 border-indigo-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
          />
          <button 
            onClick={addTodo}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 transition-all font-medium"
          >
            Agregar
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Mis Tareas Pendientes
        </h2>
        
        {todos.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 text-lg mb-2">
              ¡No tienes tareas pendientes!
            </p>
            <p className="text-gray-400">
              Añade tu primera tarea usando el formulario de arriba.
            </p>
          </div>
        ) : (
          <>
            <p className="text-gray-600 mb-4">
              Tienes {todos.length} {todos.length === 1 ? 'tarea' : 'tareas'} en tu lista actual.
            </p>
            <ul className="space-y-2">
              {todos.map((t, i) => (
                <li 
                  key={i} 
                  className="flex items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-emerald-400 rounded-r-lg group"
                >
                  <span className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {i + 1}
                  </span>
                  <span className="text-gray-800 flex-1">{t}</span>
                  <button
                    onClick={() => removeTodo(i)}
                    aria-label={`Eliminar tarea: ${t}`}
                    className="ml-3 w-8 h-8 flex items-center justify-center text-red-500 hover:text-white hover:bg-red-500 rounded-full transition-colors opacity-70 group-hover:opacity-100"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
