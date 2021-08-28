import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf('Welcome page', module)
    .add('welcome', () => {
        return (
            <>
                <h1>欢迎来到rich-design-component</h1>
                <p>rich-design-component是一套组件库</p>
                <h3>安装试试</h3>
                <code>
                    npm install rich-design-component --save-dev
                </code>
            </>
        )
    }, { info: { disable: true}})