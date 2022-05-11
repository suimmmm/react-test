import React from 'react';
// import { BrowserRouter , Routes , Route } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import Content from './toDoA/Content';

function App() {
  return (
    // 메인페이지에 짜는 html

    // <div className="App">
    //   <div className='black-nav'>
    //     <div>개발 Blog</div>
    //   </div>
    // </div>

    <div className='App'>
      <Content />
    </div>
  );
}

export default App;
