---
label: components
---
# components

## pagination

### Description

Pagination component

### Parameters

| Name          | Description                                                                    | Type        | Default Value   |
| ------------- | ------------------------------------------------------------------------------ | ----------- | --------------- |
| base-selector | defines the base selector for output.                                          | String      | .c-pagination   |
| page-selector | defines the selector for page items                                            | String      | &amp;__page         |
| prev-selector | defines the selector for &#39;prev&#39; page item                                      | String      | &amp;__page--prev   |
| next-selector | defines the selector for &#39;next page item&#39;                                      | String      | &amp;__page--next   |
| item-padding  | defines the padding around the page items                                      | String,List | 0.75rem 1.25rem |
| mobile-items  | If false, don&#39;t display page number links on mobile, only next/previous links. | Bool        | false           |

### Requires

* [mixin] `media` 

* [function] `grey` 

* [function] `grey` 

* [function] `grey` 

### Author

* Toby

### Source

```scss
@mixin pagination($base-selector: .c-pagination, $page-selector: &__page, $prev-selector: &__page--prev, $next-selector: &__page--next, $item-padding: 0.75rem 1.25rem, $mobile-items: false) { safe: 
  #{$base-selector} {
    text-align: center;

    &__links {
      margin: 0 auto;
      padding: 0;
      display: inline-flex;
      font-size: 0;
      border: 1px solid black;
    }

    // Page links
    #{$page-selector} {
      @include type-meta;
      color: black;
      display: block;
      padding: $item-padding;
      text-decoration: none;

      &[href]:visited {
        color: black;
      }

      &[href]:hover {
        background-color: grey(10);
      }

      @if $mobile-items {
        display: inline-flex;
      } @else {
        display: none;

        &:last-child,
        &:first-child,
        &.current,
        &[aria-current="page"] {
          display: inline-flex;
        }

        @include media(">=medium") {
          display: inline-flex;
        }
      }
    }

    #{$page-selector} + #{$page-selector} {
      border-left: 1px solid black;
    }

    [aria-current="page"] {
      padding: $item-padding;
      @include type-meta;
      background: black;
      color: white;
      cursor: default;
      &:hover {
        background: black;
      }
    }

    [aria-disabled] {
      cursor: not-allowed;
      color: grey(50);

      &:hover {
        background-color: inherit;
        color: grey(50) !important;
      }
    }

    &__ellipsis::after {
      content: "\2026";
      font-weight: normal;
      color: black;
    }

    #{$prev-selector} .u-icon {
      margin-right: 0.5rem;
    }

    #{$next-selector} .u-icon {
      margin-left: 0.5rem;
    }
    #{$prev-selector},
    #{$prev-selector} {
      display: flex;
    }
  }
}
```

---
