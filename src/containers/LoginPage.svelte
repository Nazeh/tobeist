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
      <button class="btn " on:click={loginGoogle}>
        Log in with Google Account
      </button>
      <button class="btn" on:click={loginGoogle}>
        Log in with Facebook Account
      </button>
      <button
        class="btn bg-secondary-500 hover_bg-secondary-600 text-white py-2 px-2
        rounded mt-2"
        on:click={loginAnon}>
        Try Demo
      </button>
      <hr />
      <LoginForm />
    </form>
  </div>
</div>
