# Settings

The global settings can be overwritten in the respective default objects, e.g. ImageDefaults, BlurhashDefaults, ...

## Example: Image Settings

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
    <Image data={img} />
{:else}
    <button on:click={load}>Load</button>
{/if}
```
