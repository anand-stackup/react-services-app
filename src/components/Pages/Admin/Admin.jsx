import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import "./Admin.css"
import Popup from './Popup'

const Admin = () => {
    const [id, setId] = useState('')
    const [popup, setPopup] = useState(false)

    const [bookings, seBooking] = useState([])

    function getBooking() {
        axios.get('http://localhost:4001/api/booking')
            .then((data) => { seBooking(data.data) })
    }

    const logResult = useCallback(() => {
        return 2 + 2;
    }, []);

    useEffect(() => {
        getBooking()
    }, [logResult])

    console.log(bookings);


    return (
        <div >
            <table className="admin" >
                    <tr>
                        <th>Product Name</th>
                        <th>Date</th>
                        <th>Slot</th>
                        <th>Status</th>
                        <th>Update Status</th>
                    </tr>
                    {bookings.map((booking)=>(<tr key={booking._id}>
                        <td>{booking.productName}</td>
                        <td>{booking.date}</td>
                        <td>{booking.slot}</td>
                        <td>{booking.status}</td>
                        {booking.status !== 'Completed'?<td><button onClick={()=>{setPopup(true); setId(booking._id)}}>Update Status</button></td>: ''}
                    </tr>))}
            </table>

            {popup ? <Popup setPopup={setPopup} id={id} getBooking={getBooking} />: ""}
        </div>
    )
}

export default Admin