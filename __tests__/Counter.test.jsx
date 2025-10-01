import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../src/components/Counter.jsx";

describe("Counter component", () => {
  test("increments and decrements the count", () => {
    render(<Counter />);

    const incButton = screen.getByText("➕ Incrementar");
    const decButton = screen.getByText("➖ Decrementar");

    // Initial value
    expect(screen.getByText(/Has hecho clic 0 veces/)).toBeInTheDocument();

    // Increment
    fireEvent.click(incButton);
    expect(screen.getByText(/Has hecho clic 1 veces/)).toBeInTheDocument();

    // Decrement
    fireEvent.click(decButton);
    expect(screen.getByText(/Has hecho clic 0 veces/)).toBeInTheDocument();
  });
});
