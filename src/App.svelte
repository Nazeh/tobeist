<script>
  import { logOut } from 'utils/auth';
  import { isfetching, user } from './store';
  import LoginPage from 'containers/LoginPage';
  import Layout from './layout';
  import LoadingScreen from 'components/LoadingScreen';
</script>

<style global>
  @import url('styles/main.css');
</style>

<div id="app" class="default-theme">
  {#if $isfetching}
    <LoadingScreen />
  {:else if $user}
    <Layout>
      <h3>Hi you are logged in!</h3>
      <button on:click={logOut}>Logout</button>
    </Layout>
  {:else}
    <LoginPage />
  {/if}
</div>
