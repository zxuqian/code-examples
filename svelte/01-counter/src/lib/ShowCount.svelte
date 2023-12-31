<script>
  import { getContext } from "svelte";

  export let count = 0;

  let arr = [1, 2, 3, 4, 5];

  let countFromContext = getContext("count");
</script>

{#each arr as a}
  <p>
    {a}
  </p>
{/each}

{#if count > 5}
  计数大于了 5
{/if}

<p>Context 中的 count: {countFromContext}</p>
