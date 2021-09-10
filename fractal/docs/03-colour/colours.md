# SMG CORE PALETTE

The foundation of our group identity is the careful use of black and white to create a strong, classic appearance.

## SMG COLOUR WHEEL

Supported by a vibrant secondary set of colours:

Note that if used as a background, colours have different text colour, to ensure sufficient contrast to meet a11y standards.
you can use the `choose-contrast-color` scss function to return either white or black for any colour.

{{> fullwidth }}

<div class="o-grid o-grid--4-col">
{{#each palettes }}
  <div class="o-grid__item">
    <article class="c-card c-card--default">
    <div class="c-card__img u-bg-{{ @key }}">
    </div>
      <div class="c-card__content">
          <div class="c-card__info">
              <h3 class="c-card__title">
                  SMG-{{ @key }}
              </h3>
          </div>
          <div class="c-card__info">
            <dl class="o-dl">
              <dt>Scss</dt>
              <dd>{{ name }}</dd>
              <dt>Hex</dt>
              <dd>{{ hex }}</dd>
           </dl>
          </div>
      </div>
    </article>

  </div>

{{/each}}

</div>

<div class="o-grid o-grid--4-col">
{{#each palettes }}
  <div class="o-grid__item">
    <article class="c-card c-card--default">
      <div class="c-card__content">
          <div class="c-card__info">
              <h3 class="c-card__title">
                  SMG-{{ @key }}
              </h3>
          </div>
          <div class="c-card__info">
            <dl class="o-dl">
             <dt>Contrasting text colour</dt>
              <dd class="u-bg-{{ @key }}">{{ text }}</dd>
             <dt>Contrast</dt>
              <dd>{{ colorable.contrast }}</dd>
            <dt>accessibility</dt>
              <dd>
              {{#each colorable.accessibility}}
                {{@key}}: {{#if this}}PASS{{else}}FAIL{{/if}}<br/>
              {{/each}}
              </dd>
              <dt>Lighter For e.g. hover variation</dt>
              <dd class="u-bg-{{ @key }}-light">&nbsp;</dd>
              <dt>Darker For e.g. hover variation</dt>
              <dd class="u-bg-{{ @key }}-dark">&nbsp;</dd>
            </dl>
          </div>
      </div>
    </article>

  </div>

{{/each}}

</div>
