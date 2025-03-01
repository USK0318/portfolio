import React from 'react';
import sai from '../media/passport photo.jpeg';
import Git from './Git';
import ChatIcon from '@mui/icons-material/Chat';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import GitIcon from './Git'; // Assuming you have a custom Git icon component


const About = () => {

  return (
    <div>
      <h3 style={{ textAlign: "center", fontWeight: 'bold' }} id="about">A Bit About Me</h3>
      <hr style={{ width: '80%', maxWidth: '1000px', margin: 'auto' }} /><br></br>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          {/* Add a border to the image without a full frame */}
          <div
            style={{
              border: '4px dotted lightblue', // Adjust the color as needed
              borderRadius: '2px',
              padding: '5px',
              margin: '10px',
              order: '1', // Keep the order 1 for desktop view
            }}
          >
            <img
              src={sai}
              alt='sai'
              style={{
                width: '100%', // Make the image width 100% of its container
                maxWidth: '550px', // Limit the maximum width to 550px
                margin: '1px',
              }}
            />
          </div>

          <div
            style={{
              margin: '20px',
              textAlign: 'center',
              order: '2', // Keep the order 2 for desktop view
            }}
          >
            <p style={{ fontSize: '1.2rem' }}>
              I'm a Node.js developer with 1.9 years of experience in web and mobile app development. I currently work at Mtouch Labs, where I design and develop scalable backend solutions and interactive user interfaces.
            </p>
            <p style={{ fontSize: '1.2rem' }}>
              I'm a highly motivated and results-oriented individual, always eager to improve my skills and take on new challenges. I thrive in team environments and collaborate effectively to achieve common goals.
            </p>
            <p style={{ fontSize: '1.2rem' }}>
              I'm excited to continue growing as a Node.js developer and contribute to innovative projects. I'm also open to learning new technologies and expanding my expertise in the field.
            </p>
            <h2 style={{
              marginTop: '30px',
              textAlign: 'center',
              fontWeight: 'bold',
              margin: '20px 0',
            }}>My core tools and technologies</h2>
            <ul
              style={{
                listStyleType: 'none',
                padding: 0,
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <div style={{ background: '#306998', borderRadius: '50%', padding: '10px', margin: '10px' }}>
                <li><i className="fab fa-python fa-3x"></i> </li>
              </div>
              <div style={{ background: '#000', borderRadius: '50%', padding: '10px', margin: '10px' }}>
                <li><i className="fab fa-node-js fa-3x" style={{ color: '#fff' }}></i></li>
              </div>

              <div style={{ background: '#316192', borderRadius: '50%', padding: '10px', margin: '10px' }}>
                <li><i className="fas fa-database fa-3x"></i> </li>
              </div>
              <div style={{ background: 'green', borderRadius: '50%', padding: '10px', margin: '10px', color: '#fff' }}>
                <li><b>MongoDB</b></li>
              </div>

              <div style={{ background: '#1572B6', borderRadius: '50%', padding: '10px', margin: '10px', fontSize: '150%' }}>
                <li><b>Django</b></li>
              </div>

              <div style={{ background: '#61DAFB', borderRadius: '50%', padding: '10px', margin: '10px' }}>
                <li><i className="fab fa-react fa-3x"></i></li>
              </div>

              <div style={{ background: '#E44D26', borderRadius: '50%', padding: '10px', margin: '10px' }}>
                <li><i className="fab fa-html5 fa-3x"></i> </li>
              </div>

              <div style={{ background: '#1572B6', borderRadius: '50%', padding: '10px', margin: '10px' }}>
                <li><i className="fab fa-css3-alt fa-3x"></i> </li>
              </div>
              <div style={{ background: '#7952B3', borderRadius: '50%', padding: '10px', margin: '10px' }}>
                <li><i className="fab fa-bootstrap fa-3x" style={{ color: '#fff' }}></i></li>
              </div>
              <div style={{ background: '#61DAFB', borderRadius: '50%', padding: '10px', margin: '10px', fontSize: '150%' }}>
                <li><b>MUI</b></li>
              </div>
              <div style={{ background: '#F0DB4F', borderRadius: '50%', padding: '10px', margin: '10px' }}>
                <li><i className="fab fa-js fa-3x"></i> </li>
              </div>

              <div style={{ background: '#000', borderRadius: '50%', padding: '10px', margin: '10px' }}>
                <li><i className="fab fa-github fa-3x" style={{ color: '#fff' }}></i></li>
              </div>

              <div style={{ background: '#F1502F', borderRadius: '50%', padding: '10px', margin: '10px' }}>
                <li><i className="fab fa-git fa-3x" style={{ color: '#fff' }}></i></li>
              </div>

              <div style={{ background: '#4285F4', borderRadius: '50%', padding: '10px', margin: '10px' }}>
                <li><i title='Google ads' className="fab fa-google fa-3x" style={{ color: '#fff' }}></i></li>
              </div>
              <div style={{ background: 'green', borderRadius: '50%', padding: '10px', margin: '10px', fontSize: '150%' }}>
                <li><b>Open Ai </b></li>
              </div>
              <div style={{ background: '#24292E', borderRadius: '50%', padding: '10px', margin: '10px' }}>
                <li><i title='Git Copilot' className="fab fa-github-alt fa-3x" style={{ color: '#fff' }}></i></li>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              </div>

            </ul>
          </div>
        </div>

        {/* ... (rest of the content) ... */}
      </div>
      <h2 style={{ textAlign: "center", fontWeight: 'bold' }}>My Git Profile</h2>
      <a href="https://github.com/USK0318" style={{ textAlign: "center", textDecoration: 'none' }}><Git username='USK0318' /> </a>
    </div>
  );
};

export default About;
