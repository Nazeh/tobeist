<script>
  import { user, logOut } from 'utils/auth';
  import LoginPage from 'containers/LoginPage';
  import Main from 'components/Main';
  import LoadingScreen from 'components/LoadingScreen';
</script>

<style>
  #app {
    min-height: 100%;
    display: flex;
    justify-content: center;
    background-color: #fafafa;
  }
</style>

<div id="app">

  {#if $user}
    <Main>
      <h3>Hi you are logged in!</h3>
      <button on:click={logOut}>Logout</button>
    </Main>
  {:else if $user === null}
    <LoginPage />
  {:else}
    <LoadingScreen />
  {/if}
</div>
