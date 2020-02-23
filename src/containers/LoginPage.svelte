<script>
  import { login } from 'utils/auth';
  import Main from '../layout/Main';
  import LoginButton from 'components/LoginButton';
  import LoginForm from 'components/LoginForm';
  import SVG from 'components/SVG';
  import logo from 'images/tobeist-logo.svg';

  let formType;
</script>

<style global>
  #login-bg {
    min-height: 100%;

    input,
    button {
      height: 2.7em;
    }

    label {
      margin-bottom: 13px;
    }

    button {
      &:hover {
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
      }
    }

    main {
      width: 750px;
      height: 100%;
      max-width: 100%;
      margin: auto;
      background-color: white;
    }

    .wrapper {
      width: 414px;
      max-width: 100%;
    }

    .logo {
      path {
        fill: var(--bg-primary);
      }
    }

    hr {
      margin: 1em 0;
    }

    a {
      @apply text-red-500;
      text-decoration: underline;
    }

    .seperator {
      position: relative;
      border-top: 1px solid #ddd;
      margin: 2em 0;
      height: 0;

      span {
        position: absolute;
        left: 50%;
        top: -0.8em;
        transform: translateX(-50%);
        background-color: white;
        padding: 0 1em;
      }
    }
  }
</style>

<div id="login-bg" class="bg-gray-300">
  <main class="flex flex-col justify-center items-center">
    <div class="wrapper flex flex-col justify-center px-12">
      <div class="flex justify-center mb-10">
        <SVG src={logo} class="logo w-10 mr-5">-</SVG>
        <h1 class="text-red-500 font-bold text-4xl">tobeist</h1>
      </div>
      {#if formType !== 'reset-password'}
        <LoginButton clickHandler={() => login('GOOGLE')}>
          Log in with Google Account
        </LoginButton>
        <LoginButton clickHandler={() => login('DEMO')}>
          Log in Anonymously
        </LoginButton>
        <div class="seperator ">
          <span>OR</span>
        </div>
      {/if}
      <LoginForm bind:formType />
    </div>
  </main>
</div>
