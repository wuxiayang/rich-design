import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from '@storybook/addon-actions';
import { Upload } from "./upload";

const SimpleUpload = () => {
    return (
        <Upload
            action="http://jsonplaceholder.typicode.com/posts/"
        />
    )
}

storiesOf('Upload component', module)
    .add('Upload', SimpleUpload)