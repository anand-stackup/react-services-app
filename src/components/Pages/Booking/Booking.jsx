import React, { useContext, useState } from 'react'
import { MyContext } from '../../../Context'
import axios from 'axios'
import './Booking.css'

const Booking = () => {
    const { data } = useContext(MyContext)


    const [slot, setSlot] = useState({ date: "", slot: "" })

    function inputvalue(e) {
        setSlot({ ...slot, [e.target.name]: e.target.value })
    }

    const bookingData= {...slot, productName: data.productName, status: 'pending' }

    console.log(bookingData, data);

    function postBooking(){
        axios.post('http://localhost:4001/api/booking', bookingData)
    }

    


    return (
        <div className='booking'>
            <form action="">
                <h2>Price for the service:{data.price}</h2>
                <div className="date">
                    <label htmlFor="date">Schedule service date</label>
                    <input type="date" id='date' name='date' onChange={inputvalue} />
                </div>
                <span>Select Slot</span>
                <div className="check">

                    <i><label htmlFor="schedl1">Morning</label></i>
                    <input type="checkbox" name="slot" id="schedl1" value='Morning' onChange={inputvalue} />

                    <i><label htmlFor="schedl2">After Noon</label></i>
                    <input type="checkbox" name="slot" id="schedl2" value='Noon' onChange={inputvalue} />

                    <i><label htmlFor="schedl3">Evening</label></i>
                    <input type="checkbox" name="slot" id="schedl3" value='Evening' onChange={inputvalue} />
                    <button onClick={()=>{postBooking()}}>Book Slot</button>
                </div>
            </form>
        </div>
    )
}

export default Booking