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
width: 130px;
min-height: 260px;

@media (max-width: 768px) {
  width: 100%;
  max-width: 200px;
  min-height: auto;
  height: auto;
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

  class VolunteerGoCard extends Component {
    render() {
      return (
        <>
  <CardContainers>
      <ProjectCard>
        <Row>
<Col>
<CardTitle className="font-face-header1" style={{color: primaryBlue}}>  Volunteer GO</CardTitle>

<div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 6, marginBottom: 4 }}>
  <span style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "#FEF3C7", border: "1px solid #FDE68A", borderRadius: 100, padding: "3px 10px", fontSize: 11, fontWeight: 700, color: "#92400E", letterSpacing: "0.04em" }}>Top 5 · HackBeanpot 2020</span>
  <span style={{ display: "inline-flex", alignItems: "center", background: "#FEF3C7", border: "1px solid #FDE68A", borderRadius: 100, padding: "3px 10px", fontSize: 11, fontWeight: 700, color: "#92400E", letterSpacing: "0.04em" }}>"Most Likely to Make Money" Prize</span>
</div>
<p className="font-face-subtitle" style={{color: primaryBlue, marginTop: 6}}>  A smartphone app that combines gaming with real world volunteer work.</p>
<CardButton href="https://devpost.com/software/volunteer-go" target="_blank" rel="noopener noreferrer" variant="outline">Devpost ↗</CardButton>

</Col>
<ExamplePhoto src={require('../../../src/images/volunteergohomepagequality.png')} />
</Row>
        </ProjectCard>
        
     
      
    </CardContainers>
    </>
      );
    }}

    export default VolunteerGoCard;