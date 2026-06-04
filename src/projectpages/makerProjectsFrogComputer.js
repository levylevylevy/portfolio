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
import GenerateCards from "./subPageContent/GenerateCards.js";
import GenerateCardsShowNxt from "./subPageContent/GenerateCardShowNxt.js";
import GenerateCardSolon from "./subPageContent/GenerateCardSolon.js"
import VerticalLine from "../SideBar.js";
import PhotoGalleryFrog from "../PhotoGalleryFrog.js";


const WholePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 90px;
  // position: absolute;
  gap: 20px;
  text-align: justify;
  
  @media (max-width: 768px) {
    padding-bottom: 70px;
    gap: 15px;
  }

`;

const RowContents = styled.div`
  display: flex;
  justify-content: space-around;
  overflowY: scroll;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CenterContents = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  gap: 300px;
  
  @media (max-width: 1200px) {
    gap: 150px;
  }
  
  @media (max-width: 968px) {
    gap: 80px;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    margin-top: 20px;
    align-items: center;
  }
`;

const CardContainers = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 345px;
  width: 641px;
  height: 100vh;
  margin-bottom: -150px;
  
  @media (max-width: 968px) {
    width: 90%;
    max-width: 550px;
  }
  
  @media (max-width: 768px) {
    width: 85%;
    gap: 280px;
    margin-bottom: -100px;
  }
  
  @media (max-width: 480px) {
    width: 90%;
    gap: 250px;
  }
`;
const ProjectCard = styled.div`

  position: absolute; 
  width: 641px;
  height: 340px;
  //background: #C8C9C3;
  background: #FAF8F5;
  box-shadow: 0px 1.5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 24px;
  
  @media (max-width: 968px) {
    width: 90%;
    max-width: 550px;
    height: auto;
    min-height: 320px;
  }
  
  @media (max-width: 768px) {
    width: 85%;
    padding: 20px;
  }
  
  @media (max-width: 480px) {
    width: 90%;
    padding: 16px;
  }

`;

const CardTitle=styled.h1`
display: flex;
flex-direction: column;
margin-top: 32px;
margin-bottom: -14px;

@media (max-width: 768px) {
  margin-top: 20px;
  margin-bottom: -10px;
}

@media (max-width: 480px) {
  margin-top: 15px;
  margin-bottom: -8px;
}

`;

const Col = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: flex-start;
margin-top: 5px;
width: 641px;
text-align: justify;

@media (max-width: 968px) {
  width: 90%;
  max-width: 550px;
}

@media (max-width: 768px) {
  width: 100%;
}
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
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    height: auto;
  }
  
  @media (max-width: 480px) {
    gap: 15px;
  }
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

const SelectedButtonTaller = styled.div`
// position: relative;
width: 111px;
height: 51px;
display: flex;
align-items: center;
// left: -15px;
justify-content: center;
background: ${primaryBlue};
border-radius: 5px;
padding-left: 18px;
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

@media (max-width: 768px) {
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  gap: 15px;
}

@media (max-width: 480px) {
  gap: 10px;
}

`;

const RowSubMenuContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 68px;
  overflowY: scroll;
  // margin-left: 244px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
  
  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const ExamplePhoto = styled.img`
display: flex;
min-width: 170px;

@media (max-width: 768px) {
  min-width: auto;
  width: 100%;
  max-width: 300px;
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
  
  @media (max-width: 480px) {
    width: 140px;
    height: 38px;
    font-size: 14px;
  }
`;


const ChangeMarginText = styled.h1`
  margin-top: -10px;
  margin-bottom: -14px;
`;


class MakerFrog extends Component {
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
        <NavLink to="/portfolio/projects/makerprojects/games" 
    style={({ isActive }) => ({
      color: isActive? selectedButtonText : unselectedBlue,
      textDecoration: isActive? 'none' :'none',
    })} >Games</NavLink> 
        <NavLink to="/portfolio/projects/makerprojects/phonebox" 
    style={({ isActive }) => ({
      color: isActive? selectedButtonText : unselectedBlue,
      textDecoration: isActive? 'none' :'none',
    })} >Phone Box2Stand</NavLink> 

     <NavLink to="/portfolio/projects/makerprojects/turntable" 
    style={({ isActive }) => ({
      color: isActive? selectedButtonText : unselectedBlue,
      textDecoration: isActive? 'none' :'none',
    })}
    >TurntAble</NavLink> 

     <NavLink to="/portfolio/projects/makerprojects/frogcomputer" 
    style={({ isActive }) => ({
      color: isActive? selectedButtonText : unselectedBlue,
      textDecoration: isActive? 'none' :'none',

    })}
    ><SelectedButton>Frog Computer</SelectedButton></NavLink> 
    
     <NavLink to="/portfolio/projects/makerprojects/kevin" 
    style={({ isActive }) => ({
      color: isActive? selectedButtonText : unselectedBlue,
      textDecoration: isActive? 'none' :'none',

    })}
    >KEVIN Robot</NavLink> 

    </AppContents>
    <VerticalLine/>
</Row>
    {/* //insert cards */}
    <Col>
    <ChangeMarginText className="font-face-navFont" style={{color: secondaryGold}}>  Frog Computer </ChangeMarginText>
    <p className="font-face-body" style={{color: primaryBlue}}>Created for <i>3D Fundamentals</i> Course Final Project</p>    

    <p className="font-face-body" style={{color: primaryBlue}}>I created a looks-like prototype of a fun computer for an outdoorsy kid. It includes an overhang in order to combat the sun-glare-on-screen issues I have personally faced from using my computer outside. I created a 3D model of how the frame of the computer would look, as well as the lily pad keyboard, fly mouse pad, and a mouse, using SolidWorks, TinkerCAD, and printed with an Ender 3 Pro.</p>    
    
    <PhotoGalleryFrog/>

  </Col>
    </RowSubMenuContents>

   
    {/* </CenterContents> */}
    </WholePageContainer>
        </>
      );
    }
}

export default MakerFrog;