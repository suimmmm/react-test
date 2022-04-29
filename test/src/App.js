import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
// import Header from './component/Header';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';


function App() {
  return (
    // 메인페이지에 짜는 html

    // <div className="App">
    //   <div className='black-nav'>
    //     <div>개발 Blog</div>
    //   </div>
    // </div>

    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/product/*' element={<Main />}></Route>
          <Route path='*' element={<Footer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
