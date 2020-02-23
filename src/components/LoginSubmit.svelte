<script>
  import LoginButton from 'components/LoginButton';
  import Spinner from 'components/Spinner';

  export let fetching;
</script>

<style global>
  .submit-btn {
    @apply bg-red-400 text-white font-bold border-red-400;

    &:hover {
      @apply bg-red-600 border-red-500;
    }
  }
</style>

<LoginButton type="submit" class="submit-btn ">
  <slot />
</LoginButton>
{#if fetching}
  <Spinner class="w-6 mx-auto mb-2" />
{/if}
