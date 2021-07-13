import React from "react";
import { render } from '@testing-library/react';
import Menu, { MenuProps } from './menu';
import MenuItem from './menuItem';

const testProps: MenuProps = {
    defaultIndex: 0,
    onSelect: jest.fn(),
    className: 'test'
}

const testVerProps: MenuProps = {
    defaultIndex: 0,
    mode: 'vertical',
}

const generaterMenu = (props: JSX.IntrinsicAttributes & MenuProps & { children?: React.ReactNode; }) => {
    return(
        <Menu {...props}>
        <MenuItem index={0}>active</MenuItem>
        <MenuItem index={1} disabled>disabled</MenuItem>
        <MenuItem index={2}>normal</MenuItem>
      </Menu>
    )
}

describe('test Menu',()=>{
    it('should render correct Menu and MenuItem based on default props', ()=>{

    });
    it('click items should change active and call the right callback',()=>{

    });
    it('should render vertical mode when mode is set to vertical',()=>{

    })
})