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
import PhoneBoxPhotoGallery from "../PhoneBoxPhotoGallery.js";

//Components
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
  margin-bottom: -1000px;
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

`;

const RowSubMenuContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 68px;
  overflowY: scroll;
  // margin-left: 244px;
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


class MakerPage extends Component {
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
        <NavLink to="/projects/makerprojects/phonebox" 
    style={({ isActive }) => ({
      color: isActive? selectedButtonText : unselectedBlue,
      textDecoration: isActive? 'none' :'none',
    })} ><SelectedButtonTaller>Phone Box2Stand</SelectedButtonTaller></NavLink> 

     <NavLink to="/projects/makerprojects/turntable" 
    style={({ isActive }) => ({
      color: isActive? selectedButtonText : unselectedBlue,
      textDecoration: isActive? 'none' :'none',
    })}
    >TurntAble</NavLink> 

     <NavLink to="/projects/makerprojects/frogcomputer" 
    style={({ isActive }) => ({
      color: isActive? selectedButtonText : unselectedBlue,
      textDecoration: isActive? 'none' :'none',

    })}
    >Frog Computer</NavLink> 
    
     <NavLink to="/projects/makerprojects/kevin" 
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
    <ChangeMarginText className="font-face-navFont" style={{color: secondaryGold}}>  Phone Box2Stand </ChangeMarginText>
    <p className="font-face-body" style={{color: primaryBlue}}>Created for <i>Iterative Product Prototyping for Engineers</i> Course Assignment</p>    

    <p className="font-face-body" style={{color: primaryBlue}}>I created a laser cut gift box for a phone. It can be taken apart and put back together as an upcycled phone stand. It is made of re-used wood and is 100% biodegradable.</p>    
    
    <PhoneBoxPhotoGallery/>

  </Col>
    </RowSubMenuContents>

   
    {/* </CenterContents> */}
    </WholePageContainer>
        </>
      );
    }
}

export default MakerPage;