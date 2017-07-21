import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Doctor from './doctor';




class Root extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        <Doctor/>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
