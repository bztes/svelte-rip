<script>
  export let src;
  let style = null;
  $: if (src) {
    style = src ? `background-image: url(${src});` : null;
  }
</script>

{#if style}
  <div {style}>
    <slot />
  </div>
{:else}
  <slot />
{/if}

<style>
  div {
    display: inline-block;
    background-repeat: no-repeat;
    background-size: cover;
    line-height: 0;
  }
</style>
