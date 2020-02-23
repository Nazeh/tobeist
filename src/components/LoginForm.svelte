<script>
  import FormInput from 'components/FormInput';
  import LoginSubmit from 'components/LoginSubmit';
  import { signup, loginWithEmail, resetPassword } from 'utils/auth';

  export let formType = 'login';

  let fetching = false;
  let formErrors = [];

  const switchType = type => {
    formType = type;
    formErrors = [];
  };

  const submitHandler = e => {
    const { name, email, password } = e.target;
    formErrors = [];
    fetching = true;
    const fetchingEnd = () => (fetching = false);

    switch (formType) {
      case 'login':
        loginWithEmail(email.value, password.value)
          .catch(error => {
            formErrors = [error.message];
          })
          .finally(fetchingEnd);

        break;
      case 'signup':
        signup(email.value, password.value)
          .catch(error => {
            formErrors = [error.message];
          })
          .finally(fetchingEnd);
        break;
      case 'reset-password':
        resetPassword(email.value)
          .catch(error => {
            fetching = false;
            formErrors = [error.message];
          })
          .finally(() => {
            switchType('email-sent');
            fetchingEnd;
          });
      default:
        return;
    }
  };
</script>

<style>
  .login-form {
    display: flex;
    flex-direction: column;

    .cc {
      @apply text-black no-underline;
    }

    .error-message {
      position: relative;
      &:before {
        content: '🔴';
        position: absolute;
        left: 0;
        top: 0.6em;
        font-size: 0.5em;
      }
    }
  }
</style>

<form class="login-form" action="#" on:submit|preventDefault={submitHandler}>
  <ul>
    {#each formErrors as error}
      <li class="error-message pl-5 mb-6 text-red-500">{error}</li>
    {/each}
  </ul>

  {#if formType === 'login'}
    <FormInput type="email" name="email" autocomplete="email" required>
      Email
    </FormInput>
    <FormInput
      type="password"
      name="password"
      autocomplete="current-password"
      required>
      Password
    </FormInput>
    <LoginSubmit {fetching}>Log in</LoginSubmit>
    <a
      href="/"
      class="text-center"
      on:click|preventDefault={() => switchType('reset-password')}>
      Forgot your password?
    </a>
    <hr />
    <p class="text-center">
      Don't have an account?
      <a href="/" on:click|preventDefault={() => switchType('signup')}>
        Sign up in seconds
      </a>
    </p>

    <p class="text-center mt-4">
      <a class="cc" href="https://www.nazeh.me/" target="blank">ⓒ Nazeh</a>
      <span class="text-center ml-3">Made with Svelte</span>
    </p>
  {:else if formType === 'signup'}
    <FormInput type="text" name="name" minlength="4" required>
      Your name
    </FormInput>
    <FormInput type="email" name="email" autocomplete="email" required>
      Email
    </FormInput>
    <FormInput
      type="password"
      name="password"
      autocomplete="current-password"
      required>
      Password
    </FormInput>
    <label class="font-normal flex items-center">
      <input class="mb-0 mr-2" type="checkbox" name="terms" required />
      I agree to the
      <a href="/" class="mx-1" on:click|preventDefault>Terms of Service</a>
      {' and '}
      <a href="/" class="ml-1" on:click|preventDefault>Privacy Policy</a>
      .
    </label>
    <LoginSubmit {fetching}>Create My Account</LoginSubmit>
  {:else if formType === 'reset-password'}
    To reset your password, please enter the email address of your Todoist
    account.
    <FormInput type="email" name="email" autocomplete="email" required>
      email
    </FormInput>
    <LoginSubmit {fetching}>Reset My Password</LoginSubmit>
  {:else}Email sent! You’ve been emailed a password reset link.{/if}

</form>
