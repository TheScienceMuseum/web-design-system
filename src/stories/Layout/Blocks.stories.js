export default {
  render: (args) => `
  <div class="o-blocks ${args.size}">

    <div class="c-panel"><code>o-blocks</code> - provides consistent spacing between stacked elements.</div>

    <div class="c-panel">Block contents. The outermost <code>o-blocks</code> could need  <code>o-blocks --gutter</code>.</div>

    <input type="hidden" />

    <div class="c-panel">there is a hidden input above this block that will not be included</div>

    <div hidden >a hidden div</div>

    <div class="c-panel">there is a hidden DIV above this block that will not be included</div>
    
    <div class="c-panel">block contents</div>


    <div class="c-panel --notabove">block contents --notabove</div>

    <div class="c-panel">Any direct child will be considered a block without reqiuiring any class BUT note that blocks are spaced using top-margin, so if your chold component wants to control that, you can use a wrapper element of .o-block</div>

    <div class="c-panel --notbelow">block contents --notbelow</div>

    <div class="c-panel">block contents</div>

    <div class="o-blocks">

      <div class="c-panel">Nested block contents. (so this won't need a gutter)</div>

      <div class="c-panel">Nested block contents. All direct children of o-blocks will have a gutter applied automatically.</div>

      <div class="c-panel">nested block contents</div>

      <div class="c-panel o-block --not">nested block contents - but this child has a class of <code>o-block --not</code> so it has no space.</div>

      <div class="c-panel">nested block contents</div>

    </div>
  </div>
`,
};

export const Default = {};

export const Rem = {
  args: {
    size: "--rem",
  },
};
