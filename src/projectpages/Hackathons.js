import React, { Component } from "react";
import Projects from '../Projects.js'
import {
    NavLink
  } from "react-router-dom";
  import styled from "styled-components";
  import { primaryBlue, backgroundColorMain, unselectedBlue, selectedButtonText } from "../colors.js";
import AIScoopCard from "./subPageContent/AiScoopCard";
import GardenShareCard from "./subPageContent/GardenShareCard";
import VerticalLine from "../SideBar.js";


//Components
const WholePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 90px;
  gap: 20px;
  text-align: justify;
`;

const CardContainers = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 345px;
  width: 641px;
  height: 100vh;
  margin-bottom: -150px;
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
`;

class HackathonPage extends Component {
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
        <NavLink to="/portfolio/projects/hackathons/hackmit" 
    style={({ isActive }) => ({
      color: isActive? selectedButtonText : unselectedBlue,
      textDecoration: isActive? 'none' :'none',
    })} ><SelectedButton>HackMIT</SelectedButton></NavLink> 

     <NavLink to="/portfolio/projects/hackathons/hackbeanpot" 
    style={({ isActive }) => ({
      color: isActive? selectedButtonText : unselectedBlue,
      textDecoration: isActive? 'none' :'none',
    })}
    >HackBeanpot</NavLink> 

     <NavLink to="/portfolio/projects/hackathons/hophacks" 
    style={({ isActive }) => ({
      color: isActive? selectedButtonText : unselectedBlue,
      textDecoration: isActive? 'none' :'none',

    })}
    >HopHacks</NavLink> 

    </AppContents>
    <VerticalLine/>
</Row>
    {/* //insert cards */}
    <CardContainers>
    <AIScoopCard/>
    <GardenShareCard/>
    </CardContainers>
    </RowSubMenuContents>

   
    {/* </CenterContents> */}
    </WholePageContainer>
        </>
      );
    }
}

export default HackathonPage;