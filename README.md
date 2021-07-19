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

import { Image } from 'svelte-rip';

<Image data={item.img} sizes="96px" />
```

```js
// responsive image with blurhash preview

import { BlurhashImage, Image } from 'svelte-rip';

<Image data={item.img} sizes="(min-width: 800px) 50vw, 100vw">
  <BlurhashImage slot="preview" />
</Image>
```

```js
// responsive image with blurhash preview and some overlay content

import { BlurhashImage, Image } from 'svelte-rip';

<Image data={item.img} fixed>
  <BlurhashImage slot="preview" />
  <div style="height: 100vh;">
    <h1>{item.title}</h1>
    <p>{item.intro}</p>
  </div>
</Image>
```
