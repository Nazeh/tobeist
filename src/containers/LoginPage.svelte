<script>
  import { login } from 'utils/auth';
  import Main from '../layout/Main';
  import Button from 'components/Button';
  import LoginForm from 'components/LoginForm';

  const loginAnon = () => {
    spinner = true;
    return login();
  };

  const loginGoogle = () => {
    spinner = true;
    return login('GOOGLE');
  };

  let spinner;
</script>

<style>
  .login-bg {
    height: 100%;
    background-color: var(--colors-grey-400);
  }

  .wrapper {
    width: 750px;
    height: 100%;
    max-width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }

  form {
    width: 332px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>

<div class="login-bg">
  <div class="wrapper">
    <form action="">
      <div class="flex justify-center mb-5">
        <h1 class="text-red-500 font-bold text-3xl ">tobeist</h1>
      </div>
      <button class="btn " on:click={loginGoogle}>
        Log in with Google Account
      </button>
      <button class="btn" on:click={loginGoogle}>
        Log in with Facebook Account
      </button>
      <button class="bg-tobeistred-200" on:click={loginAnon}>Try Demo</button>
      <hr />
      <LoginForm />
    </form>
  </div>
</div>
