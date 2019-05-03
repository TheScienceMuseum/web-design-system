---
title: How to use this
---

## To import source Scss and js into another project:

> direct from github while in dev:

```
TheScienceMuseum/design-system#master
```

> but once its published to npm:

```
npm install smg-design-system
```

then import the relevant modules into js and scss

> [is there a required base/core, and modularised?]

## To use the compiled css/js

> this will mean you can't customise e.g. theme colours, but it might be adequate in some circumstances, or for simpler uses

Add a link to the compiled version via unpkg.io (or SMG cdn?)

### using node-sass CLI:

Add `--include-path node_modules`

```
@import "smg-design-system/src/scss/main.scss";
```
