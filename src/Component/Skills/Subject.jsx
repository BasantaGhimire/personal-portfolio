import React from "react";
import './Subject.css'


const Subject=({category})=>{
    const {urlImage,title}=category;
    return(
        <div className='category-container'>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${urlImage})`,
                }}
            />
            <div className='category-body-container'>
                <h2>{title}</h2>
              
            </div>
        </div>
    );
};
export default Subject;