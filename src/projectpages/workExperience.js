import React, { Component } from "react";
import { useState } from "react";
import Popup from "./caseStudyContent/Popup.js";
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


//Components
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
  margin-bottom: 175px;
  
  @media (max-width: 968px) {
    width: 90%;
    max-width: 550px;
  }
  
  @media (max-width: 768px) {
    width: 85%;
    gap: 280px;
    margin-bottom: 100px;
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
    min-height: 300px;
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
  align-items: flex-start;
  margin-top: 5px;
  
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

@media (max-width: 480px) {
  width: 100px;
  height: 26px;
  font-size: 14px;
}

`;

const UnSelectedButton = styled.div`
width: 111px;
height: 28px;
border-radius: 5px;

@media (max-width: 480px) {
  width: 100px;
  height: 26px;
}
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


class ExperiencePage extends Component {
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
    })} ><SelectedButton>Generate</SelectedButton></NavLink> 

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
    {/* //insert cards */}
    <CardContainers>
    <GenerateCards/>
    <GenerateCardsShowNxt/>
    <GenerateCardSolon/>
    </CardContainers>
    </RowSubMenuContents>

   
    {/* </CenterContents> */}
    </WholePageContainer>
        </>
      );
    }
}

export default ExperiencePage;