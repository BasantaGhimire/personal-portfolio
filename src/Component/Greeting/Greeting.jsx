import React from 'react'

const Greeting = () => {
    const date= new Date();
    const hour=date.getHours();
  return (
    <div className="greeting">
        {
            hour>=12 ? hour>=16? <span>Good Evening !!</span>: <span>Good Afternoon !!</span>:<span>Good Morning !!</span>
        }
    </div>
  )
}

export default Greeting