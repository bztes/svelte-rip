<script context="module">
  export const defaults = {
    fixed: false,
    sizes: null,
    fadeAfter: 500,
    src: (data) => data.src,
    width: (format) => format.width,
    alt: (data) => data.alt,
    title: (data) => data.title,
    formats: (data) => data.formats,
  };
</script>

<script>
  import { onMount } from 'svelte';

  export let data = null;
  export let sizes = defaults.sizes;
  export let fixed = defaults.fixed;

  export let src = defaults.src;
  let srcValue = null;
  $: if (data) {
    srcValue = src(data);
  }

  export let formats = defaults.formats;
  export let width = defaults.width;
  let srcsetValue = null;
  $: if (data) {
    srcsetValue =
      formats(data)
        ?.map((f) => `${src(f)} ${width(f)}w`)
        .join(',') || null;
  }

  export let alt = defaults.alt;
  let altValue = null;
  $: if (data) {
    altValue = alt(data);
  }

  export let title = defaults.title;
  let titleValue = null;
  $: if (data) {
    titleValue = title(data);
  }

  /**
   * Only show fade animation if image loading takes more than ...
   * @type {number}
   */
  export let fadeAfter = defaults.fadeAfter;
  let fade = false;
  let pageTime = 0;
  onMount(() => {
    pageTime = performance.now();
  });

  let isLoaded = false;
  const load = () => {
    fade = fadeAfter >= 0 && performance.now() - pageTime > fadeAfter;
    isLoaded = true;
  };
</script>

<div class="img-container {$$restProps.class || ''}" class:fixed>
  <div class="img-layer">
    <img
      src={srcValue}
      alt={altValue}
      srcset={srcsetValue}
      title={titleValue}
      {sizes}
      on:load={load}
    />
  </div>
  <div class="img-layer preview" class:hidden={isLoaded} class:fade>
    <slot name="preview" />
  </div>
  <slot />
</div>

<style>
  .img-container {
    display: inline-block;
    position: relative;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    width: 100%;
    height: 100%;
  }

  .img-container.fixed .img-layer {
    position: fixed;
  }

  .img-layer.preview.hidden {
    opacity: 0;
  }

  .img-layer.preview.fade {
    transition: opacity 0.8s ease-in-out;
  }

  .img-layer {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .img-layer :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
