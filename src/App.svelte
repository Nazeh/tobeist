<script>
  import { user, logOut } from 'utils/auth';
  import LoginPage from 'containers/LoginPage';
  import Layout from './layout';
  import LoadingScreen from 'components/LoadingScreen';
  import ThemeProvider from './themes/ThemeProvider';
</script>

<style>
  #app {
    height: 100%;
  }
</style>

<div id="app">
  <ThemeProvider>
    {#if $user}
      <Layout>
        <h3>Hi you are logged in!</h3>
        <button on:click={logOut}>Logout</button>
      </Layout>
    {:else if $user === null}
      <LoginPage />
    {:else}
      <LoadingScreen />
    {/if}
  </ThemeProvider>
</div>
