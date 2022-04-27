// rsf 함수형 컴포넌트
// import React from 'react';

// function Header(props) {
//   return (
//     <div>
//       <header>
//         <h1>헤더입니다.</h1>
//       </header>
//     </div>
//   );
// }

// export default Header;

// rcc 클래스형 함수
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>헤더입니다.</h1>
        </header>
      </div>
    );
  }
}

export default Header;