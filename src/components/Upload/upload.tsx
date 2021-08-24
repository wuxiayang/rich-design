import React, { ChangeEvent, FC, useRef } from "react";
import axios from "axios";

import Button from "../Button/button";

export interface UploadProps {
    action: string;
    onProgress?: (percentage: number, file: File) => void;
    onSuccess?: (data: any, file: File) => void;
    onError?: (err: any, file: File) => void;
}

export const Upload: FC<UploadProps> = (props) => {
    const {
        action,
        onProgress,
        onSuccess,
        onError
    } = props;
    const fileInput = useRef<HTMLInputElement>(null);
    const handleClick = () => {
        if(fileInput.current) {
            fileInput.current.click()
        }
    }
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if(!files) return;
        // uploadFiles(files);
    }
    const uploadFiles = () => {
        
    }
    return (
        <div
            className="rich-upload-component"
        >
            <Button 
                btnType="primary"
                onClick={handleClick}
            >
                Upload File
            </Button>
            <input
                className="rich-file-input"
                style={{display: 'none'}}
                ref={fileInput}
                onChange={handleFileChange}
                type="file"
            />
        </div>
    )
} 