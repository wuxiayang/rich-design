import { addDecorator } from '@storybook/react';
import React from 'react';
//Decorator
const styles: React.CSSProperties = {
    textAlign: 'center'
}
const CenterDecorator = (storyFn: any) => (
    <>
        <h3>组件演示</h3>
        <div style={styles}>{storyFn()}</div>
    </>
)
console.log('CenterDecorator: ', CenterDecorator);
addDecorator(CenterDecorator);