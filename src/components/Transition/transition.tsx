import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

export type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-top';

//报错问题 ：https://coding.imooc.com/learn/questiondetail/208833.html
// https://github.com/reactjs/react-transition-group/issues/661

type TransitionProps = CSSTransitionProps & {
    animation?: AnimationName,
    wrapper?: boolean
}


const Transition: React.FC<TransitionProps> = (props) => {
    const {
        wrapper,
        children, 
        classNames,
        animation,
        ...restProps
    } = props;
    return (
        <CSSTransition
            classNames={classNames ?  classNames : animation}
            {...restProps}
        >
            {/* {children} */}
            {wrapper ? <div>{children}</div> : children}
        </CSSTransition>
    );
}

Transition.defaultProps = {
    unmountOnExit: true,
    appear: true,
}

export default Transition;
