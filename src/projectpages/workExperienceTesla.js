import React, { Component } from "react";
import Projects from '../Projects.js'
import {
    Link,
    Route,
    Routes,
    NavLink,
    BrowserRouter
  } from "react-router-dom";
  import styled from "styled-components";
  import { primaryBlue, secondaryGold, backgroundColorMain, unselectedBlue, selectedButtonText } from "../colors.js";
  import ScrollButton from "../ScrollButton.js";
import VerticalLine from "../SideBar.js";
import PhotoAlbum from "react-photo-album";
import PhotoGallery from "../PhotoGallery.js";


const WholePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 90px;
  // position: absolute;
  gap: 20px;
`;

const RowContents = styled.div`
  display: flex;
  justify-content: space-around;
  overflowY: scroll;
`;

const CenterContents = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  gap: 300px;
`;

const CardContainers = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 345px;
  width: 641px;
  height: 100vh;
  margin-bottom: 175px;
`;
const ProjectCard = styled.div`

  position: absolute; 
  width: 641px;
  height: 340px;
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
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 5px;
  width: 641px;
  text-align: justify;

  `;

const ColCards = styled.div`
  // margin-top: 445px;
  display: flex;
  flex-direction: column;
  margin-bottom: -100px;
  `;


const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 78px;
  height: 340px;
`;


const SelectedButton = styled.div`
// position: relative;
width: 111px;
height: 28px;
display: flex;
align-items: center;
// left: -15px;
justify-content: center;
background: ${primaryBlue};
border-radius: 5px;

`;

const UnSelectedButton = styled.div`
width: 111px;
height: 28px;
border-radius: 5px;
`;

const AppContents = styled.ul`
display: flex;
justify-content: flex-start;
flex-direction: column;
gap: 18px;
color: ${primaryBlue};
width: 111px;
height: 28px;

`;

const RowSubMenuContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 68px;
  overflowY: scroll;
  // margin-left: 264px;
`;

const ExamplePhoto = styled.img`
display: flex;
min-width: 170px;
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

const ChangeMarginText = styled.h1`
  margin-top: -10px;
  margin-bottom: -14px;
`;

class ExperiencePageTesla extends Component {
    render() {
      return (
        <>
            <WholePageContainer>
        {/* Sub Menu */}
        <Projects/>
         {/* Project below */}
         <RowSubMenuContents>
           {/* Sub menu 2 */}
        {/* <CenterContents> */}
        <Row>

        <AppContents class="font-face-navFont">
        <NavLink to="/portfolio/projects/workexperience/generate" 
    style={({ isActive }) => ({
      color: isActive? selectedButtonText : unselectedBlue,
      textDecoration: isActive? 'none' :'none',
    })} >Generate</NavLink> 

     <NavLink to="/portfolio/projects/workexperience/tesla" 
    style={({ isActive }) => ({
      color: isActive? selectedButtonText : unselectedBlue,
      textDecoration: isActive? 'none' :'none',
    })}
    ><SelectedButton>Tesla</SelectedButton></NavLink> 

     <NavLink to="/portfolio/projects/workexperience/willow" 
    style={({ isActive }) => ({
      color: isActive? selectedButtonText : unselectedBlue,
      textDecoration: isActive? 'none' :'none',

    })}
    >Willow</NavLink> 

    <NavLink to="/portfolio/projects/workexperience/atem" 
    style={({ isActive }) => ({
      color: isActive? selectedButtonText : unselectedBlue,
      textDecoration: isActive? 'none' :'none',
    })}
    >ATEM</NavLink> 

<NavLink to="/portfolio/projects/workexperience/sharkninja" 
    style={({ isActive }) => ({
      color: isActive? selectedButtonText : unselectedBlue,
      textDecoration: isActive? 'none' :'none',
    })}
   >SharkNinja</NavLink> 
    </AppContents>
    <VerticalLine/>
</Row>
    {/* //insert images */}
    <Col>
    <ChangeMarginText className="font-face-navFont" style={{color: secondaryGold}}>  Technical Program Manager Intern, Energy Software/Firmware, 2022 </ChangeMarginText>
    <p className="font-face-body" style={{color: primaryBlue}}>Jira - Roadmap - Dependencies - Code Branching Strategy - Confluence</p>    
    <p className="font-face-body" style={{color: primaryBlue}}>During my summer internship at Tesla in 2022, I had the privilege of working on impactful projects within the sustainable energy sector. My passion for sustainability and the significant global challenges it poses motivated me to contribute to these initiatives. Collaborating with fellow engineers to tackle complex problems has always been a rewarding experience for me. I worked on three projects over the course of the summer.</p>    
    <p className="font-face-body" style={{color: primaryBlue}}>For my first project, I owned the pioneering initiative to establish Tesla’s first smart firmware control of wind power with turbines and storage accumulators within a microgrid, orchestrating collaboration among internal and external stakeholders of energy technology. I was in charge of defining program scope and managing the Jira development and validation roadmap, as well as managing technical dependencies, contracts, cost controls, weekly syncs, Confluence documentation, QA and simulation testing, and release/branching strategy. This will result in the first and only energy-autonomous island in Greece, contributing to Tesla's business goals of a fully sustainable energy ecosystem.</p>
    <p className="font-face-body" style={{color: primaryBlue}}>For my second project, I conducted extensive research to determine testing coverage metrics for a next-gen industrial product. Based on my findings, I proposed recommendations to pursue comprehensive coverage.

</p>
    <p className="font-face-body" style={{color: primaryBlue}}>For my third project, I owned the internal pilot timeline and dependencies of a next-gen charging product: firmware development, system testing, hardware readiness/retrofitting, legal/policy considerations, and preparation of consumer-facing surveys.</p>
    <p className="font-face-body" style={{color: primaryBlue}}>Overall, my internship at Tesla provided me with invaluable experience and the opportunity to make a meaningful contribution to the advancement of sustainable energy solutions.</p>
  </Col>
    </RowSubMenuContents>

   
    {/* </CenterContents> */}
    </WholePageContainer>
        </>
      );
    }
}

export default ExperiencePageTesla;