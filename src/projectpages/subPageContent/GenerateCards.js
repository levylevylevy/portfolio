//Generate Tiliti card
import React, { Component } from "react";
import { useState } from 'react';
import Popup from "../caseStudyContent/Popup.js";
import '../caseStudyContent/style.css';
import TilitiCaseStudy from '../caseStudyContent/tilitiCaseStudy'

import Projects from '../../Projects.js'
import {
  Link,
  Route,
  Routes,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import styled from "styled-components";
import { primaryBlue, secondaryGold, backgroundColorMain, unselectedBlue, selectedButtonText } from "../../colors.js";
import ScrollButton from "../../ScrollButton.js";

const RowContents = styled.div`
display: flex;
justify-content: space-around;
overflowY: scroll;
`;

const CenterContents = styled.div`
display: flex;
flex-direction: row;
margin-top: 30px;
`;

const CardContainers = styled.div`
display: block;
`;

const ProjectCard = styled.div`

position: absolute; 
width: 641px;
height: 265px;
//background: #C8C9C3;
background: #FAF8F5;
box-shadow: 0px 1.5px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
padding: 24px;

@media (max-width: 968px) {
  width: 90%;
  max-width: 550px;
  height: auto;
  min-height: 265px;
}

@media (max-width: 768px) {
  width: 85%;
  padding: 20px;
}

@media (max-width: 480px) {
  width: 90%;
  padding: 16px;
}

`;

const CardTitle = styled.h1`
display: flex;
flex-direction: column;
margin-top: 32px;
margin-bottom: -14px;

@media (max-width: 768px) {
  margin-top: 20px;
  margin-bottom: -10px;
}

@media (max-width: 480px) {
  margin-top: 15px;
  margin-bottom: -8px;
}

`;
const Col = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: -50px;

@media (max-width: 768px) {
  margin-top: -30px;
  width: 100%;
}

@media (max-width: 480px) {
  margin-top: -20px;
}
`;

const Row = styled.div`
display: flex;
flex-direction: row;
gap: 78px;
height: 260px;

@media (max-width: 768px) {
  flex-direction: column;
  gap: 20px;
  height: auto;
}

@media (max-width: 480px) {
  gap: 15px;
}
`;

const ExamplePhoto = styled.img`
display: flex;
width: 130px;
min-height: 260px;

@media (max-width: 768px) {
  width: 100%;
  max-width: 200px;
  min-height: auto;
  height: auto;
  align-self: center;
}

@media (max-width: 480px) {
  max-width: 150px;
}
`;

const CaseStudyButton = styled.div`
  width: 169px;
  height: 42px;
  border: 1px solid ${primaryBlue};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${backgroundColorMain};
  cursor: pointer;
  
  @media (max-width: 480px) {
    width: 140px;
    height: 38px;
    font-size: 14px;
  }
`;



function GenerateCards() {

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <CardContainers>
        <ProjectCard>
          <Row>
            <Col>
              <CardTitle className="font-face-header1" style={{ color: primaryBlue }}>  TILITI</CardTitle>

              <p className="font-face-body" style={{ color: secondaryGold }}>  UI/UX Designer  <span style={{ color: primaryBlue }}> - Figma - Adobe Illustrator - After Effects
                Generate Product Development Studio, 2021</span></p>
              <p className="font-face-subtitle" style={{ color: primaryBlue }}>  A mobile app to help small business owners in India transport their goods on the Tiliti startup’s sustainable e-bike.</p>
              <CaseStudyButton onClick={togglePopup} className="font-face-subtitle" style={{ color: primaryBlue }}>Read Case Study</CaseStudyButton>
              {/* <CaseStudyButton className="font-face-subtitle" style={{color: primaryBlue}}>Read Case Study</CaseStudyButton> */}
              {isOpen && <Popup
                content={<>
                <TilitiCaseStudy/>
                </>}
                handleClose={togglePopup}
              />}
            </Col>
            <ExamplePhoto src={require('../../../src/images/tiliti-home-betterquality.png')} />
          </Row>
        </ProjectCard>
       


      </CardContainers>
    </>
  );
}

export default GenerateCards;