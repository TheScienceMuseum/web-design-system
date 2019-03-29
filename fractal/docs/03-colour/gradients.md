#grads

Use to create areas of vibrant brand expression.

If you have a great image to work with, there is no need to add a gradient.
However when brand is the key communication, a gradient-only design may be the most appropriate solution.

Css-generated graients can be two or three colours.
Always use colours that are contiguous on the colour wheel.
To add a gradients as a background colour, you can add the utility class, e.g.

```
 <div class="u-grad-red-orange">
```

Or you can add use the scss mixin, e.g.

```
@include sm-gradient($c-green $c-teal $c-blue);
```

2 colour:

<div class="o-grid o-grid--4-col">
{{#each gradients.2col }}
  <div class="o-grid__item">
    <article class="c-card c-card--default">
      <div class="c-card__img {{ @key }}">
      </div>
      <div class="c-card__content">
          <div class="c-card__info">
              <h3 class="c-card__title">
                  {{ col1 }}–{{ col2 }}
              </h3>
          </div>
          <div class="c-card__info">
            <dl class="o-dl">
              <dt>class</dt>
              <dd><code>.{{ @key }}</code></dd>              
            </dl>
          </div>
      </div>
    </article>

  </div>

{{/each}}

</div>

3 colour:

<div class="o-grid o-grid--4-col">
{{#each gradients.3col }}
  <div class="o-grid__item">
    <article class="c-card c-card--default">
      <div class="c-card__img {{ @key }}">
      </div>
      <div class="c-card__content">
          <div class="c-card__info">
              <h3 class="c-card__title">
                  {{ col1 }}–{{ col2 }}–{{ col3 }}
              </h3>
          </div>
          <div class="c-card__info">
            <dl class="o-dl">
              <dt>class</dt>
              <dd><code>.{{ @key }}</code></dd>              
            </dl>
          </div>
      </div>
    </article>

  </div>

{{/each}}

</div>
