#Science Museum Group: Web Design System

> N.B This is W.I.P - not ready for public use yet!

Visit https://thesciencemuseum.github.io/web-design-system/ to browse the contents of this repository,and for further usage instructions.

[![npm version](https://badge.fury.io/js/smg-web-design-system.svg)](https://badge.fury.io/js/smg-web-design-system)

## Contributing to the system

If you want to contribute to this, you will need to:

- Clone this repository
- `npm install` to get dependencies
- `npm start` to start a development server and watch for your changes on http://localhost:6009
- `npm run build` to make a production-ready copy (you'll need to serve that yourself)
- `npm run deploy` to update the `gh-pages` branch the public documentation is on.

## Contribution guideline

TBC - https://github.com/TheScienceMuseum/collectionsonline/wiki/Collaborator-contributions is a good starting place?

## Structure

```
├── dist            // built version of storybook, and select files for npm
├── public          // static directory for serving storybook - all generated
├── src             
│   ├── assets      // gets included in pkg
│   ├── js          // gets included in pkg
│   ├── scss        // gets included in pkg
│   └── stories     // storybook stories   
├── storybook       // storybook config
└── package.json
```

## Principles

Everything should be modular, all modules are optional.

Modules should be consumable by scss for customisation, or a dist css

Minimal base styles

Should we namespace everything?

All components should output nothing by default, and have a mixin named the same as the component, which should be called to output the css, overriding default vars if necessary.

Or, ignore all that, and bundle the lot as one, to KISS, and consider modularisation once the combined size gets beyond say 100Kb

### References:

- https://blog.ubuntu.com/2015/08/05/vanilla-creating-a-modular-sass-library
- https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/
