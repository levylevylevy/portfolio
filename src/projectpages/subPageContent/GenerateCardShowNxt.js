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

  class GenerateCardsShowNxt extends Component {
    render() {
      return (
        <>
  <CardContainers>
      <ProjectCard>
        <Row>
<Col>
<CardTitle className="font-face-header1" style={{color: primaryBlue}}>  ShowNxt</CardTitle>

<div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8, marginBottom: 4 }}>
  <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(28,25,23,0.06)", borderRadius: 100, padding: "3px 10px", fontSize: 11, fontWeight: 600, color: "#3D3530", letterSpacing: "0.03em" }}>Design Lead</span>
  <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(28,25,23,0.06)", borderRadius: 100, padding: "3px 10px", fontSize: 11, fontWeight: 600, color: "#3D3530", letterSpacing: "0.03em" }}>Figma · Jira</span>
  <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(28,25,23,0.06)", borderRadius: 100, padding: "3px 10px", fontSize: 11, fontWeight: 600, color: "#3D3530", letterSpacing: "0.03em" }}>Generate Studio · 2022</span>
</div>
<p className="font-face-subtitle" style={{color: primaryBlue, marginTop: 6}}>  A mobile/web app to connect under-served athletes with college sports recruiters.</p>
<CardButton href="https://www.figma.com/file/Q9XuR02L0djGdGgvDcTcyA/ShowNxt-UX%2FUI-(Handoff)?node-id=3%3A17&t=iVzq0S2xbpq9mad9-1" target="_blank" rel="noopener noreferrer" variant="outline">Figma ↗</CardButton>

</Col>
<ExamplePhoto src={require('../../../src/images/shownxt-home-betterquality.png')} />
</Row>
        </ProjectCard>
        
     
      
    </CardContainers>
    </>
      );
    }}

    export default GenerateCardsShowNxt;