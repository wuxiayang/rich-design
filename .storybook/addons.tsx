import { addDecorator } from '@storybook/react';
import React from 'react';
//Decorator
const styles: React.CSSProperties = {
    textAlign: 'center'
}
const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>
addDecorator(CenterDecorator);