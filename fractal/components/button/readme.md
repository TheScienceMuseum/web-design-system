buttons should inherit a default theme colour from a t-btn--{theme}class set on body/html ?

Although that's a messy way fo doing it, better to initialise the mixin with an appropriate color for your site, e.g.

```
@include button($theme: blue)
```

or

```
@include button($theme: #f00ba2)
```
