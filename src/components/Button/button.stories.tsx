import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Button from './button';

// //Decorator
// const styles: React.CSSProperties = {
//     textAlign: 'center'
// }
// const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>



const defaultButton = () => (
    <Button onClick={action('clicked')}>default button</Button>
)

const buttonWithSize = () => (
    <>
        <Button size="lg">large button</Button>
        <Button size="sm">small button</Button>
    </>
)
const buttonWithType = () => (
    <>
        <Button btnType="primary">primary button</Button>
        <Button btnType="danger">danger button</Button>
        <Button btnType="default">default button</Button>
        <Button btnType="link" href="https://storybook.js.org/">link button</Button>
    </>
)

storiesOf('Button Component', module)
//   .addDecorator(CenterDecorator)
  .addDecorator(withInfo)
  .add('默认Button', defaultButton)
  .add('不同尺寸的Button', buttonWithSize)
  .add('不同类型的Button', buttonWithType)