import './App.css';
import Header from '../Header/Header';
import {Component} from 'react';
import fetchBookings from '../api.js';
import Dashboard from '../Dashboard/Dashboard';

  // let guestBookings;

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "Faustino Quitzon",
      id: 9,
      guestBookings: [],
      bookings: [],
      totalSpent: 0,
      error: ""
    };
  }

  
  componentDidMount() {
    fetchBookings()
      // .then((fetchBookings) => console.log('PROMISE >>>>', fetchBookings))
      .then((fetchedBookings) => this.setState({ bookings: fetchedBookings }))
      .then((filteredGuestBookings = this.getGuestBookings()) =>
        this.setState({ guestBookings: filteredGuestBookings })
      )
      .catch((error) => {
        this.setState({ error: error });
      });
  }


  getGuestBookings = () => {
    let guestBookings = this.state.bookings.filter((booking) => {
      return booking.userID === this.state.id;
    });
    return guestBookings;
  }

  render() {
    return (
      <div className="App">
        <Header name={this.state.userName}/>
        <Dashboard 
        guestBookings={this.state.guestBookings}
        bookings={this.state.bookings}
        userID={this.state.id} 
        />
      </div>
    )
  };
}

export default App;
