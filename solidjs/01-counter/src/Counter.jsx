import { For, Show, createEffect, createSignal } from "solid-js";

function Counter() {
  const [count, setCount] = createSignal(0);

  // setInterval(() => console.log(new Date()), 1000);

  createEffect(() => {
    console.log("计数为：", count());
  });

  function handleIncrease() {
    setCount(count() + 1);
  }

  return (
    <div>
      <p>计数：{count()}</p>
      <button onClick={handleIncrease}>+1</button>
      <For each={new Array(count())} fallback={<div>无数据</div>}>
        {(item, index) => <p>{index}</p>}
      </For>
      <Show when={count() > 5}>计数超过了 5</Show>
    </div>
  );
}

export default Counter;
