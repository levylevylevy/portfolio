import React, { Component } from "react";
import styled from "styled-components";
import {primaryBlue} from './colors.js'
import { secondaryGold } from "./colors.js";
import HorizontalLine from "./BottomBar.js";
import {ChevronLeft, ChevronRight, ChevronsRight, ChevronsLeft, XCircle, Maximize, Edit3, CornerRightUp, GitHub, Linkedin, Mail} from 'react-feather';
import ScrollButton from "./ScrollButton.js";
import VerticalLine from "./SideBar.js";
// import {
//   withRouter
// } from "react-router-dom";

//containers
import HackathonPage from './projectpages/Hackathons'
import MakerPage from './projectpages/makerProjects'
import ExperiencePage from './projectpages/workExperienceAtem'

//components
const TopSegment=styled.div`
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  top: 0px;
  left: 0;
  right:0;
  bottom: 0;
  padding: 90px 60px 0 60px;
  display: flex;
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
  justify-content: center;
  overflowY: scroll;
`;

class Projects extends Component {
  render() {
    return (
      <>
      <Foreground>
        <TopSegment>
        <h2>Projects</h2>

        </TopSegment>
        {/* {(location.pathname === "/projects") && <HackathonPage/>}
        {(location.pathname === "/projects") && <MakerPage/>}
        {(location.pathname === "/projects") && <ExperiencePage/>}
 */}

        </Foreground>

      <RowContents>
      <WholePageContainer>
     
  </WholePageContainer>
<NavBottom> 
<ScrollButton/>
<HorizontalLine/>
<RowIcons>
<a href="mailto:sadie.levy.eng@gmail.com"><IconMail/></a>
  <a href="https://github.com/levylevylevy/portfolio" target="_blank"><IconGithub/></a>
  <a href="https://www.linkedin.com/in/sadie-s-l/" target="_blank"><IconLinkedin/></a>
</RowIcons>
</NavBottom> 
</RowContents>
</>
    );
  }
}
 
export default Projects;