import './Dashboard.css';

function Dashboard(props) {

    console.log(props)

            // if (props.userID === props.bookings.userID) {

                return (
               <div className="bookings">
                    {props.bookings.map((booking) => (
                       <div className="booking" key={booking.id}>{`${booking.date} ${booking.roomNumber}`}</div>
                       ))} 
               </div> 
             );
            // } else {
            //     return ''
            // }
        };

export default Dashboard;
