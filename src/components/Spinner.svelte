<script>
  import spinner from 'images/tobeist-spinner.svg';
  import SVG from 'components/SVG';
  let className = 'w-8';
  export { className as class };
</script>

<style global>
  .spinner {
    animation: spin 0.6s linear infinite both;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
</style>

<SVG src={spinner} class="spinner {className}">-</SVG>
