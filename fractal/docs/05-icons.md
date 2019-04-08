Icons can be included as one big sprite or individually from CDN.

> we should clarify / make consistent different arrows and triangles for direction V. disclosure.

All icons are based on a stroke width that matches the SMG Sans font.

Based on a 24px em-square, & therefore 24px base square icon, The original stroke widths are:

- Bold: 3.33
- Regular: 2.25
- Light: 1.6

However, all icons are exported outlined to a single path without stroke, and without a specified fill colour, so the default fil (black) can be overriden with css <code>fill: #f00</code> or generally, even simpler, it will inherit: <code>fill: currentColor;</code>.

> TODO: symbol aliases for e.g. youtube -> video. Both collections and wordpress require icons named after differnt data IDs

### Usage

There is a sprite version that compiles all the icons into one svg that can be used via 'svg use symbol' - _but_ if you don't have need for all the icons, it might be just as easy to include inline the ones you want, or use svg-sprite to re-sprite the ones you need along with other assets. They're all pretty tiny files, so shouldn't massively bloat html that way.

### Matching text size:

Wrap in <pre>.u-icon</pre> to size at 1em, therefore same as current text context

here is an icon <span class="u-icon"><svg><use xlink:href="/assets/icons/sprite.symbol.svg#people" /></svg></span>inline

## here is an icon <span class="u-icon"><svg><use xlink:href="/assets/icons/sprite.symbol.svg#3d" /></svg></span>inline

> It should line up with the baseline, but I still think there's something weird with the font metrics that also causes the misalignment in Windows browsers

{{> fullwidth }}

<div class="Examplegrid Examplegrid--wrap">
{{#each icons }}
  <div class="Examplegrid__item">
    <svg style="margin: 1rem"  width="24" height="24">
      <use xlink:href="/assets/icons/sprite.symbol.svg#{{ @key }}" />
    </svg>
    <div><code>{{@key}}</code></div>
  </div>
{{/each}}
</div>

<div class="Examplegrid Examplegrid--wrap Examplegrid--reversed" style="background: black;">
{{#each icons }}
  <div class="Examplegrid__item ">
    <svg style="margin: 1rem" width="24" height="24">
      <use xlink:href="/assets/icons/sprite.symbol.svg#{{ @key }}" />
    </svg>
    <div><code>{{@key}}</code></div>
  </div>
{{/each}}
</div>
