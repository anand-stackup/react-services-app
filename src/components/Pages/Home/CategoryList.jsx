import React, { useState } from 'react'
import Modal from './Modal'

const CategoryList = ({data}) => {
const [modal, seModal] = useState(false)

  return (
    <div className='category-list' >
        <div className="categ-img">
            <img src={data.imgurl} alt="" />
        </div>
        <h4 className="categ-name">{data.productName}</h4>
        <button className='booking-btn' onClick={() => {seModal(true)}}>Book Service</button>

       {modal? <Modal data={data} seModal={seModal} /> : ''}
    </div>
    
  )
}

export default CategoryList