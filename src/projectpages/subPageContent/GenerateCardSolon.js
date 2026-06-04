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
background: #FAF8F5;
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

<div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8, marginBottom: 4 }}>
  <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(28,25,23,0.06)", borderRadius: 100, padding: "3px 10px", fontSize: 11, fontWeight: 600, color: "#3D3530", letterSpacing: "0.03em" }}>Product Design</span>
  <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(28,25,23,0.06)", borderRadius: 100, padding: "3px 10px", fontSize: 11, fontWeight: 600, color: "#3D3530", letterSpacing: "0.03em" }}>Figma · 3D Prototype</span>
  <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(28,25,23,0.06)", borderRadius: 100, padding: "3px 10px", fontSize: 11, fontWeight: 600, color: "#3D3530", letterSpacing: "0.03em" }}>Generate Studio · 2021</span>
</div>
<p className="font-face-subtitle" style={{color: primaryBlue, marginTop: 6}}>  A crypto wallet combining a digital screen UI with a physical 3D-printed device.</p>
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