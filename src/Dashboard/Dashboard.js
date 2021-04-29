import './Dashboard.css';

function Dashboard(props) {
    console.log(props)

        return (
            <div className="bookings">
                    {props.guestBookings.map((booking) => (
                        <div className="booking" key={booking.id}>{`${booking.date} ${booking.roomNumber}`}</div>
                        ))} 
               </div> 
             )
                
    }
    
export default Dashboard;
