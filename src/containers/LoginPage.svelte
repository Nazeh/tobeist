<script>
  import { login } from 'utils/auth';
  import Main from '../layout/Main';
  import LoginButton from 'components/LoginButton';

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
    background-color: #f1f1f1;
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
      <LoginButton clickHandler={loginGoogle}>Signin with Google</LoginButton>
      <LoginButton clickHandler={loginAnon}>Signin Anonymously</LoginButton>
    </form>
  </div>
</div>
