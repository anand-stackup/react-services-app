import React, { useContext } from 'react'
import './Modal.css'
import { useNavigate } from 'react-router'
import { MyContext } from '../../../Context'

const Modal = ({ data, seModal }) => {
    const navigate  = useNavigate()
    const{setData} = useContext(MyContext)

    function bookingpage(){
        navigate('/booking');
        setData(data)
    }

   

    return (
        <div className='overlay'>
            <div className='modal'>
                <div className="btn">
                    <button onClick={() => { seModal(false) }}><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className="pdt-img">
                    <img src={data.imgurl} alt="" />
                </div>
                <h4 className="categ-name">{data.productName}</h4>
                <p>{data.productDesc}</p>
                <h3>Price: {data.price}</h3>

                <button className='book-btn'  onClick={() =>{bookingpage()}}>Book Service</button>
            </div>
        </div>
    )
}

export default Modal