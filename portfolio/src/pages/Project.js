// ProjectsPage.js
import React from 'react';
import appleImage from '../media/django.png';
import mysqlImage from '../media/mysql.png';

const projectCardStyle = {
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  margin: '10px', // Adjust margin for better spacing
  overflow: 'hidden',
  width: 'calc(33.33% - 20px)', // 20px is the combined margin (10px on each side)
  maxWidth: '500px',
  height: '300px',
};

const projectImageStyle = {
  width: '100%',
  height: '70%',
  objectFit: 'cover',
};

const projectDetailsStyle = {
  padding: '10px',
  flex: 1,
};

const boldTitleStyle = {
  margin: '10px',
  fontWeight: 'bold',
  textAlign: 'center',
};

const mobileCardStyle = {
  width: '85%', // Set the width to 100% for mobile view
  maxWidth: 'none', // Remove the maximum width restriction
};

const mobileImageStyle = {
  height: '50%', // Adjust the image height for better mobile view
};

const mobileStyles = {
  ...projectCardStyle,
  ...mobileCardStyle,
  [projectImageStyle]: {
    ...projectImageStyle,
    ...mobileImageStyle,
  },
};

const Project = ({ title, description, image, isMobile }) => (
  <div style={isMobile ? mobileStyles : projectCardStyle}>
    <img src={image} alt={title} style={projectImageStyle} />
    <div style={projectDetailsStyle}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

const projectsData = [
  {
    title: 'apple',
    description: 'i am apple',
    image: appleImage,
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2.',
    image: mysqlImage,
  },
  {
    title: 'apple',
    description: 'i am apple',
    image: appleImage,
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2.',
    image: mysqlImage,
  },
  {
    title: 'apple',
    description: 'i am apple',
    image: appleImage,
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2.',
    image: mysqlImage,
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2.',
    image: mysqlImage,
  },
];

const ProjectsPage = () => {
  const isMobile = window.innerWidth <= 600; // Set your breakpoint here

  return (
    <div>
      <header>
        <h3 style={boldTitleStyle}>Featured Projects</h3>
        <p style={boldTitleStyle}>Some Projects I have worked on</p>
        <hr style={{ width: '80%', maxWidth: '1000px', margin: 'auto' }} />
      </header>
      <section style={{ 
        display: 'flex', 
        justifyContent: 'space-around', 
        alignItems: 'flex-start', 
        flexWrap: 'wrap', 
        maxWidth: '1300px', 
        margin: '40px auto' 
      }}>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} isMobile={isMobile} />
        ))}
      </section>
    </div>
  );
}

export default ProjectsPage;
