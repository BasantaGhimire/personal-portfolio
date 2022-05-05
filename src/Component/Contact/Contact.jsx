import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  
    const form = useRef();

    const[done, setdone]= useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
        .sendForm(
            'service_h7zaizz',
            'template_z59ipph', 
            form.current, 
            '0oo-qEWQBS0tcR7x6'
            )
          .then((result) => {
            console.log(result.text);
            setdone(true);
            
          }, (error) => {
            console.log(error.text);
          }
        );
      };
    return (    
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span>Contact</span>
                <span>Send Message</span>
                <div 
                    className="blur s-blur"
                    style={{background:"#ABF1FF94"}}>                    
                </div>            
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name'/>
                <input type="email" name='user_email' className='user' placeholder='Email'/>
                <textarea name="message" className="user" placeholder="Message"/>
                <input type="submit" value="Send" className="button"/>
                <span>{done && 'Thank you for sending message!'}</span>
                <div
                className="blur c-blur1"
                style={{ background: "var(--purple)" }}
                ></div>
            </form>
        </div>
    </div>
    
  );
};
export default Contact;