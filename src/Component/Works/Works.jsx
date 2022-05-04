import React from 'react'
import './Works.css'
import Skills from '../Skills/Skills'
const Works = () => {
  return (
      <div className='works'>
          {/**left side */}
        <div className="awesome">
            <span>Related Experiance</span>
            <span>Techinical Skills</span>
            <span>
                Lorem ispum is simply dummy text of printing of printing Lorem 
                <br/>
                ipsum dolor sit amet, consectetur adipisicing elit. Eos repellat ea tempore natus quam,
                <br/>
                ipsum dolor sit amet, consectetur adipisicing elit. 
                <br/>
                ipsum dolor sit amet, consectetur .
            </span>
    <button className='button s-button'>Hire</button>
    <div className="blur s-blurl" style={{background: "#ABF1FF94"}}></div>
    </div>{/**Right side */}
    <div>
      <Skills/>
    </div>
    
  </div>
  )
}

export default Works;