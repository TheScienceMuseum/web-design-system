> Given that all sites include all the museum logos, what with header and footer, it probably makes sense to sprite this.

> We should also pull all favicon sets from here too? as component example?

{{> fullwidth }}

<div class="Examplegrid">
{{#each logos }}
  <div class="Examplegrid__item " style="flex-basis: {{width}}px">
    <svg style="max-width: calc(100% - 2rem); height: auto; margin: 1rem"  width="{{ this.width }}" height="236">
      <use xlink:href="/assets/logos/sprite.symbol.svg#{{ @key }}" />
    </svg>
  </div>
{{/each}}
</div>

{{> endfullwidth }}

You can also pass a fill colour to override the default (black)

Logos have different aspect ratios to keep the same relative letter height.
By aligning the viewBox, we can also top align the logos (as in the footer logo-panel)

{{> fullwidth }}

<div class="u-grad-blue-purple Examplegrid Examplegrid--reversed">
{{#each logos }}
  <div class="Examplegrid__item " style="flex-basis: {{width}}px">
    <svg style="max-width: calc(100% - 2rem); height: auto; margin: 1rem" viewBox="0 0 {{ width }} {{ height }}" width="{{ width }}" height="236" preserveAspectRatio="xMinYMin meet"><use xlink:href="/assets/logos/sprite.symbol.svg#{{ @key }}" fill="#fff"></use></svg>
  </div>
{{/each}}
</div>
