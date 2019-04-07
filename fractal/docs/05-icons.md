Icons can be included as one big sprite or individually from CDN.

> would be useful if they were served from a CDN that responded to fill colour query?

> [todo: list all the compiled icons via the svg-sprite package?]

All icons are based on a stroke width that matches the SMG Sans font.

Based on a 24px em-square, & therefore 24px base square icon, The stroke widths are:
Bold: 3.33
Regular: 2.25
Light: 1.6

{{> fullwidth }}

<div class="Examplegrid Examplegrid--wrap">
{{#each icons }}
  <div class="Examplegrid__item " style="flex-basis: {{width}}px">
    <svg style=""  width="24" height="24">
      <use xlink:href="/assets/img/sprite/symbol/sprite.symbol.svg#{{ @key }}" />
    </svg>
  </div>
{{/each}}
</div>

<div class="Examplegrid Examplegrid--wrap Examplegrid--reversed" style="background: black;">
{{#each icons }}
  <div class="Examplegrid__item " style="flex-basis: {{width}}px">
    <svg style=""  width="24" height="24">
      <use xlink:href="/assets/img/sprite/symbol/sprite.symbol.svg#{{ @key }}" />
    </svg>
  </div>
{{/each}}
</div>
