# svelte-rip

[Svelte][svelte] components for **r**esponsive **i**mages and image **p**reviews (incl. [BlurHash][blurhash])

[Demo](https://bztes.github.io/svelte-rip/)

## Examples

```js
// responsive image using srcset

<script>
  import { Image } from '@bztes/svelte-rip';

  let imgData = {
    src: 'static/robert-katzki-unsplash_org.jpg',
    alt: 'Rainbow Tunnel',
    formats: [
        { src: 'static/robert-katzki-unsplash_400.jpg', width: 400 },
        { src: 'static/robert-katzki-unsplash_800.jpg', width: 800 },
        { src: 'static/robert-katzki-unsplash_1000.jpg', width: 1000 },
    ]
  }:
</script>

<Image data={imgData} />
```

```js
// responsive image with BlurHash preview

<script>
  import { Blurhash, Image, Stack } from '@bztes/svelte-rip';

  export let imgData;
</script>

<Stack class="h-screen">
  <Image slot="image" data="{imgData}" sizes="(min-width: 800px) 50vw, 100vw" />
  <Blurhash slot="preview" hash={imgData.blurhash} />
</Stack>
```

```js
// fixed responsive background image with thumbnail preview

<script>
  import { Image, Stack } from '@bztes/svelte-rip';

  export let imgData;
</script>

<Stack class="h-screen" fixed>
  <Image slot="image" data={imgData} />
  <img slot="preview" src={imgData.thumbnail} />
  <div style="height: 100vh;">
    <h1>{item.title}</h1>
    <p>{item.intro}</p>
  </div>
</Stack>
```

```js
// customize default settings

import { ImageDefaults } from '@bztes/svelte-rip';

ImageDefaults.src = (data) => 'static/' + data.url;
ImageDefaults.alt = (data) => data.alternativeText;
ImageDefaults.formats = (data) => Object.values(data.formats);
```

[svelte]: https://github.com/sveltejs/svelte
[blurhash]: https://github.com/woltapp/blurhash
