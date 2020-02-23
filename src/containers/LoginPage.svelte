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
  }

  main {
    width: 750px;
    height: 100%;
    max-width: 100%;
    margin: auto;
    background-color: white;
  }

  .wrapper {
    width: 332px;
    max-width: 100%;
  }

  .btn-auth {
    @apply bg-transparent h-10 border border-gray-300 mb-3 rounded;
  }
</style>

<div class="login-bg bg-gray-200">
  <main class="flex flex-col justify-center items-center">
    <div class="wrapper flex flex-col justify-center">
      <div class="flex justify-center mb-5">
        <h1 class="text-red-500 font-bold text-3xl ">tobeist</h1>
      </div>
      <button
        on:click={loginGoogle}
        class="btn-auth hover:border-gray-500 hover:bg-gray-200">
        Log in with Google Account
      </button>
      <button
        on:click={loginGoogle}
        class="btn-auth hover:border-gray-500 hover:bg-gray-200">
        Log in with Facebook Account
      </button>
      <button
        on:click={loginAnon}
        class="btn-auth hover:border-gray-500 hover:bg-gray-200">
        Try Demo
      </button>
      <hr />
      <LoginForm />
    </div>
  </main>
</div>
