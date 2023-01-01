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

const RowButtons = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
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

  class AIScoopCard extends Component {
    render() {
      return (
        <>
  <CardContainers>
      <ProjectCard>
        <Row>
<Col>
<CardTitle className="font-face-header1" style={{color: primaryBlue}}>  The AI Scoop</CardTitle>

<p className="font-face-body" style={{color: secondaryGold}}>  HackMIT 2021, Microsoft Challenge 2nd Place  <span style={{color: primaryBlue}}> </span></p>
<p className="font-face-subtitle" style={{color: primaryBlue}}>  The AI Scoop is a revolutionary educational ai-powered service allowing anyone — parents, teachers, even kids — to create a kids magazine 100% automatically from ANY article link!</p>
<RowButtons>
<CaseStudyButton className="font-face-subtitle" style={{color: primaryBlue}}
onClick={()=> window.open("https://github.com/vasuz/ai-scoop", "_blank")}
>Github</CaseStudyButton>
<CaseStudyButton className="font-face-subtitle" style={{color: primaryBlue}}
onClick={()=> window.open("https://youtu.be/ESZJUNBE8Hc", "_blank")}
>Walkthrough Video</CaseStudyButton>
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