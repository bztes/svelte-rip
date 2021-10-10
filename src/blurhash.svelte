<script context="module">
  export const defaults = {
    hash: 'L1TSUA?bfQ?b~qj[fQj[fQfQfQfQ',
    alt: 'preview',
    ratio: 1.333,
    resolution: 32,
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=',
  };
</script>

<script>
  import { decode } from 'blurhash';

  export let hash = defaults.hash;
  export let alt = defaults.alt;
  export let ratio = defaults.ratio;
  export let resolution = defaults.resolution;

  let src = defaults.src;

  $: if (hash && ratio && resolution) {
    if (typeof document === 'undefined') {
      src = defaults.src;
    } else {
      const w = resolution;
      const h = Math.round(resolution / ratio);
      const pixels = decode(hash, w, h);
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      const imageData = ctx.createImageData(w, h);
      imageData.data.set(pixels);
      ctx.putImageData(imageData, 0, 0);
      src = canvas.toDataURL('image/png');
    }
  }
</script>

<img {src} {alt} />

<style>
  img {
    width: 100%;
  }
</style>
