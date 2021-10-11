<script context="module">
  export const defaults = {
    hash: 'L1TSUA?bfQ?b~qj[fQj[fQfQfQfQ',
    alt: 'preview',
    ratio: 1.333,
    resolution: 32,
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=',
  };

  export const toData = (img) => {
    if (typeof document === 'undefined') {
      return defaults.src;
    }

    img = {
      ...defaults,
      ...img,
    };

    const w = img.resolution;
    const h = Math.round(img.resolution / img.ratio);
    const pixels = decode(img.hash, w, h);
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.createImageData(w, h);
    imageData.data.set(pixels);
    ctx.putImageData(imageData, 0, 0);
    return canvas.toDataURL('image/png');
  };
</script>

<script>
  import { decode } from 'blurhash';

  export let hash = defaults.hash;
  export let alt = defaults.alt;
  export let ratio = defaults.ratio;
  export let resolution = defaults.resolution;

  let src = defaults.src;

  $: if (hash && resolution && ratio) {
    src = toData({ hash, resolution, ratio });
  }
</script>

<img {src} {alt} />

<style>
  img {
    width: 100%;
  }
</style>
