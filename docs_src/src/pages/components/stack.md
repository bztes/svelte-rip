# Stack

Image stack to display a preview image

## Image with thumbnail preview

```example
<script>
    import { Image, Stack } from '@bztes/svelte-rip';

    let img = null;

    function load() {
        img = {
            src: 'static/robert-katzki-unsplash_org.jpg',
            preview: 'static/robert-katzki-unsplash_32.jpg'
        };
    }
</script>

{#if img}
    <Stack class="h-96" fit="cover">
        <Image slot="image" data={img} />
        <img slot="preview" src={img.preview} />
    </Stack>
{:else}
    <button on:click={load}>Load</button>
{/if}

<style>
    :global(.h-96) {
        height: 24rem;
    }
</style>
```

## Image with Blurhash preview

```example
<script>
    import { Blurhash, Image, Stack } from '@bztes/svelte-rip';

    let img = null;

    function load() {
        img = {
            src: 'static/robert-katzki-unsplash_org.jpg',
            blurhash: 'LiJj|x1*?:-QM{jYxGR+Oss.rrS5'
        };
    }
</script>

{#if img}
    <Stack class="h-96" fit="scale-down">
        <Image slot="image" data={img} />
        <Blurhash slot="preview" hash={img.blurhash} ratio="1.5" />
    </Stack>
{:else}
    <button on:click={load}>Load</button>
{/if}

<style>
    :global(.h-96) {
        height: 24rem;
    }
</style>
```

## Fixed image

```example
<script>
    import { Blurhash, Image, Stack } from '@bztes/svelte-rip';

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
        <Stack fixed>
            <Image slot="image" data={img} />
            <Blurhash slot="preview" hash={img.blurhash} />
            <h1>Responsive + Preview + Fixed</h1>
            <p>Pastry sweet cake wafer ice cream gingerbread ice cream biscuit bear claw. Jelly-o liquorice candy pudding shortbread gingerbread biscuit liquorice. Tootsie roll candy cotton candy powder lollipop. Dessert gummies lemon drops pastry carrot cake topping cake. </p>
        </Stack>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />End
    </div>
{:else}
    <button on:click={load}>Load</button>
{/if}

<style>
    div {
        overflow-y: scroll;
        height: 20rem;
    }
    h1, p {
        margin: 2rem;
        color: #fff;
    }
</style>
```

## Image container height

```example
<script>
    import { Stack, Image } from '@bztes/svelte-rip';

    let img = null;

    function load() {
        img = {
            src: 'static/robert-katzki-unsplash_org.jpg',
        };
    }
</script>

{#if img}
    Default: 100% of parent container
    <div style="height:120px">
        <Stack data={img}>
            <Image slot="image" data={img} />
        </Stack>
    </div>

    Fixed container height by passing a style class (height: 24rem;)
    <Stack class="h-96">
        <Image slot="image" data={img} />
    </Stack>

    Auto container height by passing a style class (height: auto;)
    <Stack class="h-auto">
        <Image slot="image" data={img} />
        <div>Lore<br />Ipsum</div>
    </Stack>
{:else}
    <button on:click={load}>Load</button>
{/if}

<style>
    :global(.h-96) {
        height: 24rem;
    }
    :global(.h-auto) {
        height: auto;
    }
</style>
```

## Properties

```properties
css | Style classes that shall be applied to the img-container | string('h-full')
fit | defines how the image should be resized to fit into the container (see object-fit) | string('cover')
fixed | If true the image will not scroll | bool(false)
```
