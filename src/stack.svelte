<script context="module">
  export const defaults = {
    fixed: false,
    class: '',
  };
</script>

<script>
  export let fixed = defaults.fixed;
</script>

<div class="img-container {$$restProps.class || defaults.class}" class:fixed>
  <div class="img-layer">
    <slot name="image" />
  </div>
  <slot />
</div>

<style>
  .img-container {
    position: relative;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }

  .img-container.fixed .img-layer {
    position: fixed;
  }

  .img-layer {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .img-layer :global(*) {
    width: 100%;
    height: 100%;
  }

  .img-layer :global(img) {
    object-fit: cover;
  }
</style>
