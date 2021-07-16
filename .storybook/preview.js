// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }

import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import '../src/index.css'

addDecorator(withInfo); 