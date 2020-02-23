<script>
  import { fade } from 'svelte/transition';
  import SVG from 'components/SVG';
  import logo from 'images/tobeist-logo.svg';
  import spinner from 'images/tobeist-spinner.svg';
</script>

<style global>
  #loading-screen {
    background-color: white;
    min-height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .spinner {
      animation: spin 0.6s linear infinite both;
    }
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

<div id="loading-screen" transition:fade={{ duration: 200 }}>
  <SVG src={logo} class="w-24 mb-10">-</SVG>
  <SVG src={spinner} class="spinner w-8">-</SVG>
</div>
