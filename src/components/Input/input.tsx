import React, { FC, ReactElement, InputHTMLAttributes, ChangeEvent } from "react";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import classNames from "classnames";
import Icon from '../Icon/icon';

type InputSize = 'lg'| 'sm';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'>{
  /**是否禁用 Input */
  disabled?: boolean;
  /**设置 input 大小，支持 lg 或者是 sm */
  size?: InputSize;
  /**添加图标，在右侧悬浮添加一个图标，用于提示 */
  icon?: IconProp;
  /**添加前缀 用于配置一些固定组合 */
  prepend?: string | ReactElement;
  /**添加后缀 用于配置一些固定组合 */
  append?: string | ReactElement;
  onChange? : (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = (props) => {
    //取出各种的属性
    const {
        disabled,
        size,
        icon,
        prepend,
        append,
        style,
        ...restProps
    } = props;
    console.log('icon: ', icon);
    //根据属性计算不同的className
    const classes = classNames('rich-input-wrapper', {
        [`input-size-${size}`]: size,
        'is-disabled': disabled,
        'input-group': prepend || append,
        'input-group-append': !!append,
        'input-group-prepend': !!prepend
    });
    //判断输入值和默认值
    const fixControlledValue = (value: any)=>{
        if(typeof value === 'undefined' || value === null){
            return ''
        }
        return value
    }
    if('value' in props) {
        delete restProps.defaultValue;
        restProps.value = fixControlledValue(props.value);
    }
    return (
        //根据属性判断是否要添加特定的节点
        <div className={classes} style={style}>
            {prepend && <div className="rich-input-group-prepend">{prepend}</div>}
            {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`}/></div>}
            <input
                className="rich-input-inner"
                disabled={disabled}
                {...restProps}
            />
            {append && <div className="rich-input-group-append">{append}</div>}
        </div>
    )
}

export default Input;