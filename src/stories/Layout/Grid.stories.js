import { render } from "sass";

export default {
  args: {},
  parameters: {
    layout: "fullscreen", // no gutter
  },
};

export const Example = {
  render: (args) => `
  <div class="o-container o-blocks">
  <p>Generic container</p>
  <div class="o-grid o-grid--2cols@s">
    <div class="o-grid__item">
      <div class="c-panel">Grid item o-grid--2cols@s</div>
    </div>
    <div class="o-grid__item">
      <div class="c-panel">Grid item o-grid--2cols@s</div>
    </div>
  </div>
  <div class="o-grid o-grid--2cols o-grid--4cols@s o-grid--6cols@m o-grid--8cols@l">
      <div class="c-panel">Grid item o-grid--4cols@s</div>
      <div class="c-panel">Grid item o-grid--4cols@s</div>
      <div class="c-panel">Grid item o-grid--4cols@s</div>
      <div class="c-panel">Grid item o-grid--4cols@s</div>
      <div class="c-panel">Grid item o-grid--4cols@s</div>
      <div class="c-panel">Grid item o-grid--4cols@s</div>
      <div class="c-panel">Grid item o-grid--4cols@s</div>
      <div class="c-panel">Grid item o-grid--4cols@s</div>
  </div>
  <p>All grids stack on small screen, different breakpoints can be defined for medium sizes</p>
  <div class="o-grid o-grid--6-col o-grid--medium-3-col">
      <div class="c-panel">Grid item</div>
      <div class="c-panel">Grid item</div>
      <div class="c-panel">Grid item</div>
      <div class="c-panel">Grid item</div>
      <div class="c-panel">Grid item</div>
      <div class="c-panel">Grid item</div>
  </div>
</div>
`,
};

export const Page = {
  render: (args) => `
  <main class="o-main o-container">
    <div class="o-grid o-grid--page">
      <article class="o-grid__article o-textstyles">
        <p>A typical post page layout, using an article with 2/3rds width, and an sidebar with 1/3 . this keeps paras to a reasonable wline width</p>
      </article>
      <aside class="o-grid__sidebar">
      <div class="c-panel">Panel</div>
      <div class="c-panel">Panel</div>
      </aside>
    </div>
  </main>`,
};

export const Reverse = {
  render: (args) => `
  <main class="o-main o-container">
    <div class="o-grid o-grid--reverse">
    <aside class="o-grid__filters">
    Aside comes first in source, but is displayed right in the layout
    </aside>
      <article class="o-grid__results o-textstyles">
        <p>A typical post page layout, using an article with 2/3rds width, and an sidebar with 1/3 . this keeps paras to a reasonable wline width</p>
      </article>

    </div>
  </main>`,
};

export const Span = {
  render: (args) => `
  <div class="o-container o-blocks">
   <div class="o-grid o-grid--12cols">
      <div class="c-panel o-grid__span6">Grid item</div>
      <div class="c-panel o-grid__span3">Grid item o-grid--4cols@s</div>
      <div class="c-panel">Grid item o-grid--4cols@s</div>
      <div class="c-panel">Grid item o-grid--4cols@s</div>
      <div class="c-panel">Grid item o-grid--4cols@s</div>
  </div>
  <div class="o-grid o-grid--3cols">
  <div class="c-panel o-grid__span2">Grid item</div>
  <div class="c-panel">Grid item</div>
</div>
</div>
`,
};
