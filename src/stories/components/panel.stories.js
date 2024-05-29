export default {};

export const Default = {
  render: (args) => `
<div class="c-panel ">
  <h2>A panel</h2><p>Generally used in the sidebar</p><p>Various html elements might go in here</p>
</div>

<div class="c-panel c-panel--lighter">
  a subsequent lighter panel
</div>

<div class="c-panel c-panel--lighter">
  a subsequent lighter panel
</div>

<div class="c-panel c-panel--light">
  A panel with a light background. This might be used in main page to highlight an area of content.
</div>`,
};
