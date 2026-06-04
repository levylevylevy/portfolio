import React, { Component } from "react";
import Projects from '../Projects.js'
import ProjectLayout from '../components/ui/ProjectLayout.jsx'
import {
    NavLink
  } from "react-router-dom";
  import styled from "styled-components";
  import { primaryBlue, backgroundColorMain, unselectedBlue, selectedButtonText } from "../colors.js";
import AIScoopCard from "./subPageContent/AiScoopCard";
import GardenShareCard from "./subPageContent/GardenShareCard";
import VolunteerGoCard from "./subPageContent/VolunteerGoCard.js";
import OnceADailyCard from "./subPageContent/onceadailydocard.js";
import VerticalLine from "../SideBar.js";


//Components
const WholePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 90px;
  gap: 20px;
  text-align: justify;
  
  @media (max-width: 768px) {
    padding-bottom: 70px;
    gap: 15px;
  }
`;

const CardContainers = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 345px;
  width: 641px;
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
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
  
  @media (max-width: 480px) {
    gap: 20px;
  }
`;

class HackathonPage extends Component {
    render() {
      return (
        <>
          <WholePageContainer>
            <Projects/>
            <ProjectLayout>
              <CardContainers>
                <AIScoopCard/>
                <VolunteerGoCard/>
                <GardenShareCard/>
                <OnceADailyCard/>
              </CardContainers>
            </ProjectLayout>
          </WholePageContainer>
        </>
      );
    }
}

export default HackathonPage;