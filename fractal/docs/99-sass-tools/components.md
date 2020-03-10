---
label: components
---
# components

## button-theme

### Description

Set default theme color. Can be a name from the palettes map, an other color value, or false

### Type

`String|Color|Bool`

### Source

```scss
$button-theme: false
```

---

## logo-panel-gradient

### Description

Include SMG-type gradient background.

### Type

`List`

### Source

```scss
$logo-panel-gradient: $c-green $c-blue $c-purple
```

---

## logo-panel-gradient-animated

### Description

Add soft-fade to bg gradient.

### Type

`Bool`

### Source

```scss
$logo-panel-gradient-animated: true
```

---

## logo-panel-color

### Description

Set text color.

### Type

`Color`

### Source

```scss
$logo-panel-color: white
```

---

## menu-width

### Description

Set mobile-collapse point, as media query

### Type

`String`

### Source

```scss
$menu-width: ">=" + (600px + 50px + 130px)
```

---

## pagination-base-selector

### Description

Var defines the base selector for output.

### Type

`String`

### Source

```scss
$pagination-base-selector: ".c-pagination"
```

---

## pagination-page-selector

### Description

defines the selector for page items

### Type

`String`

### Source

```scss
$pagination-page-selector: ".c-pagination__page"
```

---

## pagination-prev-selector

### Description

defines the selector for 'prev' page item

### Type

`String`

### Source

```scss
$pagination-prev-selector: ".prev"
```

---

## pagination-next-selector

### Description

defines the selector for 'next page item'

### Type

`String`

### Source

```scss
$pagination-next-selector: ".next"
```

---

## pagination-item-padding

### Description

defines the padding around the page items

### Type

`String|List`

### Source

```scss
$pagination-item-padding: 0.75rem 1.25rem
```

---

## pagination-mobile-items

### Description

If false, don't display page number links on mobile, only next/previous links.

### Type

`Bool`

### Source

```scss
$pagination-mobile-items: false
```

---
