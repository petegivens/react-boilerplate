import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: 'skyblue',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 400,
    backgroundColor: 'orange',
  },
};

class App extends Component {
  state = {

  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h1>Your New App</h1>
        </div>
        <div style={styles.main}>
          <h2>Your App Goes Here</h2>
          <p>{"The sky's the limit!"}</p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app')); // eslint-disable-line

