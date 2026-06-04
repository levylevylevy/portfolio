//Generate Tiliti card
import React, { Component } from "react";
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
import CardButton from '../../components/ui/CardButton.js'

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
height: 265px;
background: #FAF8F5;
box-shadow: 0px 1.5px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
padding: 24px;

@media (max-width: 768px) {
  position: relative;
  width: 100%;
  height: auto;
  box-sizing: border-box;
}
`;

const CardTitle=styled.h1`
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

const RowButtons = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
`;

const ExamplePhoto = styled.img`
display: flex;
height: 70%;

@media (max-width: 768px) {
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

  class AIScoopCard extends Component {
    render() {
      return (
        <>
  <CardContainers>
      <ProjectCard>
        <Row>
<Col>
<CardTitle className="font-face-header1" style={{color: primaryBlue}}>  The AI Scoop</CardTitle>

<div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 6, marginBottom: 4 }}>
  <span style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "#FEF3C7", border: "1px solid #FDE68A", borderRadius: 100, padding: "3px 10px", fontSize: 11, fontWeight: 700, color: "#92400E", letterSpacing: "0.04em" }}>2nd Place · Microsoft Challenge @ HackMIT 2021</span>
</div>
<p className="font-face-subtitle" style={{color: primaryBlue, marginTop: 6}}>  An AI-powered service that auto-generates a kids magazine from any article link — for parents, teachers, and kids.</p>
<RowButtons>
<CardButton href="https://github.com/vasuz/ai-scoop" target="_blank" rel="noopener noreferrer" variant="outline">GitHub ↗</CardButton>
<CardButton href="https://youtu.be/ESZJUNBE8Hc" target="_blank" rel="noopener noreferrer" variant="outline">Walkthrough ↗</CardButton>
</RowButtons>
</Col>
<ExamplePhoto src={require('../../../src/images/aiscoopcoverphoto.png')} />
</Row>
        </ProjectCard>
        
     
      
    </CardContainers>
    </>
      );
    }}

    export default AIScoopCard;