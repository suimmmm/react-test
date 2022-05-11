import React, { Component } from 'react';
import Clock from './Clock';
import Todo from './Todo';

class Content extends Component {
  render() {
    return (
      <div className='content'>
        <Clock />
        <Todo />
      </div>
    );
  }
}