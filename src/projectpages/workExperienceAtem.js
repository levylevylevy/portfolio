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
  text-align: justify;

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
  align-items: flex-start;
  margin-top: 5px;
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

class ExperiencePageAtem extends Component {
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
    >Tesla</NavLink> 

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
    ><SelectedButton>ATEM</SelectedButton></NavLink> 

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
    <ChangeMarginText className="font-face-navFont" style={{color: secondaryGold}}>  Graphic Design Intern, 2020 </ChangeMarginText>
    <p className="font-face-body" style={{color: primaryBlue}}>Adobe Illustrator - Adobe Photoshop - After Effects - 3D Mockup</p>    
  <PhotoGallery/>
  </Col>
    </RowSubMenuContents>

   
    {/* </CenterContents> */}
    </WholePageContainer>
        </>
      );
    }
}

export default ExperiencePageAtem;