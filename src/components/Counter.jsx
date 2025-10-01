import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: "20px 0" }}>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>➕ Incrementar</button>
      <button onClick={() => setCount(count - 1)}>➖ Decrementar</button>
    </div>
  );
}
