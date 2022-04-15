import React from 'react'

function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Basanta B. Ghimire</div>
            <span>toggle</span>
        </div>
        <div className="n-reight">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Technical Skills</li>
                    <li>Education</li>
                    <li>Relevant Courses</li>
                    <li>Related Experiance</li>
                    <li>Experiance</li>
                    <li>Portfolio</li>
                    <li>Testimonials</li>


                </ul>

            </div>
            <button className="button">
                Contact Me
            </button>
        </div>
    </div>
  )
}

export default Navbar;