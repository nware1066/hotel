function fetchGuests () {
    return fetch('http://localhost:3001/api/v1/customers')
    .then(response => response.json())
    .then(data => data.guests)
    .catch(error => console.log("fetch guest error"))
}

function fetchBookings() {
    return fetch('http://localhost:3001/api/v1/bookings')
    .then(response => response.json())
    .then(data => data.bookings)
    .catch(error => console.log("fetch bookings error"))
}

function getAllFetchedData() {
    return Promise.all( [fetchGuests(), fetchBookings()] )
    .then(response => {
        let allData = {};
        allData.users = response[0];
        allData.bookings = response[1];
        return allData;
    })
    .catch(error => console.log("allData error"))
}


export default getAllFetchedData;
