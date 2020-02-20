<script>
  import Main from './Main';
</script>

<style>
  .warapper {
    height: 100%;
    display: flex;
    justify-content: center;
    background: var(--colors-app-bg);
  }
</style>

<div class="warapper">
  <Main>
    <slot />
  </Main>
</div>
