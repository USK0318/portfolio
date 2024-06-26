import React from 'react';
import { CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHackerrank, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <CDBBox className="shadow text-center" style={{ backgroundColor: '#141417', color: 'white', marginTop: '30px' }}>
      <CDBBox display="flex" flex="column" className="mx-auto py-5 text-center" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="center" className="flex-wrap">
          <CDBBox width="100%" md="6" className="text-center">
            {/* Centered email box */}
            <CDBBox display="flex" alignItems="center" className="ms-md-3 justify-content-center">
              <CDBIcon icon="envelope" className="me-2" /> {/* Email Icon */}
              <a href="mailto:saikiranuppalapati2@gmail.com" className="h6" style={{ textDecoration: 'none', color: 'white' }}>
                saikiranuppalapati2@gmail.com
              </a>
            </CDBBox>
            {/* HackerRank, GitHub, LinkedIn, and Twitter buttons with FontAwesome icons */}
            <CDBBox display="flex" className="mt-4 justify-content-center">
              <a href="https://www.hackerrank.com/profile/uppalapatisaiki1" target="_blank" rel="noopener noreferrer">
                <CDBBtn flat color="white">
                  <FontAwesomeIcon icon={faHackerrank} />
                </CDBBtn>
              </a>
              <a href="https://github.com/USK0318" target="_blank" rel="noopener noreferrer">
                <CDBBtn flat color="white" className="mx-3">
                  <FontAwesomeIcon icon={faGithub} />
                </CDBBtn>
              </a>
              <a href="https://www.linkedin.com/in/uppalapatisaikiran/" target="_blank" rel="noopener noreferrer">
                <CDBBtn flat color="white" className="mx-3">
                  <FontAwesomeIcon icon={faLinkedin} />
                </CDBBtn>
              </a>
              <a href="##" target="_blank" rel="noopener noreferrer">
                <CDBBtn flat color="white">
                  <FontAwesomeIcon icon={faTwitter} />
                </CDBBtn>
              </a>
            </CDBBox>
            {/* Copyright text */}
            <p className="my-3 text-center" style={{ fontSize: '15px', fontWeight: 'normal' }}>
              Copyright 2024 © Uppalapati Sai Kiran - All Right Reserved
            </p>
          </CDBBox>
        </CDBBox>
      </CDBBox>
    </CDBBox>
  );
};