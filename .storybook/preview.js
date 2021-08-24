// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }

import { addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// import '../src/styles/index.scss';

addDecorator(withInfo); 
/**
 * 全局设置 info 样式
 * info-addons源样式
 * Overrides styles of addon. The object should follow this shape:
 * https://github.com/storybookjs/storybook/blob/master/addons/info/src/components/Story.js#L19
 */
//  addParameters({
//     info: {
//         inline: true,
//         source: false,
//         styles: stylesheet => ({
//             // Setting the style with a function
//             ...stylesheet,
//             infoBody: {
//                 ...stylesheet.infoBody,
//                 padding: '20px 40px 20px'
//             },
//             header: {
//               ...stylesheet.header,
//               h1: {
//                 ...stylesheet.header.h1,
//               },
//             },
//         }),
//     }
// });