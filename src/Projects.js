import React, { Component } from "react";
import styled from "styled-components";
import { primaryBlue, unselectedBlue } from './colors.js';
import HorizontalLine from "./BottomBar.js";
import { GitHub, Linkedin, Mail, FileText } from 'react-feather';
import ScrollButton from "./ScrollButton.js";
import { NavLink } from "react-router-dom";

const AppContents = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 80px;
  color: ${primaryBlue};
  width: 872px;
  height:50px;
  
  @media (max-width: 968px) {
    width: 90%;
    gap: 50px;
  }
  
  @media (max-width: 768px) {
    gap: 30px;
    width: 100%;
    flex-wrap: wrap;
    height: auto;
  }
  
  @media (max-width: 480px) {
    gap: 20px;
  }
`;


const TopSegment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 50px 60px 0 60px;
  flex-direction: row;
  justify-content: center;
  
  @media (max-width: 768px) {
    padding: 30px 20px 0 20px;
  }
  
  @media (max-width: 480px) {
    padding: 20px 10px 0 10px;
  }
`;

const IconGithub = styled(GitHub)`
  height: 30px;
  width: 30px;
  stroke: ${primaryBlue};
  stroke-width: 1px;
  padding: 2px 0;
  display: block;
  vertical-align: top;
  margin: 0 auto;
  
  @media (max-width: 480px) {
    height: 25px;
    width: 25px;
  }
`;

const IconMail = styled(Mail)`
  height: 30px;
  width: 30px;
  stroke: ${primaryBlue};
  stroke-width: 1px;
  padding: 2px 0;
  display: block;
  vertical-align: top;
  margin: 0 auto;
  
  @media (max-width: 480px) {
    height: 25px;
    width: 25px;
  }
`;

const IconLinkedin = styled(Linkedin)`
  height: 30px;
  width: 30px;
  stroke: ${primaryBlue};
  stroke-width: 1px;
  padding: 2px 0;
  display: block;
  vertical-align: top;
  margin: 0 auto;
  
  @media (max-width: 480px) {
    height: 25px;
    width: 25px;
  }
`;

const IconResume = styled(FileText)`
  height: 30px;
  width: 30px;
  stroke: ${primaryBlue};
  stroke-width: 1px;
  padding: 2px 0;
  display: block;
  vertical-align: top;
  margin: 0 auto;
  
  @media (max-width: 480px) {
    height: 25px;
    width: 25px;
  }
`;

const RowIcons = styled.div`
  display: flex;
  gap: 100px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 60px;
  }
  
  @media (max-width: 480px) {
    gap: 40px;
  }

`;

const NavBottom = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FAF8F5;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  padding-bottom: 10px;
  z-index: 3;
  text-align: center;
  position: fixed;
  bottom: 0;
  right: 0;
`;

const RowContents = styled.div`
  display: flex;
  flex-direction: row;
  overflowY: scroll;
`;

const RowSubMenuContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflowY: scroll;
`;

function menuActive() {
  return window.location.href.includes('workexperience');
}

function menuActiveHack() {
  return window.location.href.includes('hackathons');
}

function menuActiveProject() {
  return window.location.href.includes('makerprojects');
}


class Projects extends Component {
  render() {
    return (
      <>
        <TopSegment>

<RowSubMenuContents>
        <div style={{
          fontSize: '16px',
        }}>
          <AppContents>
          <NavLink to="/portfolio/projects/workexperience/generate" 
          style={({ active }) => ({
            color: menuActive()? primaryBlue : unselectedBlue,
            textDecoration: menuActive()? 'underline' :'none',
          })}
          className = "font-face-header2">Work Experiences</NavLink>
    <NavLink to="/portfolio/projects/hackathons/hackmit" 
    style={({ active }) => ({
      color: menuActiveHack()? primaryBlue : unselectedBlue,
      textDecoration: menuActiveHack()? 'underline' :'none',
    })}
    className = "font-face-header2">Hackathons</NavLink>

    <NavLink to="/portfolio/projects/makerprojects/games" 
    style={({ active }) => ({
      color: menuActiveProject()? primaryBlue : unselectedBlue,
      textDecoration: menuActiveProject()? 'underline' :'none',
    })}
    className = "font-face-header2">Games/Maker Projects</NavLink> 

            </AppContents>
          
         
        </div>

        </RowSubMenuContents>
        </TopSegment>

      <RowContents>
<NavBottom> 
<ScrollButton/>
<HorizontalLine/>
<RowIcons>
<a href="mailto:sadie.levy.eng@gmail.com"><IconMail/></a>
  <a href="https://github.com/levylevylevy/portfolio" target="_blank" rel="noopener noreferrer"><IconGithub/></a>
  <a href="https://www.linkedin.com/in/sadie-s-l/" target="_blank" rel="noopener noreferrer"><IconLinkedin/></a>
  <a href={require('./Sadie-Levy-Resume.pdf')} target="_blank" rel="noopener noreferrer"><IconResume/></a>
</RowIcons>
</NavBottom> 
</RowContents>
</>
    );
  }
}
 
export default Projects;