import './Dashboard.css';

function Dashboard(props) {
    console.log(props)

    if (props.guestBookings.length) {
        return (
            <div className="bookings">
                    {props.guestBookings.map((booking) => (
                        <div className="booking" key={booking.id}>{`${booking.date} ${booking.roomNumber}`}</div>
                        ))} 
               </div> 
             )
        } else {
                return (
                    <h1>you have no bookings</h1>
                )
            }           
    }
    
export default Dashboard;
