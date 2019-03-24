Please prefer the variable over hardcoded value in Sass files.

{{#each palettes }}

## {{@key}}

{{ name }} : {{ hex}}

<!-- {% include "@color" %} -->

{{/each}}
