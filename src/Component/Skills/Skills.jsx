import React from 'react'
import Directory from './Directory';

const Skills = () => {
    const categories  =[
        {
            id: 1,
            title: 'Programming Languages',
            urlImage:'https://vigors.de/images/skills/other-applications.jpg'
        },
        {
            id: 2,
            title: 'Front-end & Frameworks',
            urlImage:'https://miro.medium.com/max/1400/0*dl6DnA8iMAYSVt2O.png'
        }
        ,
        {
            id: 3,
            title: 'Database',
            urlImage:'https://png.pngtree.com/png-clipart/20190516/original/pngtree-2-5d-technology-internet-server-storage-database-5dtechnologythe-internetserverstoragedatadatabasedata-transmissionbase-png-image_4027940.jpg'
        },
        {
            id: 4,
            title: 'Operating System',
            urlImage:'https://kobaltsolutions.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-11-at-2.21.22-PM-1024x577.png'
        },
        {
            id: 5,
            title: 'Mobile Application',
            urlImage:'https://www.nicepng.com/png/full/249-2491704_we-are-able-to-offer-mobile-application-development.png'
        },
        {
            id: 6,
            title: 'Data Analysis',
            urlImage:'https://png.pngtree.com/png-clipart/20190920/original/pngtree-blue-creative-technology-data-analysis-element-png-image_4669233.jpg'
        },
        {
            id: 7,
            title: 'IDE',
            urlImage:'https://ak.picdn.net/shutterstock/videos/26132261/thumb/1.jpg'
        },
        {
            id: 8,
            title: 'Other Applications',
            urlImage:'http://www.activatedcarbon.com.au/images/4_other-applications-square.png'
        }   
    ];  
  return <Directory categories={categories} />;
};
export default Skills;