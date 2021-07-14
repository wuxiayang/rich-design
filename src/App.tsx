import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// import './App.css';
import Transition from './components/Transition/transition';
import Button, { ButtonType, ButtonSize} from './components/Button/button';
// import Alert, { AlertType } from './components/Alert/alert';
import Menu  from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon';

library.add(fas);//添加所有的图标

const App: React.FC = () => {
  // var flag = false;
  // const closeAlert = () =>{
  //   flag = true;
  //   console.log('回调传递');
  // }
  // console.log('flag',flag);
  const [ show, setShow ] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="arrow-down" theme="primary" size="10x" />
        <Menu 
          defaultIndex={'0'} 
          onSelect={(index)=>{alert(index)}} 
          mode='horizontal'
          defaultOpenSubMenus={['2']}
        >
          <MenuItem>1</MenuItem>
          <MenuItem disabled>2</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>1-1</MenuItem>
            <MenuItem>1-1</MenuItem>
            <MenuItem>1-1</MenuItem>
          </SubMenu>
          <MenuItem>3</MenuItem>
        </Menu>
        <Button
          size='lg'
          onClick={()=> setShow(!show)}
        >
          按钮
        </Button>
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-left"
          wrapper
        >
          <div>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
          </div>
        </Transition>
        {/* <Button 
          onClick={(e)=>{e.preventDefault();console.log('111')}}
          btnType={ButtonType.Default} 
          size={ButtonSize.Large}
        >
          Default-Large
        </Button>
        <Button 
          className="custom"
          autoFocus
          btnType={ButtonType.Danger} 
          size={ButtonSize.Small}
        >
          Danger-Small
        </Button>
        <Button 
          btnType={ButtonType.Link} 
          size={ButtonSize.Large}
          href="http://www.baidu.com"
          target="_brank"
        >
          Link
        </Button>
        <Button 
          btnType={ButtonType.Default} 
          size={ButtonSize.Large}
          disabled={true}
        >
          Disabled
        </Button> */}
        {/* <Alert 
          type={AlertType.Waring}
          title="提示标题"
          showIcon={true}
          message={<div>提示内容2</div>}
          closable={flag}
          onClose={()=>closeAlert()}
        /> */}
      </header>
    </div>
  );
}

export default App;
