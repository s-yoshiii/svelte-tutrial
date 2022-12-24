<script>
  import { marked } from "marked";
  let name = "";
  let a = 1;
  let b = 2;
  let checked = false;
  let text = `Some words are *italic*, some are **bold**`;
</script>

<input bind:value={name} placeholder="enter your name" />
<p>Hello {name || "stranger"}!</p>

<label>
  <input type="number" bind:value={a} min="0" max="10" />
  <input type="range" bind:value={a} min="0" max="10" />
</label>

<label>
  <input type="number" bind:value={b} min="0" max="10" />
  <input type="range" bind:value={b} min="0" max="10" />
</label>

<label>
  <input type="checkbox" bind:checked />
  Yes! Send me regular email spam
</label>

{#if checked}
  <p>Thank you. We will bombard your inbox and sell your personal details.</p>
{:else}
  <p>You must opt-in to continue. If you're not paying, you're the product.</p>
{/if}

<button disabled={!checked}> Subscribe </button>

<textarea bind:value={text} />

{@html marked(text)}
