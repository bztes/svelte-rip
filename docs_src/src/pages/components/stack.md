# Stack

The image stack can be used to display a responsive background image

```example
<script>
    import { blurhashToData, Image, Stack } from '@bztes/svelte-rip';

    let img = null;

    function load() {
        img = {
            src: 'static/robert-katzki-unsplash_org.jpg',
            hash: 'LiJj|x1*?:-QM{jYxGR+Oss.rrS5',
            formats: [
                { src: 'static/robert-katzki-unsplash_400.jpg', width: 400 },
                { src: 'static/robert-katzki-unsplash_800.jpg', width: 800 },
                { src: 'static/robert-katzki-unsplash_1600.jpg', width: 1600 }
            ]
        };
    }
</script>

{#if img}
    <div class="overflow-y-scroll h-96">
        <div class="h-48"></div>
        <Stack class="h-full" fixed>
            <Image slot="image" data={img} previewSrc={blurhashToData} />
            Example 1
        </Stack>
        <div class="h-48"></div>
        <Stack>
            <Image slot="image" data={img} />
            Example 2
        </Stack>
        <div class="h-48"></div>
        <Stack class="h-96">
            <Image slot="image" data={img} previewSrc={blurhashToData} />
            Example 3
        </Stack>
    </div>
{:else}
    <button on:click={load}>Load</button>
{/if}
```

## Properties

```properties
css | Style classes that shall be applied to the div container | string('')
fixed | Will fix the image position so it won't scroll | bool(false)
```
