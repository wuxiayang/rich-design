import React from 'react';
import { storiesOf  } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import Button from './button';
// import { PropsTable } from '../..comStories/propsTable/propstable';


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

const propDefinitions = [
    {
        property: 'routes',
        propType: 'array',
        required: true,
        description: 'router的路由栈信息',
        defaultValue: 'routes[]'
    }, {
        property: 'style',
        propType: 'object',
        required: false,
        description: '面包屑组件样式',
        defaultValue: '--'
    }
]

storiesOf('Button Component', module)
    .add('默认Button', defaultButton)
    .add('不同尺寸的Button', buttonWithSize, {
        info: {
            inline: false,
            // TableComponent: ()=> PropsTable({propDefinitions})
        }
    })
    .add('不同类型的Button', buttonWithType)
