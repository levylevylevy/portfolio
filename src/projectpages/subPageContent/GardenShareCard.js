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

const RowButtons = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
`;
  class GardenShareCard extends Component {
    render() {
      return (
        <>
  <CardContainers>
      <ProjectCard>
        <Row>
<Col>
<CardTitle className="font-face-header1" style={{color: primaryBlue}}>  GardenShare</CardTitle>

<div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 6, marginBottom: 4 }}>
  <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(28,25,23,0.06)", borderRadius: 100, padding: "3px 10px", fontSize: 11, fontWeight: 600, color: "#3D3530", letterSpacing: "0.03em" }}>HackMIT 2022</span>
</div>
<p className="font-face-subtitle" style={{color: primaryBlue, marginTop: 6}}>  A free marketplace for sharing garden space to grow fresh, sustainable produce and build community connections.</p>
<RowButtons>
<CardButton href="https://www.figma.com/file/5dQ4r6LEbtpGb7VHPsgoNm/HackMit-2022-Website?node-id=0%3A1&t=MZzTldvAsTBQXX2B-1" target="_blank" rel="noopener noreferrer" variant="outline">Figma ↗</CardButton>
</RowButtons>
</Col>
<ExamplePhoto src={require('../../../src/images/gardensharehomesmaller.png')} />
</Row>
        </ProjectCard>
        
      
    </CardContainers>
    </>
      );
    }}

    export default GardenShareCard;