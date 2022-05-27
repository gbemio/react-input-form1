import React, { Component } from 'react'

export default class classApp extends Component {
constructor(props) {
    this.state ={
windowWidth: window.innerWidth,
    };
}

componentDidMount() {
    console.log("this app component loaded");
}

componentDidUpdate(prevProps) {
    //  lifecycle func - when component props change
}

componentWillUnmount() {
    // lifecycle func -when component unmounts/cleanup function
}



  render() {
    return (
      <div className='app'>
        <center>
            <h1>The useEffect Hook</h1>
            <h2>The window width is: {windowWidth}</h2>
        </center>
      </div>
    );
  }
}
