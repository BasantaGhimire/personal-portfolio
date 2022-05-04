import React from 'react'
import Subject from './Subject'
import './Directory.css'

const Directory = ({categories}) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <Subject key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;