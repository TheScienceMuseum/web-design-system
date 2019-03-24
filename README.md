#Science Museum Group style guide

## Principles

Everything should be modular, so all modules are optional.

Modules should be consumable by scss for customisation, or a dist css

Minimal base styles

Should we namespace everything?

All components should output nothing by default, and have a mixin named the same as the component, which should be called to output the css, overriding default vars if necessary.

### References:

- https://blog.ubuntu.com/2015/08/05/vanilla-creating-a-modular-sass-library
