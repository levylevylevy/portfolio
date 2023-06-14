//Generate Tiliti card
import React, { Component } from "react";
import { useState } from 'react';
import Popup from "../caseStudyContent/Popup.js";
import '../caseStudyContent/style.css';
import HareOfRuinCaseStudy from '../caseStudyContent/HareOfRuinCaseStudy'

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
min-height: 265px;
height: 100%;
max-height: 313px;
display:flex;
flex-direction: row;
flex-wrap: wrap;
//background: #DCDCDE;
justify-content: left;
background: #E0E0E2;
box-shadow: 0px 1.5px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
padding: 24px;

`;

const CardTitle = styled.h1`
display: flex;
flex-direction: column;
margin-top: 32px;
margin-bottom: -14px;

`;
const Col = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: -50px;
`;

const Row = styled.div`
display: flex;
flex-direction: row;
gap: 78px;
height: 260px;
`;

const ExamplePhoto = styled.img`
display: flex;
// width: 500px;
min-height: 300px;
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
`;

const RowButtons = styled.div`
display: flex;
flex-wrap: wrap;
flex: 2 0 auto;
flex-direction: row;
overflow-x:auto;
gap: 20px;
`;


function HareOfRuinCard() {

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
              <CardTitle className="font-face-header1" style={{ color: primaryBlue }}> Hare Of Ruin</CardTitle>

              <p className="font-face-body" style={{ color: secondaryGold }}>  Game Programmer/Designer/Writer  <span style={{ color: primaryBlue }}> - Unity - C# - Photoshop -
                Game Programming Course, 2023</span></p>
              <p className="font-face-subtitle" style={{ color: primaryBlue }}>  A 3D 1-player action-RPG game developed with Unity in a team of 4.</p>
              <RowButtons>
              <CaseStudyButton onClick={togglePopup} className="font-face-subtitle" style={{ color: primaryBlue }}>Read Case Study</CaseStudyButton>
              {/* <CaseStudyButton className="font-face-subtitle" style={{color: primaryBlue}}>Read Case Study</CaseStudyButton> */}
              {isOpen && <Popup
                content={<>
                <HareOfRuinCaseStudy/>
                </>}
                handleClose={togglePopup}
              />}
<CaseStudyButton className="font-face-subtitle" style={{color: primaryBlue}}
onClick={()=> window.open("https://github.com/aidancapaldi/HareOfRuinPrototype", "_blank")}
>Github</CaseStudyButton>
<CaseStudyButton className="font-face-subtitle" style={{color: primaryBlue}}
onClick={()=> window.open("https://youtu.be/iyV6Rw5sG1o", "_blank")}
>Demo Video</CaseStudyButton>
<CaseStudyButton className="font-face-subtitle" style={{color: primaryBlue}}
onClick={()=> window.open("https://play.unity.com/mg/other/webgl-builds-336086", "_blank")}
>Play Game</CaseStudyButton>
</RowButtons>
            </Col>
            <ExamplePhoto src={require('../../../src/images/harry-rabbit-illustration.png')} />
          </Row>
        </ProjectCard>
       


      </CardContainers>
    </>
  );
}

export default HareOfRuinCard;