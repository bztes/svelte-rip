<script context="module">
  export const defaults = {
    fadeAfter: 500,
    fit: 'cover',
    fixed: false,
    class: 'h-full',
    sizes: null,
    alt: (data) => data.alt,
    formats: (data) => data.formats,
    src: (data) => data.src,
    title: (data) => data.title,
    width: (format) => format.width,
  };
</script>

<script>
  import { onMount } from 'svelte';

  export let data = null;
  export let sizes = defaults.sizes;
  export let fit = defaults.fit;
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

<div class="img-container {$$restProps.class || defaults.class}" class:fixed>
  <div class="img-layer {fit}">
    <img
      src={srcValue}
      alt={altValue}
      srcset={srcsetValue}
      title={titleValue}
      {sizes}
      on:load={load}
    />
  </div>
  <div
    class="img-layer preview {fit == 'scale-down' ? 'contain' : fit}"
    class:hidden={isLoaded}
    class:fade
  >
    <slot name="preview" />
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
