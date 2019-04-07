# SMG CORE PALETTE

The foundation of our group identity is the careful use of black and white to create a strong, classic appearance.

## SMG COLOUR WHEEL

Supported by a vibrant secondary set of colours:

Note that if used as a background, colours have different text colour, to ensure sufficient contrast to meet a11y standards.
you can use the `contrasting-text-color` scss function to return either white or black for any colour.

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
              <dt>Lighter</dt>
              <dd class="u-bg-{{ @key }}-light">For e.g. hover variation</dd>
              <dt>Darker</dt>
              <dd class="u-bg-{{ @key }}-dark">For e.g. hover variation</dd>
            </dl>
          </div>
      </div>
    </article>

  </div>

{{/each}}

</div>
