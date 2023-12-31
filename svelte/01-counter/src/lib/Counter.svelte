<script>
  import { onMount, setContext } from "svelte";
  import ShowCount from "./ShowCount.svelte";

  let count = 0;
  const increment = () => {
    count += 1;
  };

  onMount(() => {
    count += 3;

    return () => {
      count = 0;
    };
  });

  // 非响应性，响应性可以使用 store
  setContext("count", count);
</script>

<button on:click={increment}>
  count is {count}
</button>
<ShowCount {count} />

<style>
  button {
    border: 1px solid #ccc;
  }
</style>
