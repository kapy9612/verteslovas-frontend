import React from "react";
import { action } from "@storybook/addon-actions";

import "/src/css/zero.css";
import "/src/css/atoms.css";

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}

global.__BASE_PATH__ = "/"

window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}