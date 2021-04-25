import './App.css';
import Header from '../Header/Header';
import {Component} from 'react';

class App extends Component {
  constructor () {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <Header /> 
      </div>
    );
  }

}

export default App;
