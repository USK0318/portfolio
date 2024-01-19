import React from 'react';
import { CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
              <span className="h6">saikiranuppalapati2@gmail.com</span>
            </CDBBox>
            {/* HackerRank, GitHub, LinkedIn, and Twitter buttons with FontAwesome icons */}
            <CDBBox display="flex" className="mt-4 justify-content-center">
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <CDBBtn flat color="white">
                  <FontAwesomeIcon icon={faHackerrank} />
                </CDBBtn>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <CDBBtn flat color="white" className="mx-3">
                  <FontAwesomeIcon icon={faGithub} />
                </CDBBtn>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <CDBBtn flat color="white" className="mx-3">
                  <FontAwesomeIcon icon={faLinkedin} />
                </CDBBtn>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
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
