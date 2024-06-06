import template from "./accordion.hbs";
import details from "./accordion-details.hbs";
import accordion from "../../js/components/accordion";

export default {
  args: {
    accordions: [
      {
        title: "Accordion Title",
        content:
          "<p>Use accordions to progressively disclose further sections of information, which otherwise might result in a very long or unscannable page.</p>",
      },
      {
        title: "Prohibited use",
        content: `
        <p>You agree to use the Websites only for lawful purposes and in a considerate and responsible way that does not infringe the rights of, restrict or inhibit anyone else’s use and enjoyment of the Websites.</p>
          <p>You agree not to use the Websites:</p>
          <ul>
            <li>for any purpose that is against the law;</li>
            <li>in any way that causes interruption or damage to the online services or renders them impaired or less efficient;</li>
            <li>for collecting data about other users;</li>
          </ul>`,
      },
    ],
  },
};

document.addEventListener("DOMContentLoaded", () => {
  accordion();
});

export const Accordion = {
  render: (args) => template(args),
};

export const AsDetailselement = {
  render: (args) => details(args),
};
