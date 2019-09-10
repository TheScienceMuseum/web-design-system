module.exports = {
  title: "Audio player",
  status: "wip",
  context: {
    title: "Track title",
    description: "track description",
    img:
      "https://smgco-oralhistories.s3-eu-west-1.amazonaws.com/Jack+Cuzick/Image+Jack+Cuzick+29_5_18.JPG",
    audio:
      "https://smgco-oralhistories.s3-eu-west-1.amazonaws.com/Helgi+Johannsson/Oral+History+with+Helgi+Johannsson+on+21.05.18+Part+2+mp3.mp3"
  },
  variants: [
    {
      name: "no img",
      context: {
        title: "Track title",
        description:
          "This version doesn't have a thumbnail image, which is optional, so it shows the fallback image, but it does have a longer track description. Maybe even a couple of sentences.",
        img: null,
        audio:
          "https://smgco-oralhistories.s3-eu-west-1.amazonaws.com/Helgi+Johannsson/Oral+History+with+Helgi+Johannsson+on+21.05.18+Part+2+mp3.mp3"
      }
    }
  ]
};
