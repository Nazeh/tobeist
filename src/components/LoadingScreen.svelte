<script>
  import { fade } from 'svelte/transition';
  import SVG from 'components/SVG';
  import Spinner from 'components/Spinner';
  import logo from 'images/tobeist-logo.svg';
</script>

<style>
  #loading-screen {
    background-color: white;
    min-height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>

<div id="loading-screen" transition:fade={{ duration: 100, delay: 300 }}>
  <SVG src={logo} class="w-24 mb-10">-</SVG>
  <Spinner class="w-8 " />
</div>
