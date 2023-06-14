import React, { Component } from "react";
import {
  Link,
  Route,
  Routes,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import styled from "styled-components";
import { primaryBlue, secondaryGold, backgroundColorMain, unselectedBlue, selectedButtonText, white } from "../../colors.js";
import HorizontalLine from "../../../src/BottomBar";
import { ChevronLeft, ChevronRight, ChevronsRight, ChevronsLeft, XCircle, Maximize, Edit3, CornerRightUp, GitHub, Linkedin, Mail } from 'react-feather';
import ScrollButton from "../../../src/ScrollButton.js";
import Carousel, { CarouselItem } from "./Carousel";




//Components
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

const WholePageContainer = styled.div`
  display: flex;
  flex-direction: column;
//   padding-bottom: 90px;
  padding-left: 150px;
  padding-right: 150px;
  min-width: 500px;
  // position: absolute;
  text-align: justify;
  gap:20px;
  margin-bottom: 200px;
`;

const ExamplePhoto = styled.img`
width: 80%;
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-items: center;

`;

const ExamplePhoto2 = styled.img`
display: flex;
width: 80%;
`;


const TilitiGif = styled.img`
display: flex;
width: 50%;
margin-top: 20px;
`;

const DisplayVideo = styled.video`
display: flex;
flex-direction: column;
width: 75%;
margin-top: 20px;
background-color: #E0E0E2;
border-radius: 20px;
align-items: center;
display: flex;
justify-contents: center;
`;

const DisplayPDF = styled.div`
display: flex;
flex-direction: column;
width: 75%;
margin-top: 20px;
background-color: #E0E0E2;
border-radius: 20px;
align-items: center;
display: flex;
justify-contents: center;
border-radius: 20px;
`;


const ExamplePhoto3 = styled.img`
display: flex;
width: 80%;
max-height: 300px;
margin-bottom: 20px;
margin-top: -20px;

`;

const Col = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 500px;
`;

const ColImages = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
margin-top: 20px;
`;

const ColImages2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
`;

const ColImagesPDF = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
margin-top: 20px;
gap:20px;
`;

const TextWrap = styled.p`
display: flex;
flex-direction: column;
align-items: flex-start;
flex-wrap: wrap;
width: 400px;
color: white;
`;

const TextWrapBody = styled.p`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
// flex-wrap: wrap;
color: ${primaryBlue};
`;

const Row = styled.div`
display: flex;
flex-direction: row;
gap: 80px;
justify-content: center;
align-items: center;
`;

const TopSegment = styled.div`
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  top: 0px;
  left: 0;
  right:0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #1D2B3C;
  border-radius: 30px;
    padding: 24px;
    margin-top: 20px;
    box-shadow: 0px 1.5px 4px rgba(0, 0, 0, 0.25);
`;


const TopSegmentCol = styled.div`
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  top: 0px;
  left: 0;
  right:0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #E0E0E2;
  border-radius: 30px;
    padding: 24px;
    margin-top: 20px;
    box-shadow: 0px 1.5px 4px rgba(0, 0, 0, 0.25);
`;

const TopSegmentImg = styled.div`
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  top: 0px;
  left: 0;
  right:0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #E0E0E2;
  border-radius: 30px;
    padding: 24px;
    margin-top: 20px;
    box-shadow: 0px 1.5px 4px rgba(0, 0, 0, 0.25);
`;

const TopSegmentColVideos = styled.div`
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  top: 0px;
  left: 0;
  right:0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #E0E0E2;
  border-radius: 30px;
    padding: 24px;
    margin-top: 20px;
    box-shadow: 0px 1.5px 4px rgba(0, 0, 0, 0.25);
`;

const ColInfo = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
align-items: center;

`;
const ColInfoGif = styled.div`
display: flex;
flex-direction: column;
gap: 10px;

`;

const ColGifs = styled.div`
display: flex;
align-items: center;
justify-content: center;

`;

const RowInfo = styled.div`
display: flex;
gap: 30px;
`;

const RowVideos = styled.div`
display: flex;
gap: 20px;
flex-wrap: wrap;
`;

const ChangeMarginText = styled.h1`
  margin-bottom: -14px;
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
  cursor: pointer;
`;

const RowButtons = styled.div`
display: flex;
flex-wrap: wrap;
flex: 2 0 auto;
flex-direction: row;
overflow-x:auto;
gap: 20px;
`;

class HareOfRuinCaseStudy extends Component {
  render() {
    return (
      <>
        <WholePageContainer>
              {/* update with larger photo */}
              <TopSegmentImg>

              <ExamplePhoto src={require('../../../src/images/hareofruinstartscreen.jpg')} />
                
                </TopSegmentImg>
                <TopSegmentImg>
<RowButtons>
                <CaseStudyButton className="font-face-subtitle" style={{color: primaryBlue}}
onClick={()=> window.open("https://github.com/aidancapaldi/HareOfRuinPrototype", "_blank")}
>Github</CaseStudyButton>
<CaseStudyButton className="font-face-subtitle" style={{color: primaryBlue}}
onClick={()=> window.open("https://play.unity.com/mg/other/webgl-builds-336086", "_blank")}
>Play Game</CaseStudyButton>
</RowButtons>
</TopSegmentImg>

          <TopSegmentCol>
            <ChangeMarginText className="font-face-header2">Overview/Role</ChangeMarginText>
            <TextWrapBody className="font-face-body" style={{ color: secondaryGold }}>Scope: January 2023 - May 2023</TextWrapBody>
            <TextWrapBody className="font-face-body">Collaboratively developed a 1-player 3D action-RPG game using Unity, C#, GitHub, and 3D assets in a team of four. Pair programmed in weekly collaborative meetings and coded independently outside of meetings. Additionally used weekly meetings to plan releases, assign tasks, and manage git conflicts.
 </TextWrapBody> <TextWrapBody className="font-face-body">Independently designed all 2D UI assets and splash screen using Photoshop/Illustrator, ensuring a consistent visual aesthetic and intuitive experience across the game. Solely responsible for writing all character dialogue and creating all cut-scenes, adding depth and engagement to the game experience. Actively participated in the co-design of level layouts and progression, enhancing gameplay and optimizing experience. Additionally, created and deployed Alpha, Beta, and Gold Master releases as a team, conducted playtests and iterated on user feedback, and delivered in-depth game design documentation.
 </TextWrapBody>
           
          </TopSegmentCol>

          <TopSegmentCol>

            <ChangeMarginText className="font-face-header2">Game Description</ChangeMarginText>
            <TextWrapBody className="font-face-body">Join the epic adventure as an adorable but fierce rabbit in our action RPG! Apprentice Harry Rabbit is on
a quest to save his mentor High Wizard Pandamaus from the clutches of the evil Vulpes Rebane. Each
level presents new enemies to defeat with powerful spells. Beware of your carrot health-meter dropping to
zero or it's game over. With stunning graphics and engaging storyline, this game will keep you on the edge
of your paws. Will you be able to save your mentor and defeat the villain? Will you secure your legacy as
The Hare of Ruin? Glory awaits…</TextWrapBody>
          </TopSegmentCol>

          <TopSegmentCol>

            <ChangeMarginText className="font-face-header2">Game Demo</ChangeMarginText>
            <ColImages2>
            <DisplayVideo width="100%" controls autoplay><source src={require('../../../src/videos/HareOfRuinFinalDemo.mp4')} type="video/mp4" /></DisplayVideo>
            <TextWrapBody className="font-face-body" style={{ color: secondaryGold }}>*Skip to 3:35 in Demo Video to view game trailer!*
 </TextWrapBody> 
            </ColImages2>
          </TopSegmentCol>

          <TopSegmentCol>

            <ChangeMarginText className="font-face-header2">Gold Master Release GDD</ChangeMarginText>
            <ColImagesPDF><iframe src="https://drive.google.com/file/d/1fRuPL6Igf4GNArAYSFg3PemJjivTo67H/preview" width="640" height="480" allow="autoplay"></iframe>
          
          </ColImagesPDF>
          </TopSegmentCol>

          <TopSegmentCol>

<ChangeMarginText className="font-face-header2">Level Layouts</ChangeMarginText>
<ColImages>
  <Carousel>
    <CarouselItem><ExamplePhoto2 src={require('../../../src/images/level 1 env.png')} /></CarouselItem>
    <CarouselItem><ExamplePhoto2 src={require('../../../src/images/level 2 env.png')} /></CarouselItem>
    <CarouselItem><ExamplePhoto2 src={require('../../../src/images/level 3 env.png')} /></CarouselItem>

  </Carousel>

</ColImages>
</TopSegmentCol>

          <TopSegmentCol>

<ChangeMarginText className="font-face-header2">Beta Release GDD/Playtesting Notes</ChangeMarginText>
<ColImagesPDF><iframe src="https://drive.google.com/file/d/11FXUwsawdpgDTGBiVMo96Q6ZCyngiR1z/preview" width="640" height="480" allow="autoplay"></iframe>

</ColImagesPDF></TopSegmentCol>

          <TopSegmentCol>

            <ChangeMarginText className="font-face-header2">Initial Prototype/GDD Pitch</ChangeMarginText>
            <ColImagesPDF><iframe src="https://drive.google.com/file/d/1Hsi0Dao9C98S2pHTNyPNZSVpmjyXnxEE/preview" width="640" height="480" allow="autoplay"></iframe>
            <iframe src="https://drive.google.com/file/d/1jE7l7k_QHYlE2oahCNRPMrQ14ijueKrv/preview" width="640" height="480" allow="autoplay"></iframe>
          </ColImagesPDF></TopSegmentCol>
          



          <NavBottom>
            <ScrollButton />
            <HorizontalLine />
            <RowIcons>
              <a href="mailto:sadie.levy.eng@gmail.com"><IconMail /></a>
              <a href="https://github.com/levylevylevy/portfolio" target="_blank"><IconGithub /></a>
              <a href="https://www.linkedin.com/in/sadie-s-l/" target="_blank"><IconLinkedin /></a>
            </RowIcons>
          </NavBottom>
        </WholePageContainer>
      </>
    );
  }
}

export default HareOfRuinCaseStudy; 
