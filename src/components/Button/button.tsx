import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, FC }  from 'react';
import classNames from 'classnames';

// export enum ButtonSize {
//     Large = 'lg',
//     Small = 'sm'
// }
// export enum ButtonType {
//     Primary = 'primary',
//     Default = 'default',
//     Danger = 'danger',
//     Link = 'link'
// }
export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary'|'default'|'danger'|'link';

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: string;
    btnType?: ButtonType;
    children?:React.ReactNode;
    href?:string;
}

//交叉类型： 将多个类型合并为一个类型
//联合类型： 多个类型的或关系

// 交叉类型   &
type NativeButtonProps =BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps =BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
//存在问题：Button的必用属性不适用于a标签，反之亦然，所以需要设置为可选
export type ButtonProps =Partial<NativeButtonProps & AnchorButtonProps>;

export const Button: FC<ButtonProps> = (props) =>{
    const { 
        btnType, 
        className,
        disabled, 
        size,
        children,
        href,
        ...restProps
    } = props; 
    const classes = classNames('btn',className,{
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === 'link') && disabled
    })
    if(btnType === 'link' && href){
        return(
            <a
                className={classes}
                href={href}
                {...restProps}
            >
                {children}
            </a>
        )
    }else{
        return(
            <button
                className={classes}
                disabled={disabled}
                {...restProps}
            >
                { children }
            </button>
        )
    }

}

Button.defaultProps = {
    btnType: 'default', 
    disabled: false, 
}

export default Button;