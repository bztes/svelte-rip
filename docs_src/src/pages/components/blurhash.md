# Blurhash

Blurhash Image

## With attributes attributes

```example
<script>
    import { Blurhash } from '@bztes/svelte-rip';
</script>

<Blurhash hash="LGF5]+Yk^6#M@-5c,1J5@[or[Q6." />
```

## With data object

```example
<script>
    import { Blurhash } from '@bztes/svelte-rip';

    const data = {
        hash: "LGF5]+Yk^6#M@-5c,1J5@[or[Q6.",
        ratio: 3,
    }
</script>

<Blurhash {data} />
```

## Properties

```properties
data | Object with the image properties | object(null)
hash* | Blurhash image value | string('L1T...')
ratio* | Aspect ration of the image: with / height | number(1.333)
resolution | Blurhash image width in pixel. For performance reasons it's recommended to keep this number small | number(32)
```

\* Attribute can be accessor function as well as a value
