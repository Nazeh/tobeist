<script>
  import { login } from 'utils/auth';
  import Main from '../layout/Main';
  const loginGoogle = () => login('GOOGLE');
</script>

<style>
  div {
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: #f1f1f1;
  }
</style>

<div>
  <Main>
    <button on:click={loginGoogle}>Signin with Google</button>
    <button on:click={login}>Signin Anonymously</button>
  </Main>
</div>
