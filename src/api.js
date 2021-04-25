export const fetchGuests = () => {
    return fetch('http://localhost:3001/api/v1/customers')
    .then(response => response.json())
    .then(data => data.guests)
    .catch(error => console.log("fetch guest error"))
}

