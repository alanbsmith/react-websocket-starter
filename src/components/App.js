import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';

let socket = io.connect();

const Hello = React.createClass({
  componentDidMount() {
    socket.on('connect', function(data) {
      socket.emit('join', 'hello world from the client!');
    });
  },

  render() {
    return(
      <h1>Hello, {this.props.name}!</h1>
    )
  }
});

export default Hello;
