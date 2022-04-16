import React from 'react'
import './Intro.css'
import LinkedIn from '../../img/linkedin.png'
import Github from '../../img/github.png'

export const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
          <div className="i-name">
            <span>Hello Everyone, </span>
            <span>Basanta B. Ghimire</span>
            <span>I am a Software Engineering Technology graduate focusing
            on full stack development. Through extensive hands-on projects, 
            I have successfully developed various web and mobile applications, 
            focusing on the software application life cycle, design standards, 
            error handling, and code-reusability.</span>
          </div>
          
          <button className="button i-button">Hire Me</button>
          <div className="i-icons">
            <img src={Github} alt="" />
            <img src={LinkedIn} alt="" />
          </div>
        </div>
        <div className="i-right"></div>
        i am right
    </div>
  )
}
export default Intro;
