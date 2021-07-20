# svelte-rip

[Svelte][svelte] **r**esponsive **i**mages and image **p**review using [BlurHash][blurhash]

## Examples

```js
import { BlurhashImage, Image } from 'svelte-rip';
```

```js
// override default settings

import { Settings } from 'svelte-rip';

Settings.src = (data) => IMAGE_PATH + data.url;
Settings.alt = (data) => data.alternativeText;
Settings.formats = (data) => Object.values(data.formats);
```

```js
// responsive image

<script>
  import { Image } from 'svelte-rip';
</script>

<Image data={item.img} />
```

```js
// responsive image with blurhash preview

<script>
  import { BlurhashImage, Image } from 'svelte-rip';
</script>

<Image data="{item.img}" sizes="(min-width: 800px) 50vw, 100vw">
  <BlurhashImage slot="preview" />
</Image>
```

```js
// fixed responsive image with blurhash preview and some overlay content

<script>
  import { BlurhashImage, Image } from 'svelte-rip';
</script>

<Image data={item.img} fixed>
  <BlurhashImage slot="preview" />
  <div style="height: 100vh;">
    <h1>{item.title}</h1>
    <p>{item.intro}</p>
  </div>
</Image>
```

[svelte]: https://github.com/sveltejs/svelte
[blurhash]: https://github.com/woltapp/blurhash
