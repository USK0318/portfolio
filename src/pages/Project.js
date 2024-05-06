// ProjectsPage.js
import React from 'react';
import appleVideo from '../media/foodie.mp4';
import bike from '../media/bike.mp4'; 
import crm from '../media/crm.mp4';
import DE from '../media/DE.mp4';
import djangoecomers from '../media/djengo-ecomers.mp4';
import reactcrud from '../media/Dashbords.mp4'
import shateme from '../media/shareme.mp4'

const boldTitleStyle = {
  margin: '10px',
  fontWeight: 'bold',
  textAlign: 'center',
};

const ProjectsPage = () => {
  const isMobile = window.innerWidth <= 600;

  const Project = ({ title, description, video, githubPath }) => {
    const projectCardStyle = {
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      margin: '10px',
      overflow: 'hidden',
      width: isMobile ? '85%' : 'calc(33.33% - 20px)',
      maxWidth: '500px',
      height: '300px',
      backgroundColor: '#F5F5F5',
      cursor: 'pointer',
    };

    const projectVideoStyle = {
      width: '100%',
      height: isMobile ? '80%' : '110%',
      objectFit: 'cover',
    };

    const mobileCardStyle = {
      width: '85%',
      maxWidth: 'none',
    };

    const mobileVideoStyle = {
      height: '99%',
    };

    const mobileStyles = {
      ...projectCardStyle,
      ...mobileCardStyle,
      video: {
        ...projectVideoStyle,
        ...mobileVideoStyle,
      },
    };

    const handleVideoClick = () => {
      // Navigate to the respective GitHub path when the video is clicked
      window.location.href = githubPath;
    };

    return (
      <div style={isMobile ? mobileStyles : projectCardStyle} onClick={handleVideoClick}>
        <video autoPlay muted loop style={isMobile ? { ...projectVideoStyle, ...mobileVideoStyle } : projectVideoStyle}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={{ padding: '10px', flex: 1 }}>
          <h5 style={{ fontWeight: 'bold' }}>{title}</h5>
          <p style={{ fontSize: '14px' }}>{description}</p>
        </div>
      </div>
    );
  };

  const projectsData = [
    {
      title: 'Foddie App',
      description: 'A food app that helps you find the best food in your area.',
      video: appleVideo,
      githubPath: 'https://github.com/USK0318/foodie', 
    },
    {
      title: 'Bike website',
      description: 'This is a bike showroom website.',
      video: bike,
      githubPath: 'https://github.com/Pavani-Developer/Project-1', 
    },
    {
      title: 'CRM system',
      description: 'CRM system for managing the customer data for an education instute.',
      video: crm,
      githubPath: 'https://github.com/Pavani-Developer/CRM-FRONTEND2/tree/master', 
    },
    {
      title: 'Data Extraction',
      description: 'We extrect data from PDFs in to Excal',
      video: DE,
      githubPath: '', 
    },
    {
      title: 'Django Ecommerce',
      description: 'Ecommerce website using Django and MySQL.',
      video: djangoecomers ,
      githubPath: 'https://github.com/USK0318/ecomers-Django', 
    },
    {
      title: 'Basic CRUD operation using React',
      description: 'This is a basic CRUD operation using React.',
      video: reactcrud ,
      githubPath: 'https://github.com/USK0318/React-CRUD-Operations.git',
    },
    {
      title: 'Send Anywhere Clone',
      description: 'This is a clone of Send Anywhere app using Django',
      video: shateme ,
      githubPath: 'https://github.com/USK0318/sendanywhere-Django.git', 
    },
    
  ];

  return (
    <div>
      <header>
        <h3 style={boldTitleStyle}>Featured Projects</h3>
        <p style={boldTitleStyle}>Some Projects I have worked on</p>
        <hr style={{ width: '90%', maxWidth: '1000px', margin: 'auto' }} />
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
          <Project key={index} {...project} />
        ))}
      </section>
    </div>
  );
}

export default ProjectsPage;
