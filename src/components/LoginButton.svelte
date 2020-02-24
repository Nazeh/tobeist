<script>
  export let type = 'button';
  export let clickHandler;
  let className;
  export { className as class };
</script>

<button
  class="hover:border-gray-600 hover:bg-gray-100 {className}"
  on:click={clickHandler}
  {type}>
  <slot />
</button>
