import logo from "./logo.svg";
import { createSignal } from "solid-js";

function App() {
  const [count, setCount] = createSignal(0);
  return (
    <div className="container">
      <main>
        <p>计数：{count()}</p>
      </main>
    </div>
  );
}

export default App;
