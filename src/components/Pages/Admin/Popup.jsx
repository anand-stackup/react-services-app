import React, { useState } from 'react'
import axios from 'axios'

const Popup = ({ setPopup, id, getBooking }) => {
    const sataus = { status: "Completed" }

    const [confirm, setConfirm] = useState(false)

    function updateBooking(id) {
        axios.put(`http://localhost:4001/api/booking/${id}`, sataus)
        getBooking()
        setConfirm(true)
        setTimeout(() => {
            setConfirm(false)
            setPopup(false)
        }, "2000");
    }

    return (
        <div className='popup'>
            <h2>Confirm Status Update</h2>
            {confirm ? <h2 className="confirmed">Status Updated</h2> : ""}
            <div className="popup-btn">
                <button onClick={() => { updateBooking(id) }}>Confirm</button>
                <button onClick={() => { setPopup(false) }}>Cancel</button>
            </div>
        </div>
    )
}

export default Popup