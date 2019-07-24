All the museum logos are included in the source of this system - you can also use them via the CDN path of [...]

As all the museum logos are included in the standard footer, you may find it more efficient to use the 'sprite' svg version, that contains all of the museum logos, and can be reused in both black and white versions.

> We should also pull all favicon sets from here too? as component example?

{{> fullwidth }}

<div class="Examplegrid Examplegrid--flex">
{{#each logos }}
  <div class="Examplegrid__item " style="flex-basis: {{width}}px">
    <svg style="max-width: calc(100% - 2rem); height: auto; margin: 1rem"  width="{{ this.width }}" height="236">
      <use xlink:href="{{path '/assets/logos/sprite.symbol.svg'}}#{{ @key }}" />
    </svg>
  </div>
{{/each}}
</div>

{{> endfullwidth }}

&nbsp;

You can also pass a fill colour to override the default (black)

Logos have different aspect ratios to keep the same relative letter height.
By aligning the viewBox, we can also top align the logos (as in the footer logo-panel)

{{> fullwidth }}

<div class="u-grad-blue-purple Examplegrid Examplegrid--flex Examplegrid--reversed">
{{#each logos }}
  <div class="Examplegrid__item " style="flex-basis: {{width}}px">
    <svg style="max-width: calc(100% - 2rem); height: auto; margin: 1rem" viewBox="0 0 {{ width }} {{ height }}" width="{{ width }}" height="236" preserveAspectRatio="xMinYMin meet"><use xlink:href="{{path '/assets/logos/sprite.symbol.svg'}}#{{ @key }}" fill="#fff"></use></svg>
  </div>
{{/each}}
</div>
