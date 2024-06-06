import template from "./card.hbs";

export default {
  render: (args) => template(args),
  // tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  decorators: [
    (story, context) =>
      `
    <div class="o-main o-container">
      <div class="o-grid o-grid--${context.args.griditem}">
        <div class="o-grid__item">
        ${story()}
        </div>
      </div>
  </div>`,
  ],
  args: {
    griditem: "3-col",
    title: "Conserving the collection",
    info: `
      <div>By Ruth Watson</div>
      <a href="https://blog.sciencemuseum.org.uk/conserving-the-collection/"><time class="date" datetime="2019-02-27T16:02:23+00:00" itemprop="datePublished">27 February 2019</time></a>`,
    desc: "Go behind the scenes with our conservation team and discover what it takes to prepare to move 300,000 objects to their new home.",
    img: "https://blog.sciencemuseum.org.uk/wp-content/uploads/2019/02/1857-0101_0001-512x384.png",
  },
};

export const ListView = {
  args: {
    griditem: null,
    info: null,
    variant: "c-card--list",
    title: "Conserving the collection",
    desc: "Go behind the scenes with our conservation team and discover what it takes to prepare to move 300,000 objects to their new home.",
    img: "https://blog.sciencemuseum.org.uk/wp-content/uploads/2019/02/1857-0101_0001-512x384.png",
  },
};
