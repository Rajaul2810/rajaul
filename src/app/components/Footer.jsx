import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-skin-fill p-3 flex justify-center'>
        <p> &copy; Rajaul Karim {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer