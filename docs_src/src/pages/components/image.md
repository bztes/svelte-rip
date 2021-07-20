# Image

Responsive image component using srcset

## Responsive

```example
<script>
    import { Image } from 'svelte-rip';

    let img = null;

    function load() {
        img = {
            src: '../static/robert-katzki-unsplash_org.jpg',
            formats: [
                { src: '../static/robert-katzki-unsplash_32.jpg', width: 32 },
                { src: '../static/robert-katzki-unsplash_400.jpg', width: 400 },
                { src: '../static/robert-katzki-unsplash_600.jpg', width: 600 },
                { src: '../static/robert-katzki-unsplash_800.jpg', width: 800 },
                { src: '../static/robert-katzki-unsplash_1000.jpg', width: 1000 },
                { src: '../static/robert-katzki-unsplash_1600.jpg', width: 1600 }
            ]
        };
    }
</script>

{#if img}
    <Image data={img} class="img-ratio" />
{:else}
    <button on:click={load}>Load</button>
{/if}

<style>
    :global(.img-ratio) {
        aspect-ratio: 2 / 1;
    }
</style>
```

## Preview Image

```example
<script>
    import { Image } from 'svelte-rip';

    let img = null;

    function load() {
        img = {
            src: '../static/robert-katzki-unsplash_org.jpg',
            preview: '../static/robert-katzki-unsplash_32.jpg'
        };
    }
</script>

{#if img}
    <Image data={img} class="img-ratio">
        <img src={img.preview} slot="preview" />
    </Image>
{:else}
    <button on:click={load}>Load</button>
{/if}

<style>
    :global(.img-ratio) {
        aspect-ratio: 2 / 1;
    }
</style>
```

## Preview with Blurhash

```example
<script>
    import { BlurhashImage, Image } from 'svelte-rip';

    let img = null;

    function load() {
        img = {
            src: '../static/robert-katzki-unsplash_org.jpg',
            blurhash: 'LiJj|x1*?:-QM{jYxGR+Oss.rrS5'
        };
    }
</script>

{#if img}
    <Image data={img} class="img-ratio">
        <BlurhashImage hash={img.blurhash} slot="preview" />
    </Image>
{:else}
    <button on:click={load}>Load</button>
{/if}

<style>
    :global(.img-ratio) {
        aspect-ratio: 2 / 1;
    }
</style>
```

## Fixed

```example
<script>
    import { BlurhashImage, Image } from 'svelte-rip';

    let img = null;

    function load() {
        img = {
            src: '../static/robert-katzki-unsplash_org.jpg',
            blurhash: 'LiJj|x1*?:-QM{jYxGR+Oss.rrS5',
            formats: [
                { src: '../static/robert-katzki-unsplash_32.jpg', width: 32 },
                { src: '../static/robert-katzki-unsplash_400.jpg', width: 400 },
                { src: '../static/robert-katzki-unsplash_600.jpg', width: 600 },
                { src: '../static/robert-katzki-unsplash_800.jpg', width: 800 },
                { src: '../static/robert-katzki-unsplash_1000.jpg', width: 1000 },
                { src: '../static/robert-katzki-unsplash_1600.jpg', width: 1600 }
            ]
        };
    }
</script>

{#if img}
    <div>
        <p>Scroll down</p>
        <Image data={img} fixed>
            <BlurhashImage hash={img.blurhash} slot="preview" />
            <h1>Responsive + Preview + Fixed</h1>
        </Image>
        <p></p>
    </div>
{:else}
    <button on:click={load}>Load</button>
{/if}

<style>
    div {
        overflow-y: scroll;
        height: 30rem;
    }
    p {
        height: 30rem;
    }
    h1 {
        margin: 3em;
        text-align: center;
        color: #fff;
        mix-blend-mode: difference;
        font-family: sans serif;
    }
</style>
```

## Properties

```properties
data | Image object which includes the image sources, widths, ... | object(null)
sizes | Image sizes attribute | string(null)
fixed | Image will not scroll | bool(false)
src | Function that returns the image path of data or other formats | function((d) => d.src)
formats | Function that returns an array of image formats | function((d) => d.formats)
width | Function that returns the image width of data or other formats | function((d) => d.width)
alt | Function which returns an alternate image text | function((d) => d.alt)
title | Function which returns a image title | function((d) => d.title)
fadeAfter | No fade effect if image could be loaded within X ms | number(500)
```
