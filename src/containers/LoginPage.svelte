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
    background-color: var(--colors-grey-light-4);
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
      <Button clickHandler={loginGoogle}>Log in with Google Account</Button>
      <Button clickHandler={loginGoogle}>Log in with Facebook Account</Button>
      <Button clickHandler={loginAnon}>Try Demo</Button>
      <hr />
      <LoginForm />
    </form>
  </div>
</div>
