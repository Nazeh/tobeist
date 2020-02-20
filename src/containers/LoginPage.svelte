<script>
  import { login } from 'utils/auth';
  import Main from 'components/Main';
  const loginGoogle = () => login('GOOGLE');
</script>

<Main>
  <button on:click={loginGoogle}>Signin with Google</button>
  <button on:click={login}>Signin Anonymously</button>
</Main>
