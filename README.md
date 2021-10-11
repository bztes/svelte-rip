# svelte-rip

**ALPHA: API may change at any time**

[Svelte][svelte] components for **r**esponsive **i**mages and image **p**reviews (incl. [BlurHash][blurhash])

[Demo](https://bztes.github.io/svelte-rip/)

## Examples

### Responsive Image with Thumbnail Preview

```js
<script>
  import { Image } from '@bztes/svelte-rip';

  let imgData = {
    src: 'static/robert-katzki-unsplash_org.jpg',
    previewSrc: 'static/robert-katzki-unsplash_32.jpg',
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

### Responsive Image with Blurhash Preview

```js
<script>
    import { Image, blurhashToData } from '@bztes/svelte-rip';

    let imgData = {
      src: 'static/robert-katzki-unsplash_org.jpg',
      hash: 'LGF5]+Yk^6#M@-5c,1J5@[or[Q6.',
      formats: [ ... ]
    };
</script>

<Image data={imgData} previewSrc={blurhashToData} />
```

### Fixed background image

```js

<script>
  import { Image, Stack } from '@bztes/svelte-rip';

  // ...
</script>

<Stack fixed>
  <Image slot="image" data={imgData} />
  <h1>Hello Bello</h1>
</Stack>
```

### Adjust default settings

```js
import { ImageDefaults } from '@bztes/svelte-rip';

ImageDefaults.src = (data) => 'static/' + data.url;
ImageDefaults.alt = (data) => data.alternativeText;
ImageDefaults.formats = (data) => Object.values(data.formats);
```

[svelte]: https://github.com/sveltejs/svelte
[blurhash]: https://github.com/woltapp/blurhash
