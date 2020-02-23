<script>
  export let type;
  export let name;
  export let required;
  export let minlength;
  export let maxlength;
  export let autocomplete;
</script>

<label class="flex flex-col">
  <slot />
  <input
    {type}
    {name}
    {required}
    {autocomplete}
    {minlength}
    {maxlength}
    class="mt-2" />
</label>
