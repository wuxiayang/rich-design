import React from 'react';
import { storiesOf  } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {Input} from './input';

const defaultInput = () => (
    <Input 
        style={{width: '300px'}}
        placeholder="placeholder"
        onChange={action('changed')}
    />
)

const disabledInput = () => (
    <Input
        style={{width: '300px'}}
        placeholder="disabled input"
        disabled
    />
)
   
const iconInput = () => (
    <Input
        style={{width: '300px'}}
        placeholder="input with icon"
        icon="angle-down"
        size='sm'  
    />
)

const sizeInput = () => (
    <>
        <Input
            style={{width: '300px'}}
            defaultValue="large size"
            size="lg"
        />
        <Input
            style={{width: '300px'}}
            defaultValue="small size"
            size="sm"
        />
    </>
)

const pandInput = () => (
    <>
        <Input
            style={{width: '300px'}}
            defaultValue="prepend text"
            prepend="http://"
        />
        <Input
            style={{width: '300px'}}
            defaultValue="baidu"
            append=".com"
        />        
    </>
)

storiesOf('Input Component', module)
    .add('通用的Input', defaultInput)
    .add('被禁用的Input', disabledInput)
    .add('带图标的Input', iconInput)
    .add('不同尺寸的Input', sizeInput)
    .add('带前后缀的Input', pandInput)


