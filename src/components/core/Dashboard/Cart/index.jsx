import React from 'react'
import { useSelector } from 'react-redux'
import RenderCartCourse from "./RenderCartCourse";
import RenderTotalAmount from "./RenderTotalAmount";

const index = () => {
    const {total,totalItems}= useSelector((state)=>state.auth)
  return (
    <div>
      <h1>Your Cart</h1>
      <p>{total}</p>
    </div>
  )
}

export default index
