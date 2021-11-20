<script context="module">
  import { decode } from 'blurhash';
  import { propValue } from './utils';

  const isSSR = typeof document === 'undefined';

  export const defaults = {
    alt: (data) => data?.alt,
    hash: (data) => data?.hash ?? 'L1TSUA?bfQ?b~qj[fQj[fQfQfQfQ',
    ratio: (data) => data?.ratio ?? 1.3333,
    resolution: 32,
    ssr: (data) =>
      data?.ssr ?? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=',
  };

  export const toData = (data, options) => {
    if (isSSR) {
      return propValue(options?.ssr ?? defaults.ssr, data);
    }

    let hash = propValue(options?.hash ?? defaults.hash, data);
    let ratio = propValue(options?.ratio ?? defaults.ratio, data);
    let resolution = options?.resolution ?? defaults.resolution;

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
    return canvas.toDataURL('image/png');
  };
</script>

<script>
  export let data;
  export let hash;
  export let ratio;
  export let resolution;

  export let alt = defaults.alt;
  $: altValue = propValue(alt, data);

  $: src = toData(data, { hash, ratio, resolution });
</script>

<img {src} alt={altValue} />

<style>
  img {
    width: 100%;
  }
</style>
