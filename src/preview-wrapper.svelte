<script>
  export let src;
  let style = null;
  let isThumbnail = false;
  $: if (src) {
    style = src ? `background-image: url(${src});` : null;
    isThumbnail = !src.startsWith('data:');
  }
</script>

{#if style}
  <div {style} class:rip-thumb={isThumbnail}>
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

  div.rip-thumb {
    filter: blur(20px);
    transform: scale(1.5);
  }
</style>
