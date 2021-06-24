import classNames from "classnames";
import React from "react";

// export enum AlertMode {
//     Nornal= 'normal',
//     Special= 'special'
// }

export enum AlertType {
    Success = 'success',
    Default = 'default',
    Danger = 'danger',
    Waring = 'warning'
}


interface AlertProps {
    className?: string;
    onClose?: ()=> void;
    showIcon?: boolean;
    // children?:React.ReactNode;
    type?: string;
    mode?: string;
    message?: string | React.ReactNode;
    title?:string | React.ReactNode;
    closable?: boolean;
    closeAlert?: (e: MouseEvent)=> void;
}

const Alert: React.FC<AlertProps> = (props) => {
    const [closed, setClosed] = React.useState(false);
    const {
        className,
        type,
        message,
        title,
        // closable,
        showIcon,
        onClose
    } = props;
    const classes = classNames('alert',className,{
        [`alert-${type}`]: type,
        // [`alert-${mode}`]: mode
    })
    const closeAlert = (e: React.MouseEvent) =>{
        e.stopPropagation();
        setClosed(true);
        console.log('关闭');
        if(onClose){
            onClose();
        }
    }
    return(
        <div className={closed ? 'alert-display' : classes}>
            <div>
                <p className="alertTitle">{title}</p>
                <div>
                    {message}
                </div>
            </div>
            <div>
                {showIcon && <div onClick={(e)=> closeAlert(e)}>关闭</div>}
            </div>

        </div>
    );
}

Alert.defaultProps= {
    type: AlertType.Default,
    closable: false,
    showIcon: true
}

export default Alert;