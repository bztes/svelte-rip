# Image

Responsive image component using srcset

## Basic unresponsive image

```example
<script>
    import { Image } from '@bztes/svelte-rip';

    let show = false;
</script>

{#if show}
    <Image class="w-full" src="static/robert-katzki-unsplash_org.jpg" />
{:else}
    <button on:click={() => show = true}>Load</button>
{/if}
```

## Responsive image

```example
<script>
    import { Image } from '@bztes/svelte-rip';

    let img = null;

    function load() {
        img = {
            src: 'static/robert-katzki-unsplash_org.jpg',
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

## Responsive image with thumbnail preview

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

## Responsive image with Blurhash preview

```example
<script>
    import { Image, blurhashToData } from '@bztes/svelte-rip';

    let img = null;

    function load() {
        img = {
            src: 'static/robert-katzki-unsplash_org.jpg',
            hash: 'LGF5]+Yk^6#M@-5c,1J5@[or[Q6.',
            formats: [
                { src: 'static/robert-katzki-unsplash_400.jpg', width: 400 },
                { src: 'static/robert-katzki-unsplash_800.jpg', width: 800 }
            ]
        };
    }
</script>

{#if img}
    <Image data={img} previewSrc={blurhashToData} />
    <!-- Same as ...
    <Image data={img} previewSrc={() => blurhashToData(img)} />
    <Image data={img} previewSrc={() => blurhashToData(null, {hash: img.hash})} />
    <Image data={img} previewSrc={() => blurhashToData(img, {hash: (d) => d.hash})} />
    -->
{:else}
    <button on:click={load}>Load</button>
{/if}
```

## Properties

```properties
alt* | Alternate image text | string('')
css | Style classes that shall be applied to the img element | string('')
data | Object with the image properties. | object(null)
fadeAfter | No fade effect if image could be loaded within X ms. 0 will always fade, -1 to deactivate | number(0)
formats* | Array of alternative image formats, each entry must provide a value for `src` and `width` | object[]([])
height* | Image height | int(null)
previewSrc* | Preview image url. Could be any value that is accepted by background url() | string(null)
sizes | Image sizes attribute | string(null)
src* | Image source | string(null)
title* | Image title | string(null)
width* | Image width | int(null)
```

\* Attribute can be accessor function as well as a value
