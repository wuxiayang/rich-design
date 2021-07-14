import React from "react";
import { cleanup, fireEvent, render, RenderResult, wait, waitFor } from '@testing-library/react';
import Menu, { MenuProps } from './menu';
import MenuItem from './menuItem';
import SubMenu from "./subMenu";
import { async } from "q";

const testProps: MenuProps = {
    defaultIndex: '0',
    onSelect: jest.fn(),
    className: 'test'
}

const testVerProps: MenuProps = {
    defaultIndex: '0',
    mode: 'vertical',
}

const generaterMenu = (props: MenuProps) => {
    return(
        <Menu {...props}>
            <MenuItem>active</MenuItem>
            <MenuItem disabled>disabled</MenuItem>
            <MenuItem>normal</MenuItem>
            {/* <li>sss</li> */}
            <SubMenu title="dropdown">
                <MenuItem>1-1</MenuItem>
            </SubMenu>
        </Menu>
    )
}

const createStyleFile = () => {
    const cssFile: string = `
        .rich-submenu {
            display: none;
        }
        .rich-submenu.menu-opened {
            display:block;
        }
    `;

    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = cssFile;
    return style;
}

// 将需要公用的组件元素提取出来
let wrapper: RenderResult,
    menuElement: HTMLElement,
    activeElement: HTMLElement,
    disabledElement: HTMLElement;

describe('test Menu',()=>{
    //钩子函数 每次用例执行之前都会先运行
    beforeEach(()=>{
        wrapper = render(generaterMenu(testProps));
        //添加样式
        wrapper.container.append(createStyleFile());
        //获取元素设置的testId
        menuElement = wrapper.getByTestId('test-menu');
        activeElement = wrapper.getByText('active');
        disabledElement = wrapper.getByText('disabled');

    });
    it('should render correct Menu and MenuItem based on default props', ()=>{
        expect(menuElement).toBeInTheDocument();
        expect(menuElement).toHaveClass('rich-menu test');
        // expect(menuElement.getElementsByTagName('li').length).toEqual(3);
        expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4);
        expect(activeElement).toHaveClass('menu-item is-active');
        expect(disabledElement).toHaveClass('menu-item is-disabled');
    });
    it('click items should change active and call the right callback',()=>{
        const thirdItem = wrapper.getByText('normal');
        fireEvent.click(thirdItem);
        expect(thirdItem).toHaveClass('is-active');
        expect(activeElement).not.toHaveClass('is-active');
        expect(testProps.onSelect).toHaveBeenCalledWith('2');//2是调用参数
        fireEvent.click(disabledElement);
        expect(disabledElement).not.toHaveClass('is-active');
        expect(testProps.onSelect).not.toHaveBeenCalledWith('1');

    });
    it('should render vertical mode when mode is set to vertical',()=>{
        cleanup();//清除上一个用例绑定的id
        const wrapper = render(generaterMenu(testVerProps));
        const menuElement = wrapper.getByTestId('test-menu');
        expect(menuElement).toHaveClass('menu-vertical');
    })

    it('should show dropdown items when hover on subMenu',async()=>{
        expect(wrapper.queryByText('1-1')).not.toBeVisible();
        const dropdownElement = wrapper.getByText('dropdown');
        fireEvent.mouseEnter(dropdownElement);
        await waitFor(()=>{
            expect(wrapper.queryByText('1-1')).toBeVisible();
        })
        fireEvent.click(wrapper.getByText('1-1'));
        expect(testProps.onSelect).toHaveBeenCalledWith('3-0');
        fireEvent.mouseLeave(dropdownElement);
        await waitFor(()=>{
            expect(wrapper.queryByText('1-1')).not.toBeVisible();
        })
    })

    //vertical的测试用例
     

})   