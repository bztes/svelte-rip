# Image

Responsive image component using srcset

## Responsive

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
    <div style="height: 20rem;">
        <Image data={img} />
    </div>
{:else}
    <button on:click={load}>Load</button>
{/if}
```

## Preview Image

```example
<script>
    import { Image } from '@bztes/svelte-rip';

    let img = null;

    function load() {
        img = {
            src: 'static/robert-katzki-unsplash_org.jpg',
            preview: 'static/robert-katzki-unsplash_32.jpg'
        };
    }
</script>

{#if img}
    <div style="aspect-ratio: 2 / 1">
        <Image data={img}>
            <img src={img.preview} slot="preview" />
        </Image>
    </div>
{:else}
    <button on:click={load}>Load</button>
{/if}
```

## Preview with Blurhash

```example
<script>
    import { BlurhashImage, Image } from '@bztes/svelte-rip';

    let img = null;

    function load() {
        img = {
            src: 'static/robert-katzki-unsplash_org.jpg',
            blurhash: 'LiJj|x1*?:-QM{jYxGR+Oss.rrS5'
        };
    }
</script>

{#if img}
    <Image data={img} class="tile">
        <BlurhashImage hash={img.blurhash} slot="preview" />
    </Image>
{:else}
    <button on:click={load}>Load</button>
{/if}

<style>
    :global(.tile) {
        aspect-ratio: 1 / 1;
        max-width: 20rem;
    }
</style>
```

## Fixed

```example
<script>
    import { BlurhashImage, Image } from '@bztes/svelte-rip';

    let img = null;

    function load() {
        img = {
            src: 'static/robert-katzki-unsplash_org.jpg',
            blurhash: 'LiJj|x1*?:-QM{jYxGR+Oss.rrS5',
            formats: [
                { src: 'static/robert-katzki-unsplash_800.jpg', width: 800 },
                { src: 'static/robert-katzki-unsplash_1600.jpg', width: 1600 }
            ]
        };
    }
</script>

{#if img}
    <div>
        Scroll down<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <Image data={img} fixed>
            <BlurhashImage hash={img.blurhash} slot="preview" />
            <h1>Responsive + Preview + Fixed</h1>
            <p>Pastry sweet cake wafer ice cream gingerbread ice cream biscuit bear claw. Jelly-o liquorice candy pudding shortbread gingerbread biscuit liquorice. Tootsie roll candy cotton candy powder lollipop. Dessert gummies lemon drops pastry carrot cake topping cake. </p>
        </Image>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />End
    </div>
{:else}
    <button on:click={load}>Load</button>
{/if}

<style>
    div {
        overflow-y: scroll;
        max-height: 20rem;
    }
    h1, p {
        margin: 2rem;
        color: #fff;
    }
</style>
```

## Global Defaults Settings

```example
<script>
    import { Image, ImageDefaults } from '@bztes/svelte-rip';

    ImageDefaults.src = (data) => "static/" + data.src;
    ImageDefaults.formats = (data) => [400, 800, 1600].map((w) => {
        return { src: data.src.replace('org', w), width: w };
    });

    let img = null;

    function load() {
        img = { src: 'robert-katzki-unsplash_org.jpg' };
    }
</script>

{#if img}
    <div style="height: 20rem;">
        <Image data={img} />
    </div>
{:else}
    <button on:click={load}>Load</button>
{/if}
```

## Properties

```properties
alt | Function which returns the alternate image text | function((d) => d.alt)
css | Style classes that shall be applied to the img-container | string(null)
data | Image object which contains the image path, alternative image formats, widths, ... | object(null)
fadeAfter | No fade effect if image could be loaded within X ms | number(500)
fixed | If true the image will not scroll | bool(false)
formats | Function that returns an array of alternative image formats, each entry must provide a value for `src` and `width` | function((d) => d.formats)
sizes | Image sizes attribute | string(null)
src | Function that returns the image path | function((d) => d.src)
title | Function which returns the image title | function((d) => d.title)
width | Function that returns the image width | function((d) => d.width)
```
