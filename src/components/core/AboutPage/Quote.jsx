import React from 'react'
import HighlightText from '../HomePage/HighlightText'
const Quote = () => {
  return (
    <div>
      <div className='text-white text-center'>
                <h1> " We are passionate about revolutionizing the way we learn. Our innovative platform  <HighlightText text={"combines technology"}/>,
                <span className='text-brown-50'> expertise </span>
                <span>, and community to create an <span className='text-brown-50'>unparalleled educational experience.</span>"</span></h1>
      </div>
    </div>
  )
}

export default Quote
