import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import myImage from '../media/home.png';
import ProjectsPage from './Project';
import ContactForm from './Contact';
import About from './About';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '80vh',
  padding: '16px',
  boxSizing: 'border-box',
});

const ContentContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  marginTop: '2vh',
  '@media (min-width: 600px)': {
    flexDirection: 'row',
  },
});

const ImageContainer = styled('div')({
  width: '60%',
  '@media (min-width: 600px)': {
    width: '35%',
    margin: '0 10px',
  },
});

const TypingContainer = styled('div')({
  marginTop: '0px',
  marginBottom: '16px',
});

const baseFontSize = '2rem';

const BoldTypography = styled(Typography)(({ theme }) => ({
  marginLeft: '20px',
  fontWeight: 'bold',
  fontSize: baseFontSize,
  [theme.breakpoints.up('sm')]: {
    fontSize: '3rem',
  },
}));

const SmallText = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  marginTop: '15px',
  lineHeight: '1.5',
}));

const GetCVButton = styled(Button)({
  marginTop: '40px',
  width: '150px',
  height: '40px',
  marginRight: '0px',
  transition: 'transform 0.2s ease-out', 
  '&:active': {
    backgroundColor: 'green', 
    transform: 'scale(0.9)',
  },
});

const downloadCV = () => {
  // Change 'path_to_cv.pdf' to the actual path of your CV
  const cvPath = 'https://drive.google.com/uc?export=download&id=1TIxQlywH1qT9VWL6D3PFyOsQh80RLn9t';
  const link = document.createElement('a');
  link.href = cvPath;
  link.download = 'https://drive.google.com/uc?export=download&id=13AKp2ZA3z2V9eV0IT85fShe0NYGxbJMZ'; // You can change the downloaded file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Home = () => {
  return (
    <div>
      <Container>
        <ContentContainer>
          <div>
            <BoldTypography variant="h1" style={{ marginBottom: '8px' }}>
              Hi, I'm Uppalapati Sai Kiran
            </BoldTypography>
            <TypingContainer>
              <BoldTypography variant="h1">
                Full Stack Developer
              </BoldTypography>
              <SmallText>
              Passionate about leveraging Python and MySQL expertise to design robust  <br></br>backend solutions,
              while crafting engaging user interfaces with ReactJS for seamless and <br></br>dynamic web experiences
              </SmallText>
              <div>
                <GetCVButton variant="contained" color="primary" onClick={downloadCV}>
                  Get CV
                </GetCVButton>
              </div>
            </TypingContainer>
          </div>
          <ImageContainer>
            <img src={myImage} alt="Home-img" style={{ width: '100%' }} />
          </ImageContainer>
        </ContentContainer>
      </Container>
      <About/>
     <ProjectsPage/>
      <h3 style={{ textAlign:"center", fontWeight:'bold' }}>Contact</h3>
      <hr style={{ width: '80%', maxWidth: '1000px', margin: 'auto' }} /><br></br>
      <ContactForm/>
    </div>
  );
};

export default Home;