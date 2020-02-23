<script>
  import { login } from 'utils/auth';
  import Main from '../layout/Main';
  import LoginButton from 'components/LoginButton';
  import FormInput from 'components/FormInput';
  import SVG from 'components/SVG';
  import logo from 'images/tobeist-logo.svg';

  let signUp;
  let oauthError;

  const submitHandler = e => {
    const { name, email, password } = e.target;
    if (signUp) {
    } else {
      login('EMAIL&PASSWORD');
    }
  };
</script>

<style global>
  #login-bg {
    height: 100%;

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

    form {
      display: flex;
      flex-direction: column;

      .submit-btn {
        @apply bg-red-400 text-white font-bold border-red-400;

        &:hover {
          @apply bg-red-600 border-red-500;
        }
      }
    }

    .cc {
      @apply text-black no-underline;
    }
  }
</style>

<div id="login-bg" class="bg-gray-300">
  <main class="flex flex-col pt-32 items-center">
    <div class="wrapper flex flex-col justify-center px-12">
      <div class="flex justify-center mb-10">
        <SVG src={logo} class="logo w-10 mr-5">-</SVG>
        <h1 class="text-red-500 font-bold text-4xl">tobeist</h1>
      </div>
      {oauthError ? oauthError : ''}
      <LoginButton
        clickHandler={() => login('GOOGLE').then(res => (oauthError = res))}>
        Log in with Google Account
      </LoginButton>
      <LoginButton
        clickHandler={() => login('DEMO').then(res => (oauthError = res))}>
        Log in Anonymously
      </LoginButton>
      <div class="seperator ">
        <span>OR</span>
      </div>
      <form action="#" on:submit|preventDefault={submitHandler}>
        {#if signUp}
          <FormInput type="text" name="name" required>Your name</FormInput>
          <FormInput type="email" name="email" required>Email</FormInput>
          <FormInput type="password" name="password" required>
            Password
          </FormInput>
          <label class="font-normal flex items-center">
            <input class="mb-0 mr-2" type="checkbox" name="terms" required />
            I agree to the
            <a href="/" class="mx-1" on:click|preventDefault>
              Terms of Service
            </a>
            {' and '}
            <a href="/" class="ml-1" on:click|preventDefault>Privacy Policy</a>
            .
          </label>
          <LoginButton type="submit" class="submit-btn ">
            Create My Account
          </LoginButton>
        {:else}
          <FormInput type="email" name="email" required>Email</FormInput>
          <FormInput type="password" name="password" required>
            Password
          </FormInput>
          <LoginButton type="submit" class="submit-btn" required>
            Log in
          </LoginButton>
          <a href="/" class="text-center">Forgot your password?</a>
        {/if}
        {#if !signUp}
          <hr />
          <p class="text-center">
            Don't have an account?
            <a
              href="/"
              on:click|preventDefault={() => {
                signUp = true;
              }}>
              Sign up in seconds
            </a>
          </p>

          <p class="text-center mt-4">
            <a class="cc" href="https://www.nazeh.me/" target="blank">
              ⓒ Nazeh
            </a>
            <span class="text-center ml-3">Made with Svelte</span>
          </p>
        {/if}
      </form>
    </div>
  </main>
</div>
