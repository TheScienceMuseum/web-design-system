#Science Museum Group Design System

> N.B W.I.P - not ready for use yet!

## How to use

`npm install` me.

...

### Deploy /dist to gh-pages

```
npm run deploy
```

## Principles

Everything should be modular, so all modules are optional.

Modules should be consumable by scss for customisation, or a dist css

Minimal base styles

Should we namespace everything?

All components should output nothing by default, and have a mixin named the same as the component, which should be called to output the css, overriding default vars if necessary.

Or, ignore all that, and bundle the lot as one, to KISS, and consider modularisation once the combined size gets beyond say 100Kb

### References:

- https://blog.ubuntu.com/2015/08/05/vanilla-creating-a-modular-sass-library
- https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/
