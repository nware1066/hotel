import './App.css';
import Header from '../Header/Header';
import {Component} from 'react';
import getAllFetchedData from '../api.js';
import Dashboard from '../Dashboard/Dashboard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      guest: {
        userName: "Faustino Quitzon",
        id: 9,
      },
      bookings: [],
      totalSpent: 0,
      error: "",
    };
  }

  componentDidMount() {
    getAllFetchedData()
      .then((allData) => this.setState({ bookings: allData.bookings }))
      .catch((error) => {
        this.setState({ error: error });
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard bookings={this.state.bookings} userID={this.state.guest.id} />
      </div>
    );
  }
}

export default App;
