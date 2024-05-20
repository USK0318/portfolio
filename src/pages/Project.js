// ProjectsPage.js
import React from 'react';
import appleVideo from '../media/foodie.mp4';
import bike from '../media/bike.mp4'; 
import crm from '../media/crm.mp4';
import DE from '../media/DE.mp4';
import djangoecomers from '../media/djengo-ecomers.mp4';
import reactcrud from '../media/Dashbords.mp4';
import shateme from '../media/shareme.mp4';
import jobportal from '../media/jobportal.mp4';

import Button from '@mui/material/Button';
import CodeIcon from '@mui/icons-material/Code';

const boldTitleStyle = {
  margin: '10px',
  fontWeight: 'bold',
  textAlign: 'center',
};

const ProjectsPage = () => {
  const isMobile = window.innerWidth <= 600;

  const Project = ({ title, description, video, githubPath, live }) => {
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
      backgroundColor: '#F5F5F5',
      cursor: 'pointer',
    };

    const projectVideoStyle = {
      width: '100%',
      height: isMobile ? '50%' : '60%',
      objectFit: 'cover',
    };

    const mobileCardStyle = {
      width: '85%',
      maxWidth: 'none',
    };

    const mobileVideoStyle = {
      height: '50%',
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
      // Navigate to the respective live URL when the video is clicked
      if (live) {
        window.location.href = live;
      }
    };

    const handleButtonClick = (event) => {
      event.stopPropagation(); // Prevent triggering the video click
      if (githubPath) {
        window.location.href = githubPath;
      }
    };

    return (
      <div style={isMobile ? mobileStyles : projectCardStyle} onClick={handleVideoClick}>
        <video autoPlay muted loop style={isMobile ? { ...projectVideoStyle, ...mobileVideoStyle } : projectVideoStyle}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={{ padding: '10px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h5 style={{ fontWeight: 'bold' }}>{title}</h5>
          <p style={{ fontSize: '14px', flexGrow: 1 }}>{description}</p>
          <Button 
            onClick={handleButtonClick}
            variant="contained"
            color="primary"
            startIcon={<CodeIcon />}
            style={{
              fontSize: '10px',
              marginTop: '10px',
              alignSelf: 'flex-end',
            }}
          >
            Show Code
          </Button>
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
      live: 'https://foodie-reactjs.netlify.app/',
    },
    {
      title: 'Bike website',
      description: 'This is a bike showroom website with react js.',
      video: bike,
      githubPath: 'https://github.com/USK0318/BookBike', 
      live: 'https://bookbike.netlify.app/',
    },
    {
      title: 'CRM system',
      description: 'CRM system for managing the customer data for an education instute.',
      video: crm,
      githubPath: 'https://github.com/Pavani-Developer/CRM-FRONTEND2/tree/master', 
      live: 'https://crm-frontend2.netlify.app/',
    },
    {
      title: 'Data Extraction',
      description: 'We extract data from PDFs into Excel',
      video: DE,
      githubPath: '', 
      live: '',
    },
    {
      title: 'Django Ecommerce',
      description: 'Ecommerce website using Django and MySQL.',
      video: djangoecomers,
      githubPath: 'https://github.com/USK0318/ecomers-Django', 
      live: 'https://ecomers-djang.herokuapp.com/',
    },
    {
      title: 'Job Portal',
      description: 'A simple Job Portal using React js.',
      video: jobportal,
      githubPath: 'https://github.com/USK0318/Job-Portal-React',
      live: 'https://jobportal-reactjs-django.netlify.app/',
    },
    {
      title: 'Basic CRUD operation using React Django',
      description: "This is a basic CRUD operation using React and Django API's.",
      video: reactcrud,
      githubPath: 'https://github.com/USK0318/React-CRUD-Operations.git',
      live: 'https://react-crud-operations.herokuapp.com/',
    },
    {
      title: 'Send Anywhere Clone',
      description: 'This is a clone of Send Anywhere app using Django',
      video: shateme,
      githubPath: 'https://github.com/USK0318/sendanywhere-Django.git', 
      live: 'https://sendanywhere-django.herokuapp.com/',
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
