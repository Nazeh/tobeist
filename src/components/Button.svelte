<script>
  export let clickHandler;
</script>

<style>
  button {
    margin-bottom: 13px;
  }

  button:hover {
    background: var(--colors-grey-100);
    cursor: pointer;
    border-color: #aaa;
  }
</style>

<button on:click={clickHandler} type="button">
  <slot />
</button>
