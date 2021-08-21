<script>
  import { decode } from 'blurhash';

  export let hash = 'L1TSUA?bfQ?b~qj[fQj[fQfQfQfQ';
  export let alt = '';
  export let ratio = 1.333;
  export let resolution = 32;

  let src;

  $: if (hash && ratio && resolution) {
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
</script>

<img {src} {alt} />

<style>
  img {
    width: 100%;
  }
</style>
