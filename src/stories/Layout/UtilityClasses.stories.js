export default {};

export const USkipLink = {
  name: "u-skip-link",
  render: (args) => `<a class="u-skip-link" href="#content">Skip to content</a>
  <!-- Then, just before or on main content: -->
  <a name="content" tabindex="-1"></a>
  
  <span class="u-visually-hidden">This text is only shown to screen readers</span>
  
  
  
  
  `,
};

export const VisuallyHidden = {
  name: "u-visually-hidden",
  render: (
    args,
  ) => `The following text is only shown to screen readers: <span class="u-visually-hidden">This text is only shown to screen readers</span>
  `,
};

export const ShowForSmallOnly = {
  name: "u-show-for-small-only",
  render: (args) => `
    <p>bigger than the small breakpoint? 
      <b class="u-show-for-small-only">NO</b>
      <b class="u-hide-for-small-only">YES!</b>
    </p>
    <div class="u-show-for-small-only">
      This text is only shown for screens beneath the 'small' breakpoint.
    </div>
    <div class="u-hide-for-small-only">
      This text is <i>hidden</i> for screens beneath the 'small' breakpoint.
    </div>`,
};

export const ResponsiveEmbed = {
  name: "u-responsive-embed",
  render: (args) => `
  <h4>Aspect ratio embed: (16 x 9 default)</h4>
  <div class="u-responsive-embed">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/9HvG6ZlpLrI" frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  
  <h4>Aspect ratio embed: (overridden inline)</h4>
  <div class="u-responsive-embed" style="padding-bottom:25%">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/9HvG6ZlpLrI" frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>`,
};
