<script context="module">
  export const defaults = {
    fit: 'cover',
    fixed: false,
    class: 'h-full',
  };
</script>

<script>
  export let fit = defaults.fit;
  export let fixed = defaults.fixed;
</script>

<div class="img-container {$$restProps.class || defaults.class}" class:fixed>
  <div class="img-layer preview {fit == 'scale-down' ? 'contain' : fit}">
    <slot name="preview" />
  </div>
  <div class="img-layer {fit}">
    <slot name="image" />
  </div>
  <slot />
</div>

<style>
  .img-container {
    position: relative;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    width: 100%;
  }

  .h-full {
    height: 100%;
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

  .img-layer > :global(img) {
    width: 100%;
    height: 100%;
  }

  .img-layer.contain > :global(img) {
    object-fit: contain;
  }

  .img-layer.cover > :global(img) {
    object-fit: cover;
  }

  .img-layer.fill > :global(img) {
    object-fit: fill;
  }

  .img-layer.none > :global(img) {
    object-fit: none;
  }

  .img-layer.scale-down > :global(img) {
    object-fit: scale-down;
  }
</style>
