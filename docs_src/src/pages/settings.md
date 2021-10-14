# Settings

The global settings can be overwritten in the respective default objects, e.g. ImageDefaults, BlurhashDefaults, ...

## Example: Image Settings

```example
<script>
    import { Image, ImageDefaults } from '@bztes/svelte-rip';

    ImageDefaults.src = (data) => data ? "static/" + data.src : null;
    ImageDefaults.formats = (data) => data ? [400, 800, 1600].map((w) => {
        return { src: data.src.replace('org', w), width: w };
    }) : null;

    let img = null;

    function load() {
        img = { src: 'robert-katzki-unsplash_org.jpg' };
    }
</script>

{#if img}
    <Image data={img} />
    <!-- Don't forget null handling for images where not data is provided -->
    <Image src="static/robert-katzki-unsplash_400.jpg" />
{:else}
    <button on:click={load}>Load</button>
{/if}
```
