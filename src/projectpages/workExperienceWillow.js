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

class ExperiencePageWillow extends Component {
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
    ><SelectedButton>Willow</SelectedButton></NavLink> 

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
    <ChangeMarginText className="font-face-navFont" style={{color: secondaryGold}}>  Software Engineer Co-Op, 2022 </ChangeMarginText>
    <p className="font-face-body" style={{color: primaryBlue}}>React.js - HTML - CSS - Django - AWS - Github - Figma</p>    
    <p className="font-face-body" style={{color: primaryBlue}}> I completed my Co-Op at Willow during Fall 2022. 
    Willow is a fin-tech startup that partners with financial advisors and institutions to empower women financially. 
    At Willow, I used React.js, Html, Css, Django, AWS, and Figma to develop frontend for the company website. 
   My main project was developing a new interactive product for the company's customer website. </p>    
   <p className="font-face-body" style={{color: primaryBlue}}> I worked in the development environment locally using React.js, Html, and Css on VS Code, developing designs passed off by the UI Designer. I utilized flexbox to arrange items, and created dynamic mobile responsive pages. I implemented a components based design using styled-components.</p>
   <p className="font-face-body" style={{color: primaryBlue}}>I worked with the backend engineer and with Django to determine what APIs were needed for the new product to display different user and company data. 
   Then, I integrated those APIs into the frontend code, and I created development data. Additionally, I troubleshooted bugs using Dev Tools and working on the staging server. 
   I used AWS to manage resources within the website, and I used Trello to manage my tickets. I used git to interact with the staging environment. I used git and Github to interact with the production environment.</p>    
    
  </Col>
    </RowSubMenuContents>

   
    {/* </CenterContents> */}
    </WholePageContainer>
        </>
      );
    }
}

export default ExperiencePageWillow;