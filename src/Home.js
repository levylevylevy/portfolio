import React, { Component } from "react";
import { Fragment } from 'react';
import styled from 'styled-components';
import {primaryBlue} from './colors.js'
import { secondaryGold } from "./colors.js";
import { View } from 'react';
// import { BottomBarLine } from "./BottomBar.js";
import HorizontalLine from "./BottomBar.js";
import {ChevronLeft, ChevronRight, ChevronsRight, ChevronsLeft, XCircle, Maximize, Edit3, CornerRightUp, GitHub, Linkedin, Mail} from 'react-feather';
import ScrollButton from "./ScrollButton.js";
import { Content } from './Styles';


//Components
const Circle = styled.img`
  display: flex;
  min-width: 177px;
  height: 177px;
  border-radius: 150px;
  position: absolute;
  border: 1px solid ${secondaryGold};
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: flex-end;  
  min-width: 203px;
  height: 203px;
  border-radius: 150px;
  position: relative;
`;

const GoldCircle = styled.div`
  display: flex;
  min-width: 192px;
  height: 192px;
  border-radius: 150px;
  position: absolute;
  border: 1px solid ${secondaryGold};
`;

const CenterContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 775px;
  margin-top: 30px;
  flex-direction: column;
  color: ${primaryBlue};
  position: relative;
  
`;

const RowContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflowY: scroll;
`;


const RowIntro = styled.div`
  display: flex;
  gap: 34px;
  align-items: center;
  justify-content: center;
`;

const RowIcons = styled.div`
  display: flex;
  gap: 100px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`;

const ColIntro = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;


const ColAboutMe = styled.div`
  display: flex;
  flex-direction: column;
  // column-gap: -36px;
`;

// const NameSummary = styled.div`
//   margin-bottom: -30px;
//   margin-top: -15px;
// `;

const CaptionText = styled.p`
  margin-top: -48px;
`;

const WholePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 90px;
  position: absolute;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  text-align: justify;

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

const ChangeMarginText = styled.h1`
  margin-top: 12px;
  margin-bottom: -14px;
`;

class Home extends Component {
  render() {
    return (
      <>
      <RowContents>
      <WholePageContainer>
      <CenterContents>
        <RowIntro>

        <ProfileContainer>
        <GoldCircle/>
        <Circle src={require('./images/websiteprofilephoto.png')} />
        </ProfileContainer>
        
        <ColIntro>
        {/* <NameSummary> */}
        <div className="font-face-header2">

        <p style={{color: 'primaryBlue'}}>
        Hi! I’m Sadie Levy -                         
        <span style={{color: secondaryGold}}> engineer </span>{' '}
        <span style={{color: primaryBlue}}>and </span>{' '}
        
        <span style={{color: secondaryGold}}> designer</span>{''}
        
        , based in Boston.</p>
        </div>
        {/* </NameSummary> */}
        <CaptionText>
        <p style={{color: 'primaryBlue'}} className='font-face-subtitle'> Currently searching for a full-time UI/UX, technical PM, or front-end swe position following a Spring 2023 graduation from Northeastern University - Bachelors in Computer Engineering, Minor in Computer Science</p>
        </CaptionText>
        </ColIntro>
        </RowIntro>
       
        <ColAboutMe>
        <ChangeMarginText className='font-face-header3'>About Me</ChangeMarginText>

        <p style={{color: 'primaryBlue'}} className='font-face-body'>Hi, I’m Sadie! I’m a senior at Northeastern University in Boston. I am very passionate about product development and interaction technology. Feel free to read more about my experiences below...</p>
        <ul style={{color: 'primaryBlue'}} className='font-face-body'>
        <a href="/tiliti-case-study" target="_blank"><li>My first UI case study</li></a>
       
        <a href="/projects/workexperience/willow" target="_blank"><li>Frontend Software Engineer Co-Op at fin-tech startup Willow</li></a>
        <a href="/projects/workexperience/tesla" target="_blank"><li>Technical Program Manager, Software/Firmware Intern at Tesla</li></a>
        <a href="https://blog.adobe.com/en/publish/2021/03/08/adobe-research-women-in-tech-scholarship-winners" target="_blank"><li>Selected as an Adobe Women in Technology Scholar</li></a>
        <a href="https://www.congressionalappchallenge.us/about/" target="_blank"><li>Served as an Alumni Advisory Board Member for the US House of Representatives Congressional App Challenge</li> </a>
        <a href="/projects/hackathons/hackmit" target="_blank"><li>Many all-nighters completing hackathon projects</li></a>
        <a href="/projects/workexperience/generate" target="_blank"><li>...And more in the Projects tab!</li></a>
        </ul>
        {/* <li>Frontend Software Engineer Co-Op at fin-tech startup Willow</li>
        <li>Technical Program Manager, Software/Firmware Intern at Tesla</li>
        <li>UI/UX Designer, Product Designer, and Design Lead for three startups through Generate Product Development Studio</li>
        <li>Test Engineer Co-Op At SharkNinja</li>
        <li>Graphic Design intern at startup ATEM</li>
        <li>A few fun hackathon projects!</li>
        <li>A few maker/class projects</li> */}
     


        <p style={{color: 'primaryBlue'}} className='font-face-body'>Besides tech, I love to listen to music, draw, read, play board games, and hike ⋆.𖡼.𖤣𖥧𖡼.𖤣𖥧.</p>

        {/* <p style={{color: 'primaryBlue'}} className='font-face-body'>Scroll down to leave a doodle in my guest book ✎〰 </p> */}

        {/* <p style={{color: 'primaryBlue'}} className='font-face-body'>((This website was made with react.js, html, css, & designed with Figma ->> website code))</p> */}
        </ColAboutMe>

      </CenterContents>

      <NavBottom> 
      <ScrollButton/>
      <HorizontalLine/>
      <RowIcons>
      <a href="mailto:sadie.levy.eng@gmail.com"><IconMail/></a>
        <IconGithub/>
        <a href="https://www.linkedin.com/in/sadie-s-l/" target="_blank"><IconLinkedin/></a>
      </RowIcons>
      </NavBottom> 
      </WholePageContainer>
      </RowContents>
      </>
    );
  }
}
 
export default Home;