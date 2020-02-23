<script>
  export let src;
  let className = '';
  export { className as class };

  src = src.replace(/\<svg /, `<svg class="${className}" `);
</script>

{@html src}
