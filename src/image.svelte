<script context="module">
  export const defaults = {
    class: '',
    fadeAfter: 0,
    sizes: null,
    alt: (data) => data.alt,
    formats: (data) => data.formats,
    src: (data) => data.src,
    previewSrc: (data) => data.previewSrc,
    title: (data) => data.title,
    width: (format) => format.width,
  };
</script>

<script>
  import { onMount } from 'svelte';
  import PreviewWrapper from './preview-wrapper.svelte';

  export let data = null;
  export let sizes = defaults.sizes;

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

  export let previewSrc = defaults.previewSrc;
  let previewSrcValue = null;
  $: if (data) {
    previewSrcValue = previewSrc(data);
  }

  /**
   * Only show fade animation if image loading takes more than <fadeAfter> ms
   * @type {number}
   */
  export let fadeAfter = defaults.fadeAfter;
  let fade = false;
  let pageTime = 0;
  onMount(() => {
    pageTime = performance.now();
  });

  let isLoaded = false;
  const onImageLoaded = (e) => {
    fade = fadeAfter >= 0 && performance.now() - pageTime > fadeAfter;
    isLoaded = true;
  };
</script>

<PreviewWrapper src={previewSrcValue}>
  <img
    src={srcValue}
    alt={altValue}
    srcset={srcsetValue}
    title={titleValue}
    {sizes}
    on:load={onImageLoaded}
    class={`rip-img ${$$restProps.class || defaults.class}`}
    class:hidden={!isLoaded}
    class:fade
  />
</PreviewWrapper>

<style>
  img {
    opacity: 1;
  }
  img.hidden {
    opacity: 0;
  }

  img.fade {
    transition-property: opacity;
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
  }
</style>
