import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitates the buying and selling of products and services."
          Our e-commerce platform provides a seamless online shopping experience, connecting buyers and sellers through a secure and user-friendly interface
          This website is an online platform where you can easily buy and sell products and services"
          interact with customers,and conduction transaction without the need for a physical presence. E-commerce accessibility and the global reach they offer.</p>
        <p>E-commerce websites typically display products or services and detailed description, image, prices, and any available variable
          (e.g., Sizes, colors). Each product usually has its one dedicated with relevent information.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
