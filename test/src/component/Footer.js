// rsf 함수형 컴포넌트
// import React from 'react';

// function Footer(props) {
//   return (
//     <div>
//       <footer>
//         <h1>푸터입니다.</h1>
//       </footer>
//     </div>
//   );
// }

// export default Footer;

// rcc 클래스형 함수
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <h1>푸터입니다.</h1>
        </footer>
     </div>
    );
  }
}

export default Footer;