import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../../../slices/cartSlice';
import {RiDeleteBin6Line} from "react-icons/ri"

const RenderCartCourse = () => {
    const {cart} =useSelector((state)=>state.cart);
    const dispatch = useDispatch();
  return (
    <div>
      {
        cart.map((course,index)=>(
            <div>
                <div>
                    <img src={course?.thumbnail} alt="" />
                    <div>
                        <p>{course?.courseName}</p>
                        <p>{course?.catogery?.name}</p>
                        <div>
                            <span>4.8</span>

                        </div>
                    </div>
                </div>

                <div>
                    <button onClick={()=>dispatch(removeFromCart(course.id))}>
                        <RiDeleteBin6Line/>
                        <span>Remove</span>

                        <p>Rs{course?.price}</p>

                    </button>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default RenderCartCourse
