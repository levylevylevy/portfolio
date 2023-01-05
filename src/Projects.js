import React, { Component } from "react";
import styled from "styled-components";
import {primaryBlue} from './colors.js'
import { secondaryGold } from "./colors.js";
import {unselectedBlue} from "./colors.js";
import HorizontalLine from "./BottomBar.js";
import {ChevronLeft, ChevronRight, ChevronsRight, ChevronsLeft, XCircle, Maximize, Edit3, CornerRightUp, GitHub, Linkedin, Mail} from 'react-feather';
import ScrollButton from "./ScrollButton.js";
import {
  Link,
  Route,
  Routes,
  NavLink,
  BrowserRouter
} from "react-router-dom";
// import {
//   withRouter
// } from "react-router-dom";
import ExperiencePageWillow from "./projectpages/workExperienceWillow.js";
//containers
import HackathonPage from './projectpages/Hackathons'
import MakerPage from './projectpages/makerProjects'
import ExperiencePage from './projectpages/workExperienceAtem'

//components
const AppContents = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 80px;
  color: ${primaryBlue};
  width: 872px;
  height:50px;
`;


const TopSegment=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  // background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  // position: fixed;
  top: 0px;
  left: 0;
  right:0;
  bottom: 0;
  padding: 50px 60px 0 60px;
  flex-direction: row;
  justify-content: center;

`;


const Foreground = styled.div`
  position: relative;
  z-index: 2;
`;

const WholePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 90px;
  position: absolute;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
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
`;

const RowIcons = styled.div`
  display: flex;
  gap: 100px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`;

const NavBottom = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #E0E0E2;
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
  // border-radius: 20px 20px 0 0;
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

const NavTop = styled.div`
  display: flex;
  background-color: #E0E0E2;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 3;
  text-align: center;
  position: fixed;
  bottom: 0;
  right: 0;
  // border-radius: 20px 20px 0 0;
`;

const activeWork = true;
function menuActive()
{
    return window.location.href.includes('workexperience') ? activeWork == true : activeWork == false;
}

const activeHack = true;
function menuActiveHack()
{
    return window.location.href.includes('hackathons') ? activeHack == true : activeHack == false;
}

const activeProject = true;
function menuActiveProject()
{
    return window.location.href.includes('makerprojects') ? activeProject == true : activeProject == false;
}


class Projects extends Component {
  render() {
    return (
      <>
        <TopSegment>

<RowSubMenuContents>
        <div 
         {...activeWork == true}
         {...activeHack == false}
         {...activeProject == false}



        style={{
          fontSize: '16px',

        }}>
          <AppContents>
          <NavLink to="/portfolio/#/projects/workexperience/generate" 
          style={({ active }) => ({
            color: menuActive()? primaryBlue : unselectedBlue,
            textDecoration: menuActive()? 'underline' :'none',
          })}
          className = "font-face-header2">Work Experiences</NavLink>
    <NavLink to="/portfolio/#/projects/hackathons/hackmit" 
    style={({ active }) => ({
      color: menuActiveHack()? primaryBlue : unselectedBlue,
      textDecoration: menuActiveHack()? 'underline' :'none',
    })}
    className = "font-face-header2">Hackathons</NavLink>

    <NavLink to="/portfolio/#/projects/makerprojects/phonebox" 
    style={({ active }) => ({
      color: menuActiveProject()? primaryBlue : unselectedBlue,
      textDecoration: menuActiveProject()? 'underline' :'none',
    })}
    className = "font-face-header2">Maker Projects</NavLink> 

            </AppContents>
          
         
        </div>

        </RowSubMenuContents>
        </TopSegment>
   
   {/* //page content below */}


      <RowContents>
      {/* <WholePageContainer>
     
  </WholePageContainer> */}
<NavBottom> 
<ScrollButton/>
<HorizontalLine/>
<RowIcons>
<a href="mailto:sadie.levy.eng@gmail.com"><IconMail/></a>
  <IconGithub/>
  <a href="https://www.linkedin.com/in/sadie-s-l/" target="_blank"><IconLinkedin/></a>
</RowIcons>
</NavBottom> 
</RowContents>
</>
    );
  }
}
 
export default Projects;