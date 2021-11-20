<script context="module">
  export const defaults = {
    class: '',
    fadeAfter: 0,
    sizes: null,
    alt: (data) => data?.alt,
    formats: (data) => data?.formats ?? [],
    src: (dataFormat) => dataFormat?.src,
    previewSrc: (data) => data?.previewSrc,
    title: (data) => data?.title,
    width: (dataFormat) => dataFormat?.width,
    height: (data) => data?.height,
  };
</script>

<script>
  import { onMount } from 'svelte';
  import PreviewWrapper from './preview-wrapper.svelte';
  import { propValue } from './utils';

  const isSSR = typeof document === 'undefined';

  export let data = null;
  export let sizes = defaults.sizes;

  export let src = defaults.src;
  $: srcValue = isSSR ? null : propValue(src, data);

  export let width = defaults.width;
  $: widthValue = propValue(width, data);

  export let height = defaults.height;
  $: heightValue = propValue(height, data);

  export let alt = defaults.alt;
  $: altValue = propValue(alt, data);

  export let title = defaults.title;
  $: titleValue = propValue(title, data);

  export let previewSrc = defaults.previewSrc;
  $: previewSrcValue = propValue(previewSrc, data);

  export let formats = defaults.formats;
  $: srcsetValue = isSSR
    ? null
    : formats(data)
        ?.map((f) => `${propValue(src, f)} ${propValue(width, f)}w`)
        .join(',') ?? null;

  /**
   * Only show fade animation if image loading takes more than <fadeAfter> ms
   * @type {number}
   */
  export let fadeAfter = defaults.fadeAfter;
  let fade = false;
  let pageTime = 0;
  onMount(() => {
    pageTime = performance.now();
    isLoaded |= imgRef.complete;
  });

  let imgRef;

  let isLoaded = false;
  const onImageLoaded = () => {
    fade = fadeAfter >= 0 && performance.now() - pageTime > fadeAfter;
    isLoaded = true;
  };
</script>

<PreviewWrapper src={previewSrcValue}>
  <img
    bind:this={imgRef}
    src={srcValue}
    alt={altValue}
    srcset={srcsetValue}
    title={titleValue}
    {sizes}
    on:load|once={onImageLoaded}
    class={`rip-img ${$$restProps.class || defaults.class}`}
    class:loading={!isLoaded}
    class:fade
    width={widthValue}
    height={heightValue}
  />
</PreviewWrapper>

<style>
  img {
    opacity: 1;
  }
  img.loading {
    opacity: 0;
  }

  img.fade {
    transition-property: opacity;
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
  }
</style>
