import React from 'react'
import './sponsors.css'
import sponsor1 from "../../img/sponsor1.png"

export default function Sponsors() {
  return (
    <div className='s'>
      <h1>PATROCINADORES</h1>
      <div className='s-wrapper'>
          <img src={sponsor1} alt="" />
      </div>
    </div>
  )
}
