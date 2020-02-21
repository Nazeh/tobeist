<script>
  import Button from 'components/Button';

  let signUp;

  const handleSignUp = e => {
    e.preventDefault();
    signUp = true;
  };
</script>

<style>
  p {
    text-align: center;
  }

  button[type='submit'] {
    background-color: var(--colors-primary-500);
    color: white;
    font-weight: 500;
  }

  button[type='submit']:hover {
    background-color: var(--colors-primary-600);
  }
</style>

{#if signUp}
  <label for="name">Your name</label>
  <input type="text" name="name" />
  <label for="email">Email</label>
  <input type="email" name="email" />
  <label for="password">Password</label>
  <input type="password" name="password" />
  <button type="submit">Create My Account</button>
{:else}
  <label for="email">Email</label>
  <input type="email" name="email" />
  <label for="password">Password</label>
  <input type="password" name="password" />
  <button type="submit">Log in</button>
{/if}
{#if !signUp}
  <hr />
  <p>
    Don't have an account?
    <a href="/" on:click={handleSignUp}>Sign up in seconds</a>
  </p>
{/if}
