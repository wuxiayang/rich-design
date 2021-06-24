import React from 'react';
// import './App.css';
// import Button, { ButtonType, ButtonSize} from './components/Button/button';
import Alert, { AlertType } from './components/Alert/alert';

function App() {
  var flag = false;
  const closeAlert = () =>{
    flag = true;
    console.log('回调传递');
  }
  console.log('flag',flag);
  return (
    <div className="App">
      <header className="App-header">
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
        <Alert 
          type={AlertType.Waring}
          title="提示标题"
          showIcon={true}
          message={<div>提示内容2</div>}
          closable={flag}
          onClose={()=>closeAlert()}
        />
      </header>
    </div>
  );
}

export default App;