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
width: 130px;
min-height: 260px;
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
`;

  class GenerateCardSolon extends Component {
    render() {
      return (
        <>
  <CardContainers>
      <ProjectCard>
        <Row>
<Col>
<CardTitle className="font-face-header1" style={{color: primaryBlue}}>  Solon</CardTitle>

<p className="font-face-body" style={{color: secondaryGold}}>  Product Designer <span style={{color: primaryBlue}}> - Figma - 3D Prototype - User Research
Generate Product Development Studio, 2021</span></p>
<p className="font-face-subtitle" style={{color: primaryBlue}}>  A cryptocurrency wallet that offers a unique user interaction experience, combining a screen UI and a physical device with buttons.</p>
{/* <CaseStudyButton className="font-face-subtitle" style={{color: primaryBlue}}>Read Case Study</CaseStudyButton> */}
</Col>
<ExamplePhoto src={require('../../../src/images/solonprototype.png')} />
</Row>
        </ProjectCard>
        
     
      
    </CardContainers>
    </>
      );
    }}

    export default GenerateCardSolon;