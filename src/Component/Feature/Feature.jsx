import React from 'react'
import './Feature.css'

const Feature = () => {
  return (
    <div className="feature">
        <div className="awesome">
            <span>Works for all the feature</span>
            <span>Technology</span>
            <span>
                Available service is Available service is Available service is
                <br/>
                apple Ball Available service isAvailable service is
                <br/>
                apple Ball Available service isAvailable service isAvailable service is
            </span>
            <button className="button f-button">Contact me</button>
            <div className="blur f-blir" style={{background: "#ABF1FF94"}}></div>
            </div>

            {/*Right side*/}
            <div className="f-right">
                <div className="f-mainCircle">
                    <div className="f-secondCircle">
                        <span>Cloude Computing</span>                           
                    </div>

                    <div className="f-secondCircle">
                    <span>Database Management</span>                                            
                    </div>

                    <div className="f-secondCircle">                   
                    <span>Software<br/>
                    Development</span>
                    </div>

                    <div className="f-secondCircle">                    
                    <span>Mobile Application</span>
                    </div>

                    <div className="f-secondCircle">
                        <span>Web <br/>Application</span>                                            
                    </div>
                    <div className="f-secondCircle">
                        <span>Desktop Application</span>                                            
                    </div>

                    {/*background Circle*/}
                    <div className="f-backCircle blueCircle"></div>
                    <div className="f-backCircle yelloCircle"></div>
                </div>
        </div>
    </div>
  )
}

export default Feature;