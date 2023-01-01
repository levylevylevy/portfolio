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
//background: #DCDCDE;
background: #E0E0E2;
box-shadow: 0px 1.5px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
padding: 24px;

`;

const CardTitle=styled.h1`
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
height: 70%;
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

<p className="font-face-body" style={{color: secondaryGold}}>  HackMIT 2022 <span style={{color: primaryBlue}}> </span></p>
<p className="font-face-subtitle" style={{color: primaryBlue}}>  GardenShare is a free online marketplace facilitating sharing garden/backyard space for growing fresh and sustainable fruits and vegetables and making community connections.</p>
<RowButtons>
<CaseStudyButton className="font-face-subtitle" style={{color: primaryBlue}}
onClick={()=> window.open("https://www.figma.com/file/5dQ4r6LEbtpGb7VHPsgoNm/HackMit-2022-Website?node-id=0%3A1&t=MZzTldvAsTBQXX2B-1", "_blank")}
>Figma</CaseStudyButton>
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