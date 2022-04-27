// rsf 함수형 컴포넌트
// import React from 'react';

// function Main(props) {
//   return (
//     <div>
//       <main>
//         <h1>안녕하세요.</h1>
//       </main>
//     </div>
//   );
// }

// export default Main;

// rcc 클래스형 함수
import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div>
        <main>
          <h1>안녕하세요.</h1>
        </main>
      </div>
    );
  }
}

export default Main;