import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../src/components/TodoList.jsx";

describe("TodoList component", () => {
  test("renders empty state correctly", () => {
    render(<TodoList />);
    
    expect(screen.getByText("Gestor de Tareas Inteligente")).toBeInTheDocument();
    expect(screen.getByText("¡No tienes tareas pendientes!")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Describe tu nueva tarea aquí...")).toBeInTheDocument();
  });

  test("adds a new todo when clicking the button", async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText("Describe tu nueva tarea aquí...");
    const button = screen.getByText("Agregar");
    
    await user.type(input, "Nueva tarea de prueba");
    await user.click(button);
    
    expect(screen.getByText("Nueva tarea de prueba")).toBeInTheDocument();
    expect(screen.getByText("Tienes 1 tarea en tu lista actual.")).toBeInTheDocument();
  });

  test("adds a new todo when pressing Enter", async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText("Describe tu nueva tarea aquí...");
    
    await user.type(input, "Tarea con Enter{enter}");
    
    expect(screen.getByText("Tarea con Enter")).toBeInTheDocument();
  });

  test("removes a todo when clicking delete button", async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText("Describe tu nueva tarea aquí...");
    const addButton = screen.getByText("Agregar");
    
    // Add a todo
    await user.type(input, "Tarea para eliminar");
    await user.click(addButton);
    
    expect(screen.getByText("Tarea para eliminar")).toBeInTheDocument();
    
    // Remove the todo
    const deleteButton = screen.getByLabelText("Eliminar tarea: Tarea para eliminar");
    await user.click(deleteButton);
    
    expect(screen.queryByText("Tarea para eliminar")).not.toBeInTheDocument();
    expect(screen.getByText("¡No tienes tareas pendientes!")).toBeInTheDocument();
  });

  test("doesn't add empty todos", async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText("Describe tu nueva tarea aquí...");
    const button = screen.getByText("Agregar");
    
    // Try to add empty todo
    await user.click(button);
    
    expect(screen.getByText("¡No tienes tareas pendientes!")).toBeInTheDocument();
    
    // Try to add whitespace-only todo
    await user.type(input, "   ");
    await user.click(button);
    
    expect(screen.getByText("¡No tienes tareas pendientes!")).toBeInTheDocument();
  });

  test("displays correct count for multiple todos", async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText("Describe tu nueva tarea aquí...");
    const button = screen.getByText("Agregar");
    
    // Add multiple todos
    await user.type(input, "Primera tarea");
    await user.click(button);
    
    await user.type(input, "Segunda tarea");
    await user.click(button);
    
    expect(screen.getByText("Tienes 2 tareas en tu lista actual.")).toBeInTheDocument();
  });
});