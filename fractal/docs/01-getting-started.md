---
title: How to use this
---

## To import source Scss and js into another project:

If your project already makes use of node modules, and you are building your own assetbundles for production, you'll probaly want to do this:

```
npm install smg-web-design-system
```

### Javascript

Then you can add the necessary javascript like so:

```
import * as smgwds from "smg-web-design-system";

// then use the namespaced modules, e.g.
document.addEventListener("DOMContentLoaded", function(event) {
  smgwds.illuminate();
});
```

> TODO: All JS is currently all bundled together, so you can't include just the modules you need. This isn't an issue right now, as the only two components that require js are tiny. But should be addressed before more javascript-heavy components are added.

### Scss

### using node-sass CLI:

Add `--include-path node_modules` to your compilation options.

> TODO: check same for dart-sass. Provide instructions for webpack / gulp?

```
@import "smg-web-design-system";
// to import everything, or

@import "smg-web-design-system/src/scss/lib";
//for just the functions, and then add just the bits you want, e.g.
@import "smg-web-design-system/src/scss/components/loading";
```

> TODO: Clarify which modules are optional.
> TODO: check complete bundle size:
> TODO: Explain which components need calling via their settings mixin

## To use the pre-compiled css/js

This will mean you can't customise e.g. theme colours, but it might be adequate in some circumstances, or for simpler uses

```
<link rel="stylesheet" src="https://unpkg.com/smg-web-design-system@0.1.0/dist/css/main.css">
<script src="https://unpkg.com/smg-web-design-system@0.1.0/dist/js/index.js></script>
```

## Polyfills

some browser features are used that aren't supportred in all our target browsers, so should be polyfilled. These are:

- **[object-fit-images](https://github.com/fregante/object-fit-images)** Polyfill object-fit/object-position on `<img>`: IE9, IE10, IE11, Edge, Safari,
- **[svg4everybody](https://github.com/jonathantneal/svg4everybody)** SVG for Everybody adds SVG External Content support to all browsers.
