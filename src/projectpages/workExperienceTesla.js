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
    <ChangeMarginText className="font-face-navFont" style={{color: secondaryGold}}>  Technical Program Manager Intern, Software/Firmware, 2022 </ChangeMarginText>
    <p className="font-face-body" style={{color: primaryBlue}}>Jira - Roadmap - Dependencies - Code Branching Strategy - Confluence</p>    
    <p className="font-face-body" style={{color: primaryBlue}}> I completed my internship at Tesla during Summer 2022. I have always been interested in sustainability and I think it is one of the most important problems the world is facing.
    The challenges of sustainable energy excite me and stump me, and there is nothing I like to do more than sit down with other engineers and attack a hard problem. At Tesla, I worked on the energy side of the company on three main projects.</p>    
    <p className="font-face-body" style={{color: primaryBlue}}>For my first project, I owned Tesla’s first time implementing firmware control of a new power source. I brought internal and international external stakeholders together to scope the program, managed a Jira development and validation roadmap, technical dependencies, weekly syncs, documentation, and release/branching strategy.</p>
    <p className="font-face-body" style={{color: primaryBlue}}>For my second project, I researched and determined testing coverage metrics of a next-gen industrial product and proposed recommendations to pursue full coverage.</p>
    <p className="font-face-body" style={{color: primaryBlue}}>For my third project, I owned the internal pilot timeline and dependencies of a next-gen charging product: firmware development, system testing, hardware readiness/retrofitting, legal impact, and user feedback preparation.</p>
  </Col>
    </RowSubMenuContents>

   
    {/* </CenterContents> */}
    </WholePageContainer>
        </>
      );
    }
}

export default ExperiencePageTesla;