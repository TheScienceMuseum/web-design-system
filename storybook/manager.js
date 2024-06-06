import { addons } from "@storybook/manager-api";
import { ManagerTheme } from "./themes";

addons.setConfig({
  theme: ManagerTheme,
});
