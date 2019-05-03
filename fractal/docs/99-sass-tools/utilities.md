---
label: utilities
---
# utilities

## strip-unit

### Description

Removes the unit (e.g. px, em, rem) from a value, returning the number only.

### Parameters

| Name | Description                | Type   | Default Value |
| ---- | -------------------------- | ------ | ------------- |
| num  | Number to strip unit from. | Number |               |

### Returns

`Number` — The same number, sans unit.

### Source

```scss
@function strip-unit($num) { safe: 
  @return $num / ($num * 0 + 1);
}
```

---

## rem

### Description

Converts one or more pixel values into matching rem values.

### Parameters

| Name   | Description                                                                                                                                                      | Type        | Default Value |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------- |
| values | One or more values to convert. Be sure to separate them with spaces and not commas. If you need to convert a comma-separated list, wrap the list in parentheses. | Number,List |               |
| base   | The base value to use when calculating the `rem`. If this parameter is `null`, the function will reference the `$base-font-size` variable as the base.           | Number      | null          |

### Returns

`List` — A list of converted values.

### Source

```scss
@function rem($values, $base: null) { safe: 
  $rem-values: ();
  $count: length($values);

  // If no base is defined, defer to the global font size
  @if $base == null {
    $base: $base-font-size;
  }

  // If the base font size is a %, then multiply it by 16px
  // This is because 100% font size = 16px in most all browsers
  @if unit($base) == "%" {
    $base: ($base / 100%) * 16px;
  }

  @if $count == 1 {
    @return -zf-to-rem($values, $base);
  }

  @for $i from 1 through $count {
    $rem-values: append($rem-values, -zf-to-rem(nth($values, $i), $base));
  }

  @return $rem-values;
}
```

---

## opposite-direction

### Description

Returns the opposite direction of each direction in a list

### Parameters

| Name       | Description                | Type | Default Value |
| ---------- | -------------------------- | ---- | ------------- |
| directions | List of initial directions | List |               |

### Returns

`List` — List of opposite directions

### Used By

* [mixin] `triangle`

### Author

* Hugo Giraudel

### Source

```scss
@function opposite-direction($directions) { safe: 
  $opposite-directions: ();
  $direction-map: (
    "top": "bottom",
    "right": "left",
    "bottom": "top",
    "left": "right",
    "center": "center",
    "ltr": "rtl",
    "rtl": "ltr"
  );

  @each $direction in $directions {
    $direction: to-lower-case($direction);

    @if map-has-key($direction-map, $direction) {
      $opposite-directions: append(
        $opposite-directions,
        unquote(map-get($direction-map, $direction))
      );
    } @else {
      @warn 'No opposite direction can be found for `#{$direction}`. Direction omitted.';
    }
  }

  @return $opposite-directions;
}
```

---

## sqrt

### Description

Calculates a √square root
used in number conversion

### Used By

* [function] `perceivedbrightness`

### Links

[http://www.antimath.info/css/sass-sqrt-function/](http://www.antimath.info/css/sass-sqrt-function/>)

### Source

```scss
@function sqrt() { safe: 
  $x0: 1;
  $x1: $x0;

  @for $i from 1 through 10 {
    $x1: $x0 - ($x0 * $x0 - abs($r)) / (2 * $x0);
    $x0: $x1;
  }

  @return $x1;
}
```

---

## svg-uri

### Description

Helper function to easily use an SVG inline in CSS
without encoding it to base64, saving bytes.
It also helps with browser support.
A small function allowing skipping base64 encoding
and simply pasting the SVG markup right in the CSS.

### Parameters

| Name | Description         | Type   | Default Value |
| ---- | ------------------- | ------ | ------------- |
| svg  | SVG image to encode | String |               |

### Returns

`String` — Encoded SVG data uri

### Requires

* [function] `str-replace` 

* [function] `str-replace` 

* [function] `str-replace` 

* [function] `str-replace` 

* [function] `str-replace` 

### Links

[http://codepen.io/jakob-e/pen/doMoML](http://codepen.io/jakob-e/pen/doMoML>)

### Author

* Jakob Eriksen

### Source

```scss
@function svg-uri($svg) { safe: 
  $encoded: "";
  $slice: 2000;
  $index: 0;
  $loops: ceil(str-length($svg) / $slice);

  @for $i from 1 through $loops {
    $chunk: str-slice($svg, $index, $index + $slice - 1);
    $chunk: str-replace($chunk, '"', "'");
    $chunk: str-replace($chunk, "<", "%3C");
    $chunk: str-replace($chunk, ">", "%3E");
    $chunk: str-replace($chunk, "&", "%26");
    $chunk: str-replace($chunk, "#", "%23");
    $encoded: #{$encoded}#{$chunk};
    $index: $index + $slice;
  }
  @return url("data:image/svg+xml, #{$encoded}");
}
```

---

## str-replace

### Description

Replace `$search` with `$replace` in `$string`

### Parameters

| Name    | Description          | Type   | Default Value |
| ------- | -------------------- | ------ | ------------- |
| string  | Initial string       | String |               |
| search  | Substring to replace | String |               |
| replace | (&#39;&#39;) - New value     | String |               |

### Returns

`String` — Updated string

### Used By

* [function] `svg-uri`

* [function] `svg-uri`

* [function] `svg-uri`

* [function] `svg-uri`

* [function] `svg-uri`

### Links

[http://sassmeister.com/gist/1b4f2da5527830088e4d](http://sassmeister.com/gist/1b4f2da5527830088e4d>)

### Author

* Hugo Giraudel

### Source

```scss
@function str-replace($string, $search, $replace) { safe: 
  $index: str-index($string, $search);

  @if $index {
    @return str-slice($string, 1, $index - 1) + $replace +
      str-replace(
        str-slice($string, $index + str-length($search)),
        $search,
        $replace
      );
  }

  @return $string;
}
```

---

## ratio-to-percentage

### Description

Calculates the height as a percentage of the width for a given ratio.

### Parameters

| Name  | Description                                                  | Type | Default Value |
| ----- | ------------------------------------------------------------ | ---- | ------------- |
| ratio | Ratio to use to calculate the height, formatted as `x by y`. | List |               |

### Returns

`Number` — A percentage value for the height relative to the width of a responsive container.

### Used By

* [mixin] `responsive-embed`

### Source

```scss
@function ratio-to-percentage($ratio) { safe: 
  $w: nth($ratio, 1);
  $h: nth($ratio, 3);
  @return $h / $w * 100%;
}
```

---

## for-screen-readers

### Description

Visually hides an element, whil leaving it's contents accesible for screen readers.

### Source

```scss
@mixin for-screen-readers() { safe: 
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  word-break: normal;
}
```

---

## href-icon

### Description

adds an icon to identify href destination

### Source

```scss
@mixin href-icon() { safe: 
  content: "";
  background-repeat: no-repeat;
  display: inline-block;
  margin: 0 ($scale / 10);
  width: $scale;
  height: $scale;
  background-size: 100%;
  vertical-align: middle;
}
```

---

## triangle

### Description

Triangle helper mixin

### Parameters

| Name      | Description                                                   | Type      | Default Value |
| --------- | ------------------------------------------------------------- | --------- | ------------- |
| direction | Triangle direction, either `top`, `right`, `bottom` or `left` | Direction |               |
| color     | Triangle color                                                | Color     | currentcolor  |
| size      | Triangle size                                                 | Length    | 1em           |

### Throws

* Direction must be either `top`, `right`, `bottom` or `left`.

### Requires

* [function] `opposite-direction` 

### Source

```scss
@mixin triangle($direction, $color: currentcolor, $size: 1em) { safe: 
  @if not index(top right bottom left, $direction) {
    @error 'Direction must be either `top`, `right`, `bottom` or `left`.';
  }

  width: 0;
  height: 0;
  content: "";
  z-index: 2;
  border-#{opposite-direction($direction)}: $size solid $color;

  $perpendicular-borders: ($size / 2) solid transparent;

  @if $direction == top or $direction == bottom {
    border-left: $perpendicular-borders;
    border-right: $perpendicular-borders;
  } @else if $direction == right or $direction == left {
    border-bottom: $perpendicular-borders;
    border-top: $perpendicular-borders;
  }
}
```

---

## responsive-embed

### Description

Creates a responsive embed container.

### Parameters

| Name  | Description                                                                                                   | Type        | Default Value |
| ----- | ------------------------------------------------------------------------------------------------------------- | ----------- | ------------- |
| ratio | Ratio of the container. Can be a key from the `$responsive-embed-ratios` map or a list formatted as `x by y`. | String,List | default       |

### Requires

* [function] `ratio-to-percentage` 

* [variable] `responsive-embed-ratios` 

### Source

```scss
@mixin responsive-embed($ratio: default) { safe: 
  @if type-of($ratio) == "string" {
    $ratio: map-get($responsive-embed-ratios, $ratio);
  }
  position: relative;
  height: 0;
  padding-bottom: ratio-to-percentage($ratio);
  overflow: hidden;

  iframe,
  object,
  embed,
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
```

---

## // @mixin effect-classes

### Source

```scss
@css // @mixin effect-classes() { safe: }
```

---

## responsive-embed-ratios

### Description

Aspect ratios used to determine padding-bottom of responsive embed containers.

### Type

`Map`

### Used By

* [mixin] `responsive-embed`

### Source

```scss
$responsive-embed-ratios: (
  default: 4 by 3,
  widescreen: 16 by 9
)
```

---
