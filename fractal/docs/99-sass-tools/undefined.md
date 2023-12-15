---
label: include-media
---
# include-media

## breakpoints

### Description

Creates a list of global breakpoints

### Example

Creates a single breakpoint with the label `phone`

```scss
$breakpoints: ('phone': 320px);
```

### Used By

* [function] `im-intercepts-static-breakpoint`

* [function] `get-expression-value`

* [function] `get-expression-value`

* [mixin] `media-context`

* [mixin] `media-context`

* [mixin] `media-context`

* [mixin] `media-context`

### Author

* Eduardo Boucas

### Source

```scss
$breakpoints: (
  'phone': 320px,
  'tablet': 768px,
  'desktop': 1024px
)
```

---

## media-expressions

### Description

Creates a list of static expressions or media types

### Example

Creates a single media type (screen)

```scss
$media-expressions: ('screen': 'screen');
```

Creates a static expression with logical disjunction (OR operator)

```scss
$media-expressions: (
  'retina2x': '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'
);
```

### Used By

* [function] `im-intercepts-static-breakpoint`

* [function] `parse-expression`

* [function] `parse-expression`

* [function] `parse-expression`

* [mixin] `media-context`

* [mixin] `media-context`

* [mixin] `media-context`

* [mixin] `media-context`

### Author

* Eduardo Boucas

### Source

```scss
$media-expressions: (
  'screen': 'screen',
  'print': 'print',
  'handheld': 'handheld',
  'landscape': '(orientation: landscape)',
  'portrait': '(orientation: portrait)',
  'retina2x': '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)',
  'retina3x': '(-webkit-min-device-pixel-ratio: 3), (min-resolution: 350dpi), (min-resolution: 3dppx)'
)
```

---

## unit-intervals

### Description

Defines a number to be added or subtracted from each unit when declaring breakpoints with exclusive intervals

### Example

Interval for pixels is defined as `1` by default

```scss
@include media('>128px') {}

/* Generates: */
@media (min-width: 129px) {}
```

Interval for ems is defined as `0.01` by default

```scss
@include media('>20em') {}

/* Generates: */
@media (min-width: 20.01em) {}
```

Interval for rems is defined as `0.1` by default, to be used with `font-size: 62.5%;`

```scss
@include media('>2.0rem') {}

/* Generates: */
@media (min-width: 2.1rem) {}
```

### Used By

* [function] `get-expression-value`

### Author

* Eduardo Boucas

### Source

```scss
$unit-intervals: (
  'px': 1,
  'em': 0.01,
  'rem': 0.1,
  '': 0
)
```

---

## im-media-support

### Description

Defines whether support for media queries is available, useful for creating separate stylesheets
for browsers that don't support media queries.

### Example

Disables support for media queries

```scss
$im-media-support: false;
@include media('>=tablet') {
  .foo {
    color: tomato;
  }
}

/* Generates: */
.foo {
  color: tomato;
}
```

### Used By

* [mixin] `media`

* [mixin] `media`

* [mixin] `media`

### Author

* Eduardo Boucas

### Source

```scss
$im-media-support: true
```

---

## im-no-media-breakpoint

### Description

Selects which breakpoint to emulate when support for media queries is disabled. Media queries that start at or
intercept the breakpoint will be displayed, any others will be ignored.

### Example

This media query will show because it intercepts the static breakpoint

```scss
$im-media-support: false;
$im-no-media-breakpoint: 'desktop';
@include media('>=tablet') {
  .foo {
    color: tomato;
  }
}

/* Generates: */
.foo {
  color: tomato;
}
```

This media query will NOT show because it does not intercept the desktop breakpoint

```scss
$im-media-support: false;
$im-no-media-breakpoint: 'tablet';
@include media('>=desktop') {
  .foo {
    color: tomato;
  }
}

/* No output */
```

### Used By

* [function] `im-intercepts-static-breakpoint`

* [function] `im-intercepts-static-breakpoint`

### Author

* Eduardo Boucas

### Source

```scss
$im-no-media-breakpoint: 'desktop'
```

---

## im-no-media-expressions

### Description

Selects which media expressions are allowed in an expression for it to be used when media queries
are not supported.

### Example

This media query will show because it intercepts the static breakpoint and contains only accepted media expressions

```scss
$im-media-support: false;
$im-no-media-breakpoint: 'desktop';
$im-no-media-expressions: ('screen');
@include media('>=tablet', 'screen') {
  .foo {
    color: tomato;
  }
}

 /* Generates: */
 .foo {
   color: tomato;
 }
```

This media query will NOT show because it intercepts the static breakpoint but contains a media expression that is not accepted

```scss
$im-media-support: false;
$im-no-media-breakpoint: 'desktop';
$im-no-media-expressions: ('screen');
@include media('>=tablet', 'retina2x') {
  .foo {
    color: tomato;
  }
}

/* No output */
```

### Used By

* [function] `im-intercepts-static-breakpoint`

### Author

* Eduardo Boucas

### Source

```scss
$im-no-media-expressions: ('screen', 'portrait', 'landscape')
```

---

## im-log

### Description

Log a message either with `@error` if supported
else with `@warn`, using `feature-exists('at-error')`
to detect support.

### Parameters

| Name    | Description    | Type   | Default Value |
| ------- | -------------- | ------ | ------------- |
| message | Message to log | String |               |

### Requires

* [function] `noop` 

### Used By

* [mixin] `log`

* [function] `im-intercepts-static-breakpoint`

* [function] `get-expression-operator`

* [function] `get-expression-operator`

* [function] `get-expression-operator`

* [function] `get-expression-value`

* [function] `get-expression-value`

* [function] `get-expression-value`

* [function] `to-number`

* [function] `to-length`

### Author

* Eduardo Boucas

### Source

```scss
@function im-log($message) { safe: 
  @if feature-exists('at-error') {
    @error $message;
  } @else {
    @warn $message;
    $_: noop();
  }

  @return $message;
}
```

---

## noop

### Description

Function with no `@return` called next to `@warn` in Sass 3.3
to trigger a compiling error and stop the process.

### Used By

* [function] `im-log`

### Author

* Eduardo Boucas

### Source

```scss
@function noop() { safe: }
```

---

## im-intercepts-static-breakpoint

### Description

Determines whether a list of conditions is intercepted by the static breakpoint.

### Parameters

| Name       | Description            | Type    | Default Value |
| ---------- | ---------------------- | ------- | ------------- |
| conditions | Media query conditions | Arglist |               |

### Returns

`Boolean` — Returns true if the conditions are intercepted by the static breakpoint

### Requires

* [function] `im-log` 

* [function] `get-expression-operator` 

* [function] `get-expression-prefix` 

* [function] `get-expression-value` 

* [variable] `breakpoints` 

* [variable] `im-no-media-breakpoint` 

* [variable] `im-no-media-breakpoint` 

* [variable] `media-expressions` 

* [variable] `im-no-media-expressions` 

### Used By

* [mixin] `media`

### Author

* Eduardo Boucas

### Source

```scss
@function im-intercepts-static-breakpoint($conditions...) { safe: 
  $no-media-breakpoint-value: map-get($breakpoints, $im-no-media-breakpoint);

  @if not $no-media-breakpoint-value {
    @if im-log('`#{$im-no-media-breakpoint}` is not a valid breakpoint.') {}
  }

  @each $condition in $conditions {
    @if not map-has-key($media-expressions, $condition) {
      $operator: get-expression-operator($condition);
      $prefix: get-expression-prefix($operator);
      $value: get-expression-value($condition, $operator);

      @if ($prefix == 'max' and $value <= $no-media-breakpoint-value) or
          ($prefix == 'min' and $value > $no-media-breakpoint-value) {
        @return false;
      }
    } @else if not index($im-no-media-expressions, $condition) {
      @return false;
    }
  }

  @return true;
}
```

---

## get-expression-operator

### Description

Get operator of an expression

### Parameters

| Name       | Description                         | Type   | Default Value |
| ---------- | ----------------------------------- | ------ | ------------- |
| expression | Expression to extract operator from | String |               |

### Returns

`String` — Any of `>=`, `>`, `<=`, `<`, `≥`, `≤`

### Requires

* [function] `im-log` 

* [function] `im-log` 

* [function] `im-log` 

### Used By

* [function] `im-intercepts-static-breakpoint`

* [function] `parse-expression`

### Author

* Eduardo Boucas

### Source

```scss
@function get-expression-operator($expression) { safe: 
  @each $operator in ('>=', '>', '<=', '<', '≥', '≤') {
    @if str-index($expression, $operator) {
      @return $operator;
    }
  }

  // It is not possible to include a mixin inside a function, so we have to
  // rely on the `im-log(..)` function rather than the `log(..)` mixin. Because
  // functions cannot be called anywhere in Sass, we need to hack the call in
  // a dummy variable, such as `$_`. If anybody ever raise a scoping issue with
  // Sass 3.3, change this line in `@if im-log(..) {}` instead.
  $_: im-log('No operator found in `#{$expression}`.');
}
```

---

## get-expression-dimension

### Description

Get dimension of an expression, based on a found operator

### Parameters

| Name       | Description                          | Type   | Default Value |
| ---------- | ------------------------------------ | ------ | ------------- |
| expression | Expression to extract dimension from | String |               |
| operator   | Operator from `$expression`          | String |               |

### Returns

`String` — `width` or `height` (or potentially anything else)

### Used By

* [function] `parse-expression`

### Author

* Eduardo Boucas

### Source

```scss
@function get-expression-dimension($expression, $operator) { safe: 
  $operator-index: str-index($expression, $operator);
  $parsed-dimension: str-slice($expression, 0, $operator-index - 1);
  $dimension: 'width';

  @if str-length($parsed-dimension) > 0 {
    $dimension: $parsed-dimension;
  }

  @return $dimension;
}
```

---

## get-expression-prefix

### Description

Get dimension prefix based on an operator

### Parameters

| Name     | Description | Type   | Default Value |
| -------- | ----------- | ------ | ------------- |
| operator | Operator    | String |               |

### Returns

`String` — `min` or `max`

### Used By

* [function] `im-intercepts-static-breakpoint`

* [function] `parse-expression`

### Author

* Eduardo Boucas

### Source

```scss
@function get-expression-prefix($operator) { safe: 
  @return if(index(('<', '<=', '≤'), $operator), 'max', 'min');
}
```

---

## get-expression-value

### Description

Get value of an expression, based on a found operator

### Parameters

| Name       | Description                      | Type   | Default Value |
| ---------- | -------------------------------- | ------ | ------------- |
| expression | Expression to extract value from | String |               |
| operator   | Operator from `$expression`      | String |               |

### Returns

`Number` — A numeric value

### Requires

* [function] `to-number` 

* [function] `im-log` 

* [function] `im-log` 

* [function] `im-log` 

* [variable] `breakpoints` 

* [variable] `breakpoints` 

* [variable] `unit-intervals` 

### Used By

* [function] `im-intercepts-static-breakpoint`

* [function] `parse-expression`

### Author

* Eduardo Boucas

### Source

```scss
@function get-expression-value($expression, $operator) { safe: 
  $operator-index: str-index($expression, $operator);
  $value: str-slice($expression, $operator-index + str-length($operator));

  @if map-has-key($breakpoints, $value) {
    $value: map-get($breakpoints, $value);
  } @else {
    $value: to-number($value);
  }

  $interval: map-get($unit-intervals, unit($value));

  @if not $interval {
    // It is not possible to include a mixin inside a function, so we have to
    // rely on the `im-log(..)` function rather than the `log(..)` mixin. Because
    // functions cannot be called anywhere in Sass, we need to hack the call in
    // a dummy variable, such as `$_`. If anybody ever raise a scoping issue with
    // Sass 3.3, change this line in `@if im-log(..) {}` instead.
    $_: im-log('Unknown unit `#{unit($value)}`.');
  }

  @if $operator == '>' {
    $value: $value + $interval;
  } @else if $operator == '<' {
    $value: $value - $interval;
  }

  @return $value;
}
```

---

## parse-expression

### Description

Parse an expression to return a valid media-query expression

### Parameters

| Name       | Description         | Type   | Default Value |
| ---------- | ------------------- | ------ | ------------- |
| expression | Expression to parse | String |               |

### Returns

`String` — Valid media query

### Requires

* [function] `get-expression-operator` 

* [function] `get-expression-dimension` 

* [function] `get-expression-prefix` 

* [function] `get-expression-value` 

* [variable] `media-expressions` 

* [variable] `media-expressions` 

* [variable] `media-expressions` 

### Used By

* [mixin] `media`

### Author

* Eduardo Boucas

### Source

```scss
@function parse-expression($expression) { safe: 
  // If it is part of $media-expressions, it has no operator
  // then there is no need to go any further, just return the value
  @if map-has-key($media-expressions, $expression) {
    @return map-get($media-expressions, $expression);
  }

  $operator: get-expression-operator($expression);
  $dimension: get-expression-dimension($expression, $operator);
  $prefix: get-expression-prefix($operator);
  $value: get-expression-value($expression, $operator);

  @return '(#{$prefix}-#{$dimension}: #{$value})';
}
```

---

## to-number

### Description

Casts a string into a number

### Parameters

| Name  | Description        | Type            | Default Value |
| ----- | ------------------ | --------------- | ------------- |
| value | Value to be parsed | String , Number |               |

### Returns

`Number`

### Requires

* [function] `im-log` 

* [function] `to-length` 

### Used By

* [function] `get-expression-value`

### Author

* Eduardo Boucas

### Source

```scss
@function to-number($value) { safe: 
  @if type-of($value) == 'number' {
    @return $value;
  } @else if type-of($value) != 'string' {
    $_: im-log('Value for `to-number` should be a number or a string.');
  }

  $first-character: str-slice($value, 1, 1);
  $result: 0;
  $digits: 0;
  $minus: ($first-character == '-');
  $numbers: ('0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9);

  // Remove +/- sign if present at first character
  @if ($first-character == '+' or $first-character == '-') {
    $value: str-slice($value, 2);
  }

  @for $i from 1 through str-length($value) {
    $character: str-slice($value, $i, $i);

    @if not (index(map-keys($numbers), $character) or $character == '.') {
      @return to-length(if($minus, -$result, $result), str-slice($value, $i))
    }

    @if $character == '.' {
      $digits: 1;
    } @else if $digits == 0 {
      $result: $result * 10 + map-get($numbers, $character);
    } @else {
      $digits: $digits * 10;
      $result: $result + map-get($numbers, $character) / $digits;
    }
  }

  @return if($minus, -$result, $result);
}
```

---

## to-length

### Description

Add `$unit` to `$value`

### Parameters

| Name  | Description                       | Type   | Default Value |
| ----- | --------------------------------- | ------ | ------------- |
| value | Value to add unit to              | Number |               |
| unit  | String representation of the unit | String |               |

### Returns

`Number` — `$value` expressed in `$unit`

### Requires

* [function] `im-log` 

### Used By

* [function] `to-number`

### Author

* Eduardo Boucas

### Source

```scss
@function to-length($value, $unit) { safe: 
  $units: ('px': 1px, 'cm': 1cm, 'mm': 1mm, '%': 1%, 'ch': 1ch, 'pc': 1pc, 'in': 1in, 'em': 1em, 'rem': 1rem, 'pt': 1pt, 'ex': 1ex, 'vw': 1vw, 'vh': 1vh, 'vmin': 1vmin, 'vmax': 1vmax);

  @if not index(map-keys($units), $unit) {
    $_: im-log('Invalid unit `#{$unit}`.');
  }

  @return $value * map-get($units, $unit);
}
```

---

## log

### Description

Wrapper mixin for the log function so it can be used with a more friendly
API than `@if im-log('..') {}` or `$_: im-log('..')`. Basically, use the function
within functions because it is not possible to include a mixin in a function
and use the mixin everywhere else because it's much more elegant.

### Parameters

| Name    | Description    | Type   | Default Value |
| ------- | -------------- | ------ | ------------- |
| message | Message to log | String |               |

### Requires

* [function] `im-log` 

### Author

* Eduardo Boucas

### Source

```scss
@mixin log($message) { safe: 
  @if im-log($message) {}
}
```

---

## media-context

### Description

This mixin aims at redefining the configuration just for the scope of
the call. It is helpful when having a component needing an extended
configuration such as custom breakpoints (referred to as tweakpoints)
for instance.

### Parameters

| Name                    | Description                                                            | Type | Default Value |
| ----------------------- | ---------------------------------------------------------------------- | ---- | ------------- |
| tweakpoints             | Map of tweakpoints to be merged with `$breakpoints`                    | Map  | ()            |
| tweak-media-expressions | Map of tweaked media expressions to be merged with `$media-expression` | Map  | ()            |

### Content

This mixin allows extra content to be passed (through the `@content` directive).

### Example

Extend the global breakpoints with a tweakpoint

```scss
@include media-context(('custom': 678px)) {
  .foo {
    @include media('>phone', '<=custom') {
     // ...
    }
  }
}
```

Extend the global media expressions with a custom one

```scss
@include media-context($tweak-media-expressions: ('all': 'all')) {
  .foo {
    @include media('all', '>phone') {
     // ...
    }
  }
}
```

Extend both configuration maps

```scss
@include media-context(('custom': 678px), ('all': 'all')) {
  .foo {
    @include media('all', '>phone', '<=custom') {
     // ...
    }
  }
}
```

### Requires

* [variable] `breakpoints` 

* [variable] `media-expressions` 

* [variable] `breakpoints` 

* [variable] `breakpoints` 

* [variable] `media-expressions` 

* [variable] `media-expressions` 

* [variable] `breakpoints` 

* [variable] `media-expressions` 

### Author

* Kitty Giraudel

### Source

```scss
@mixin media-context($tweakpoints: (), $tweak-media-expressions: ()) { safe: 
  // Save global configuration
  $global-breakpoints: $breakpoints;
  $global-media-expressions: $media-expressions;

  // Update global configuration
  $breakpoints: map-merge($breakpoints, $tweakpoints) !global;
  $media-expressions: map-merge($media-expressions, $tweak-media-expressions) !global;

  @content;

  // Restore global configuration
  $breakpoints: $global-breakpoints !global;
  $media-expressions: $global-media-expressions !global;
}
```

---

## media

### Description

Generates a media query based on a list of conditions

### Parameters

| Name       | Description            | Type    | Default Value |
| ---------- | ---------------------- | ------- | ------------- |
| conditions | Media query conditions | Arglist |               |

### Content

This mixin allows extra content to be passed (through the `@content` directive).

### Example

With a single set breakpoint

```scss
@include media('>phone') { }
```

With two set breakpoints

```scss
@include media('>phone', '<=tablet') { }
```

With custom values

```scss
@include media('>=358px', '<850px') { }
```

With set breakpoints with custom values

```scss
@include media('>desktop', '<=1350px') { }
```

With a static expression

```scss
@include media('retina2x') { }
```

Mixing everything

```scss
@include media('>=350px', '<tablet', 'retina3x') { }
```

### Requires

* [function] `im-intercepts-static-breakpoint` 

* [function] `parse-expression` 

* [variable] `im-media-support` 

* [variable] `im-media-support` 

* [variable] `im-media-support` 

### Author

* Eduardo Boucas

### Source

```scss
@mixin media($conditions...) { safe: 
  @if ($im-media-support and length($conditions) == 0) or
      (not $im-media-support and im-intercepts-static-breakpoint($conditions...)) {
    @content;
  } @else if ($im-media-support and length($conditions) > 0) {
    @media #{unquote(parse-expression(nth($conditions, 1)))} {
      // Recursive call
      @include media(slice($conditions, 2)...) {
        @content;
      }
    }
  }
}
```

---
