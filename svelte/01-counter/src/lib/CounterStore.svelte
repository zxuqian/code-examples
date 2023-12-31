<script>
  import { setContext } from "svelte";
  import { count } from "./stores";

  const increment = () => {
    count.update((n) => n + 1);
  };
</script>

<button on:click={increment}>
  count is {$count}
</button>
