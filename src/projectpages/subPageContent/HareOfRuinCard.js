//Generate Tiliti card
import React, { Component } from "react";
import { useState } from 'react';
import CaseStudyModal from "../caseStudyContent/CaseStudyModal.js";
import HareOfRuinCaseStudy from '../caseStudyContent/HareOfRuinCaseStudy'
import CardButton from '../../components/ui/CardButton.js'

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

@media (max-width: 768px) {
  width: 100%;
  height: auto;
}
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
background: #FAF8F5;
box-shadow: 0px 1.5px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
padding: 24px;

@media (max-width: 768px) {
  position: relative;
  width: 100%;
  height: auto;
  max-height: none;
  box-sizing: border-box;
}
`;

const CardTitle = styled.h1`
display: flex;
flex-direction: column;
margin-top: 32px;
margin-bottom: -14px;

@media (max-width: 768px) {
  margin-top: 8px;
  margin-bottom: 0;
}
`;
const Col = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: -50px;

@media (max-width: 768px) {
  margin-top: 0;
  width: 100%;
}
`;

const Row = styled.div`
display: flex;
flex-direction: row;
gap: 78px;
height: 260px;

@media (max-width: 768px) {
  flex-direction: column;
  gap: 16px;
  height: auto;
}
`;

const ExamplePhoto = styled.img`
display: flex;
// width: 500px;
min-height: 300px;

@media (max-width: 768px) {
  min-height: auto;
  height: auto;
  width: 100%;
  max-width: 200px;
  align-self: center;
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

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8, marginBottom: 4 }}>
                <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(28,25,23,0.06)", borderRadius: 100, padding: "3px 10px", fontSize: 11, fontWeight: 600, color: "#3D3530", letterSpacing: "0.03em" }}>Game Dev · Unity · C#</span>
                <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(28,25,23,0.06)", borderRadius: 100, padding: "3px 10px", fontSize: 11, fontWeight: 600, color: "#3D3530", letterSpacing: "0.03em" }}>UI Design · Photoshop</span>
                <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(28,25,23,0.06)", borderRadius: 100, padding: "3px 10px", fontSize: 11, fontWeight: 600, color: "#3D3530", letterSpacing: "0.03em" }}>2023</span>
              </div>
              <p className="font-face-subtitle" style={{ color: primaryBlue, marginTop: 6 }}>  A 3D 1-player action-RPG game developed with Unity in a team of 4.</p>
              <RowButtons>
              <CardButton onClick={togglePopup} variant="primary">Read Case Study</CardButton>
              <CaseStudyModal isOpen={isOpen} onClose={togglePopup}>
                <HareOfRuinCaseStudy />
              </CaseStudyModal>
              <CardButton href="https://github.com/aidancapaldi/HareOfRuinPrototype" target="_blank" rel="noopener noreferrer" variant="outline">GitHub ↗</CardButton>
              <CardButton href="https://youtu.be/iyV6Rw5sG1o" target="_blank" rel="noopener noreferrer" variant="outline">Demo ↗</CardButton>
              <CardButton href="https://play.unity.com/mg/other/webgl-builds-336086" target="_blank" rel="noopener noreferrer" variant="outline">Play Game ↗</CardButton>
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