<script>
  export let type;
  export let name;
  export let required;
</script>

<label class="flex flex-col">
  <slot />
  <input {type} {name} {required} class="mt-2" />
</label>
