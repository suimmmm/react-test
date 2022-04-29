// rsf 함수형 컴포넌트
import React from 'react';
import { Link } from 'react-router-dom';

function Main(props) {
  return (
    <div>
      <h3>안녕 메인페이지임</h3>
      <ul>
        <Link to='/product/1'><li>1번 상품</li></Link>
        <Link to='/product/2'><li>2번 상품</li></Link>
      </ul>
    </div>
  );
}

export default Main;

// rcc 클래스형 함수
// import React, { Component } from 'react';

// class Main extends Component {
//   render() {
//     return (
//       <div>
//         <main>
//           <h1>안녕하세요.</h1>
//         </main>
//       </div>
//     );
//   }
// }

// export default Main;

// import React from 'react';

// function Box({ children }){
//   console.log(children);
//   console.log(React.Children.toArray(children));
//   return children;
// }

// const fruits = [
//   {id:1, name:'apple'},
//   {id:2, name:'kiwi'}
// ]

// function App() {
//   return (
//     <Box>
//       <div name='banana'>banana</div>
//     </Box>
//   );
// }

// export default App;