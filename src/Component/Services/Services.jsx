import React from 'react'
import './Services.css'
import Card from '../Card/Card'
//import HeartEmoji from '../../img/heartEmoji.png'
import Resume from './resume.pdf'


const Services = () => {
  return (
    <div className="services">
    {/*lest side */}
    <div className="awesome">
    <span>Freelance</span>
    <span>Freelance Project</span>
    <span>
        This is my pleasure to share some projects
        <br/>
       All the applications are in under deploment phase.
    </span>
    <a href={Resume} download>
    <button className='button s-button'>Contact</button>
    </a>
    <div className="blur s-blurl" style={{background: "#ABF1FF94"}}></div>
    </div>
    
    {/*right side */}
    <div className="cards">
        <div style={{left: '-26rem'}}>
            <Card           
            heading={'WeCare'}
            detail={"Physiotherapy patient care mobile application"}            
            />            
        </div> 
        {/*2nd card */}

        <div style={{left: "-6rem"}}>
            <Card
            
            heading={"Let's Start"}
            detail={'Nursing educational web site'}            
            />            
        </div>
        {/*3rd card */}
        <div style={{left: "34rem"}}>
            <Card
           
            heading={'Online Dictionary'}
            detail={'Nepali language online dictionary web application'}            
            />            
        </div> 
         {/*4th card */}
        <div style={{left: "14rem"}}>
            <Card
           
            heading={'Pharmacy Application'}
            detail={'Sale and inventory handling web application'}            
            />            
        </div> 
        <div className="blur s-blur2"style={{
            background:"var(--purple)"
        }}></div>

    </div>
    
    </div>
  );
};
export default Services;