# Image

Responsive image component using srcset

## Responsive Image with Thumbnail Preview

```example
<script>
    import { Image } from '@bztes/svelte-rip';

    let img = null;

    function load() {
        img = {
            src: 'static/robert-katzki-unsplash_org.jpg',
            previewSrc: 'static/robert-katzki-unsplash_32.jpg',
            formats: [
                { src: 'static/robert-katzki-unsplash_32.jpg', width: 32 },
                { src: 'static/robert-katzki-unsplash_400.jpg', width: 400 },
                { src: 'static/robert-katzki-unsplash_600.jpg', width: 600 },
                { src: 'static/robert-katzki-unsplash_800.jpg', width: 800 },
                { src: 'static/robert-katzki-unsplash_1000.jpg', width: 1000 },
                { src: 'static/robert-katzki-unsplash_1600.jpg', width: 1600 }
            ]
        };
    }
</script>

{#if img}
    <Image data={img} />
{:else}
    <button on:click={load}>Load</button>
{/if}
```

## Responsive Image with Blurhash Preview

```example
<script>
    import { Image, blurhashToData } from '@bztes/svelte-rip';

    let img = null;

    function load() {
        img = {
            src: 'static/robert-katzki-unsplash_org.jpg',
            hash: 'LGF5]+Yk^6#M@-5c,1J5@[or[Q6.',
            formats: [
                { src: 'static/robert-katzki-unsplash_1000.jpg', width: 1000 },
                { src: 'static/robert-katzki-unsplash_1600.jpg', width: 1600 }
            ]
        };
    }
</script>

{#if img}
    <Image data={img} previewSrc={blurhashToData} />
{:else}
    <button on:click={load}>Load</button>
{/if}
```

## Properties

```properties
alt | Function which returns the alternate image text | function((d) => d.alt)
css | Style classes that shall be applied to the img element | string('')
data | Image object which contains the image path, alternative image formats, widths, ... | object(null)
fadeAfter | No fade effect if image could be loaded within X ms. 0 will always fade, -1 to deactivate | number(0)
formats | Function that returns an array of alternative image formats, each entry must provide a value for `src` and `width` | function((d) => d.formats)
previewSrc | Function that returns the preview image url. Could be any value that is accepted by background url() | function((d) => d.previewSrc)
sizes | Image sizes attribute | string(null)
src | Function that returns the image path | function((d) => d.src)
title | Function which returns the image title | function((d) => d.title)
width | Function that returns the image width | function((d) => d.width)
```
