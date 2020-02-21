<script>
  export let clickHandler;
</script>

<style>
  button {
    margin-bottom: 13px;
  }

  button:hover {
    background: rgba(0, 0, 0, 0.03);
    cursor: pointer;
    border-color: #aaa;
  }
</style>

<button on:click={clickHandler} type="button">
  <slot />
</button>
