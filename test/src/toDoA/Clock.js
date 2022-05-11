import React, { Component } from 'react';

class Clock extends Component {
  today = function(){
    let date = new Date();
    console.log(date);
  } 
  render() {
    return (
      <div className='clock'>
        <div className='day'></div>
      </div>
    );
  }
}

export default Clock;