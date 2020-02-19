<script>
 import firebase,{ auth, googleProvider } from 'config/firebase';
 import { authState } from 'rxfire/auth';

 let user=authState(auth);

 function login() {
   auth.signInWithPopup(googleProvider);
   //  firebase.auth().signInAnonymously();
   console.log(auth);
 }

</script>

<main>
  <section>
    {#if $user}
      <h3>Hi { $user.displayName }!</h3>
      <button on:click={ () => auth.signOut() }>Logout</button>

      <img src={ $user.photoURL } width="100" alt="$user avatar">
      <p>Your $userID is { $user.uid }</p>
    {:else if $user === null}
        <button on:click={login}>
            Signin with Google
        </button>
    {:else }
        loading
    {/if}
    </section>
</main>

<style>
  main {
    min-height: 100%;
    width: 760px;
    background-color: white;
    border: 2px solid rgb(240, 240, 240);
    border-top: none;
  }
</style>

