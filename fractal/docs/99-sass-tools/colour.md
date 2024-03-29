---
label: colour
---
# colour

## blend-normal

### Description

Returns a color simulating Photoshop blend mode - Normal

### Parameters

| Name       | Description                                                      | Type  | Default Value |
| ---------- | ---------------------------------------------------------------- | ----- | ------------- |
| foreground | topmost colour. (likely to contain opacity, otherwise no effect) | Color |               |
| background | bottom colour.                                                   | Color |               |

### Returns

`Color`

### Used By

* [function] `blend-multiply`

### Links

[https://github.com/heygrady/scss-blend-modes](https://github.com/heygrady/scss-blend-modes>)

### Author

* Grady Kuhnline

### Source

```scss
@function blend-normal($foreground, $background) { safe: 
  $opacity: opacity($foreground);
  $background-opacity: opacity($background);

  // calculate opacity
  $bm-red: red($foreground) * $opacity + red($background) * $background-opacity *
    (1 - $opacity);
  $bm-green: green($foreground) * $opacity + green($background) *
    $background-opacity * (1 - $opacity);
  $bm-blue: blue($foreground) * $opacity + blue($background) *
    $background-opacity * (1 - $opacity);
  @return rgb($bm-red, $bm-green, $bm-blue);
}
```

---

## blend-multiply

### Description

Returns a color simulating Photoshop blend mode -  Multiply

### Parameters

| Name       | Description    | Type  | Default Value |
| ---------- | -------------- | ----- | ------------- |
| foreground | top colour.    | Color |               |
| background | bottom colour. | Color |               |

### Returns

`Color`

### Requires

* [function] `blend-normal` 

### Links

[https://github.com/heygrady/scss-blend-modes](https://github.com/heygrady/scss-blend-modes>)

### Author

* Grady Kuhnline

### Source

```scss
@function blend-multiply($foreground, $background) { safe: 
  $bm-red: red($background) * red($foreground) / 255;
  $bm-green: green($background) * green($foreground) / 255;
  $bm-blue: blue($background) * blue($foreground) / 255;

  @return blend-normal(
    rgba($bm-red, $bm-green, $bm-blue, opacity($foreground)),
    $background
  );
}
```

---

## grey

### Description

Returns a grey color from 0-white to 100-black

### Parameters

| Name | Description          | Type   | Default Value |
| ---- | -------------------- | ------ | ------------- |
| tint | number between 0-100 | Number |               |

### Returns

`Color`

### Example

```scss
grey(20)
// #ccc
```

### Source

```scss
@function grey($tint) { safe: 
  @return rgb(255 - $tint * 2.55, 255 - $tint * 2.55, 255 - $tint * 2.55);
}
```

---

## palette

### Description

Get a colour from the $palette map

### Parameters

| Name    | Description               | Type   | Default Value |
| ------- | ------------------------- | ------ | ------------- |
| palette | base color                | Color  |               |
| tone    | color variation to return | String | base          |

### Returns

`Color`

### Requires

* [variable] `palettes` 

### Source

```scss
@function palette($palette, $tone: base) { safe: 
  @return map-get(map-get($palettes, $palette), $tone);
}
```

---

## multiple-repeat

### Description

Repeats a value. For properties that take comma-separated lists

### Parameters

| Name        | Description             | Type   | Default Value |
| ----------- | ----------------------- | ------ | ------------- |
| value       | initial value to repeat | String |               |
| repetitions | number of repetitions   | Number |               |

### Returns

`String`

### Used By

* [mixin] `sm-gradient-animated`

* [mixin] `sm-gradient-animated`

### Source

```scss
@function multiple-repeat($value, $repetitions) { safe: 
  $values: ();
  @for $i from 1 through $repetitions {
    $next_value: $value;
    $values: append($values, $next_value, comma);
  }
  @return $values;
}
```

---

## perceivedbrightness

### Description

Returns the perceived brightness of a colour.

### Parameters

| Name  | Description   | Type  | Default Value |
| ----- | ------------- | ----- | ------------- |
| color | color to test | Color |               |

### Returns

`Percent`

### Requires

* [function] `sqrt` 

### Used By

* [function] `contrasting-text-color`

### Links

[http://www.nbdtech.com/Blog/archive/2008/04/27/Calculating-the-Perceived-Brightness-of-a-Color.aspx](http://www.nbdtech.com/Blog/archive/2008/04/27/Calculating-the-Perceived-Brightness-of-a-Color.aspx>)

[https://gist.github.com/jlong/f06f5843104ee10006fe](https://gist.github.com/jlong/f06f5843104ee10006fe>)

### Source

```scss
@function perceivedbrightness($color) { safe: 
  $red-magic-number: 241;
  $green-magic-number: 691;
  $blue-magic-number: 68;
  $brightness-divisor: $red-magic-number + $green-magic-number +
    $blue-magic-number;

  // Extract color components
  $red-component: red($color);
  $green-component: green($color);
  $blue-component: blue($color);

  // Calculate a brightness value in 3d color space between 0 and 255
  $number: sqrt(
    (
        ($red-component * $red-component * $red-magic-number) +
          ($green-component * $green-component * $green-magic-number) +
          ($blue-component * $blue-component * $blue-magic-number)
      ) / $brightness-divisor
  );

  // Convert to percentage and return
  @return 100% * $number / 255;
}
```

---

## contrasting-text-color

**Deprecated!** use choose-contrast-color() instead

### Description

Returns a contrasting text color, based on the brightness of the original color.
Assuming your original color is applied as a background-color, this will ensure that there is sufficient contrast ~~for a11y guidelines.~~ NOTE: no it doesn't return same results as W3C method!

### Parameters

| Name  | Description               | Type  | Default Value |
| ----- | ------------------------- | ----- | ------------- |
| color | color to test             | Color |               |
| light | The light color to return | Color | white         |
| dark  | The dark color to return  | Color | dark          |

### Returns

`Percent`

### Example

```scss
background-color: $c-orange;
color: contrasting-text-color($c-orange);
black
```

### Requires

* [function] `perceivedbrightness` 

### Links

[http://www.nbdtech.com/Blog/archive/2008/04/27/Calculating-the-Perceived-Brightness-of-a-Color.aspx](http://www.nbdtech.com/Blog/archive/2008/04/27/Calculating-the-Perceived-Brightness-of-a-Color.aspx>)

[https://gist.github.com/jlong/f06f5843104ee10006fe](https://gist.github.com/jlong/f06f5843104ee10006fe>)

### Source

```scss
@function contrasting-text-color($color, $light: white, $dark: dark) { safe: 
  @if (perceivedbrightness($color) > 65) {
    @return $dark;
  } @else {
    @return $light;
  }
}
```

---

## choose-contrast-color

### Parameters

| Name  | Description               | Type  | Default Value |
| ----- | ------------------------- | ----- | ------------- |
| color | color to test             | Color |               |
| light | The light color to return | Color | white         |
| dark  | The dark color to return  | Color | dark          |

### Returns

`Color`

### Example

```scss
background-color: $c-orange;
color: choose-contrast-color($c-orange);
black
```

### Links

[https://twitter.com/DanHollick/status/1417895175494373381](https://twitter.com/DanHollick/status/1417895175494373381>)

[https://gist.github.com/sgomes/9c03a58976b90e00f4172a510b9807fa](https://gist.github.com/sgomes/9c03a58976b90e00f4172a510b9807fa>)

### Source

```scss
@function choose-contrast-color($color, $light: white, $dark: dark) { safe: 
  $lightContrast: contrast($color, $light);
  $darkContrast: contrast($color, $dark);
  @if (max($lightContrast, $darkContrast) < 4.5) {
    @debug $color "$darkContrast" $darkContrast;
    @debug $color "$lightContrast" $lightContrast;
    @warn "contrast less than 4.5:1 WCAG 2 AA contrast ratio threshold";
  }
  @if ($lightContrast > $darkContrast) {
    @return $light;
  } @else {
    @return $dark;
  }
}
```

---

## sm-gradient

### Description

create a Background gradient from the SMG palette

### Parameters

| Name  | Description                                                                         | Type | Default Value |
| ----- | ----------------------------------------------------------------------------------- | ---- | ------------- |
| stops | 2 or colours, probably adjacent on the SMG base palette, but can also be hex values | List |               |

### Example

with 2 custom colours

```scss
@include sm-gradient($c-orange #f00);
```

with 3 SMG colours

```scss
@include sm-gradient($c-green $c-teal $c-blue);
```

### Source

```scss
@mixin sm-gradient($stops) { safe: 
  @each $stop in $stops {
    @if type-of($stop) != color {
      @warn '`#{$stop}` is not a color. I wish it was.';
    }
  }

  @if length($stops) == 1 {
    background-color: $stops;
  }
  @if length($stops) == 2 {
    background-image: linear-gradient(
      135deg,
      nth($stops, 1) 0%,
      nth($stops, 2) 100%
    );
  }
  @if length($stops) > 2 {
    background-image: radial-gradient(
        ellipse at bottom left,
        nth($stops, 1),
        rgba(nth($stops, 1), 0) 50%
      ),
      linear-gradient(to right, nth($stops, 2) 0%, nth($stops, 3) 100%);
  }
}
```

---

## sm-gradient-animated

### Description

Animates background gradients
Apply to an element that has a static sm-gradient (fallback) to add a subtle movement / fade to them.

### Parameters

| Name     | Description                       | Type   | Default Value |
| -------- | --------------------------------- | ------ | ------------- |
| duration | time + s                          | String |               |
| layers   | if multiple properties, number of | Number |               |

### Requires

* [function] `multiple-repeat` 

* [function] `multiple-repeat` 

### See

* [mixin] `sm-gradient`

### TODOs

* Apply as extra args to main sm-gradient mixin?

### Links

[(see footer logo-panel)](https://collection.sciencemuseum.org.uk>)

### Source

```scss
@mixin sm-gradient-animated($duration, $layers) { safe: 
  $name: sm-grad-fade-#{$duration}-#{$layers}; // if these variables change, we'd need to ouput a different name at root.
  animation-name: $name;
  animation-duration: $duration;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  @media (prefers-reduced-motion) {
    animation: none;
  }

  @at-root {
    @keyframes #{$name} {
      0% {
        background-size: multiple-repeat(100% 100%, $layers);
      }
      100% {
        background-size: multiple-repeat(200% 200%, $layers);
      }
    }
  }
}
```

---

## c-red

### Description

Base colour

### Type

`Color`

### Source

```scss
$c-red: #e60060
```

---

## c-orange

### Description

Base colour

### Type

`Color`

### Source

```scss
$c-orange: #ec6408
```

---

## c-yellow

### Description

Base colour

### Type

`Color`

### Source

```scss
$c-yellow: #ffee00
```

---

## c-green

### Description

Base colour

### Type

`Color`

### Source

```scss
$c-green: #95c11f
```

---

## c-teal

### Description

Base colour

### Type

`Color`

### Source

```scss
$c-teal: #4bbecf
```

---

## c-blue

### Description

Base colour

### Type

`Color`

### Source

```scss
$c-blue: #004899
```

---

## c-purple

### Description

Base colour

### Type

`Color`

### Source

```scss
$c-purple: #af1280
```

---

## palettes

### Description

Main palette variable map.
these can not be overrriden.

### Type

`Map`

### Example

Access via pallette function

```scss
background-color: palette(blue)
color: palette(blue, text)
```

### Used By

* [function] `palette`

### Source

```scss
$palettes: (
  "red": (
    base: $c-red,
    text: choose-contrast-color($c-red),
    light: blend-normal(rgba($c-red, 0.66), white),
    dark: blend-multiply($c-red, $c-red),
  ),
  "orange": (
    base: $c-orange,
    text: choose-contrast-color($c-orange),
    light: blend-normal(rgba($c-orange, 0.66), white),
    dark: blend-multiply($c-orange, $c-orange),
  ),
  "yellow": (
    base: $c-yellow,
    text: choose-contrast-color($c-yellow),
    light: blend-normal(rgba($c-yellow, 0.66), white),
    dark: blend-multiply($c-yellow, $c-yellow),
  ),
  "green": (
    base: $c-green,
    text: choose-contrast-color($c-green),
    light: blend-normal(rgba($c-green, 0.66), white),
    dark: blend-multiply($c-green, $c-green),
  ),
  "teal": (
    base: $c-teal,
    text: choose-contrast-color($c-teal),
    light: blend-normal(rgba($c-teal, 0.66), white),
    dark: blend-multiply($c-teal, $c-teal),
  ),
  "blue": (
    base: $c-blue,
    text: choose-contrast-color($c-blue),
    light: blend-normal(rgba($c-blue, 0.66), white),
    dark: blend-multiply($c-blue, $c-blue),
  ),
  "purple": (
    base: $c-purple,
    text: choose-contrast-color($c-purple),
    light: blend-normal(rgba($c-purple, 0.66), white),
    dark: blend-multiply($c-purple, $c-purple),
  ),
)
```

---
