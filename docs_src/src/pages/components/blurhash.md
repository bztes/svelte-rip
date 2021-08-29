# Blurhash

Blurhash Image

## Minimal Example

```example
<script>
    import { Blurhash } from '@bztes/svelte-rip';
</script>

<Blurhash hash="LGF5]+Yk^6#M@-5c,1J5@[or[Q6." />
```

## Properties

```properties
hash | Blurhash image value | string('L1T...')
alt | Alternate text for the image | string('preview')
ratio | Aspect ration of the image: with / height | number(1.333)
resolution | Blurhash image width in pixel. For performance reasons it's recommended to keep this number small | number(32)
```
