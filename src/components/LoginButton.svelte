<script>
  export let clickHandler;
</script>

<style>
  button {
    position: relative;
    background: none;
    height: 38px;
    border-radius: 3px;
    margin-bottom: 13px;
  }

  button:hover {
    background: rgba(0, 0, 0, 0.05);
    cursor: pointer;
    border-color: grey;
  }
</style>

<button on:click={clickHandler} type="button">
  <slot />
</button>
