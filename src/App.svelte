<script>
  import { user, logOut } from 'utils/auth';
  import LoginPage from 'containers/LoginPage';
  import Layout from './layout';
  import LoadingScreen from 'components/LoadingScreen';
</script>

<style global>
  @import url('styles/global.css');
</style>

<div id="app" class="default-theme">
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
</div>
