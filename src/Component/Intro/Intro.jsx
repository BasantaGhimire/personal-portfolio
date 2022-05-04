import React from 'react'
import './Intro.css'
import LinkedIn from '../../img/linkedin.png'
import Github from '../../img/github.png'
import AWS from '../../img/aws.png'
//import Blue from '../../img/blue.png'
import ReactJS from '../../img/reactjs.png'
import CSharp from '../../img/csharp.png'
import CSS from '../../img/css.png'
import HTML from '../../img/html.png'
import Java from '../../img/java.png'
import JS from '../../img/js.png'
import MongoDB from '../../img/mongodb.png'
import MySql from '../../img/mysql.png'
import NodeJS from '../../img/nodejs.png'
import Oracle from '../../img/oracle.png'
import SpringBoot from '../../img/springboot.png'
import SQL from '../../img/sql.png'
import Python from '../../img/python.png'
import UNIX from '../../img/unix.png'
import ASPNET from '../../img/aspnet.png'
import MyImage from '../../img/myimage.png'
import Resume from './resume.pdf'
import Greeting from '../Greeting/Greeting'




export const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
          <div className="i-name">
            <span>Hello Everyone,<Greeting/> <br/> 
              </span>
            <span>Basanta B. Ghimire </span>
            
            <span>Software Engineering Technologist
              <br/> 
              Full-stack Developer</span>
          </div>
          <a href={Resume} download><button className="button i-button">
            Hire Me
          </button>
          </a>
         
          <div className="i-icons">
            <a href="https://github.com/BasantaGhimire">
            <img src={Github} alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/basanta-babu-ghimire/">
            <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="i-right">
          <img src={HTML} alt="1" />          
          <img src={AWS} alt="2" /> 
          <img src={CSharp} alt="3" />
          <img src={CSS} alt="4" />
          <img src={ReactJS} alt="5" />
          <img src={Java} alt="6" />
          <img src={JS} alt="7" />
          <img src={MongoDB} alt="8" />
          <img src={MySql} alt="9" />
          <img src={NodeJS} alt="10" />
          <img src={Oracle} alt="11" />
          <img src={SpringBoot} alt="12" />
          <img src={SQL} alt="13" />
          <img src={Python} alt="14" />
          <img src={UNIX} alt="15" />
          <img src={ASPNET} alt="16" />
          <img src={MyImage} alt="17" />    
        </div>

        {/**blur divs */}

        <div className="blur" style={{background:"rgb 238 210 255"}}></div>

        <div className="blur" style={{
          background: '#C1F5FF', 
          top: '17rem',
          width:'21rem',
          height:'11rem',
          left:'-9rem'
        }}>

        </div>


        
    </div>
  )
}
export default Intro;
