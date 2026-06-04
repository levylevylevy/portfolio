import React, { Component } from "react";
import styled from 'styled-components';
import { primaryBlue, secondaryGold, backgroundColorMain, white } from './colors.js';
import HorizontalLine from "./BottomBar.js";
import { GitHub, Linkedin, Mail, FileText } from 'react-feather';
import ScrollButton from "./ScrollButton.js";
import NowPlaying from "./NowPlaying.js";

const BlinqBanner = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background-color: ${backgroundColorMain};
  padding: 24px 48px;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.06), 0px 1.5px 4px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.06), 0px 2px 6px rgba(0, 0, 0, 0.28);
  }

  @media (max-width: 600px) {
    padding: 18px 20px;
    gap: 16px;
    flex-direction: column;
    align-items: center;
  }
`;

const BlinqLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
`;

const BlinqPhotoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const BlinqPhoto = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center 30%;
  display: block;
  border: 2px solid rgba(255,255,255,0.6);

  @media (max-width: 600px) {
    width: 80px;
    height: 80px;
  }
`;

const BlinqQRWrapper = styled.div`
  background-color: ${white};
  border-radius: 10px;
  padding: 6px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: auto;
`;

const BlinqQR = styled.img`
  width: 100%;
  height: 100%;
  max-width: 150px;
  border-radius: 4px;
  display: block;
  object-fit: contain;

  @media (max-width: 600px) {
    max-width: 90px;
  }
`;

const BlinqText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  text-align: left;
`;

const BlinqTitle = styled.p`
  margin: 0;
  font-size: 18px;
  color: ${primaryBlue};
  font-family: "Inter", sans-serif;
`;

const BlinqSub = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${primaryBlue};
  opacity: 0.7;
  font-family: "Inter", sans-serif;
`;

const BlinqArrow = styled.span`
  font-size: 12px;
  color: ${primaryBlue};
  opacity: 0.5;
  font-family: "Inter", sans-serif;
  margin-top: 4px;
  display: block;
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
  
  @media (max-width: 968px) {
    width: 90%;
    max-width: 600px;
  }
  
  @media (max-width: 768px) {
    width: 85%;
    margin-top: 20px;
  }
  
  @media (max-width: 480px) {
    width: 90%;
    margin-top: 15px;
  }
`;

const RowContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  overflow-y: scroll;
`;


const RowIntro = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  
  @media (max-width: 480px) {
    gap: 15px;
  }
`;

const RowIcons = styled.div`
  display: flex;
  gap: 100px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  
  @media (max-width: 768px) {
    gap: 60px;
  }
  
  @media (max-width: 480px) {
    gap: 40px;
  }
`;

const ColIntro = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;


const ColAboutMe = styled.div`
  display: flex;
  flex-direction: column;
`;

const CaptionText = styled.p`
  margin-top: -48px;
`;

const WholePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 90px;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  text-align: justify;
`;

const NowPlayingWrapper = styled.div`
  position: fixed;
  top: 16px;
  left: 16px;
  width: 260px;
  z-index: 100;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NowPlayingMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 8px;
  }
`;

const NavBottom = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${backgroundColorMain};
  width: 100%;
  padding: 0 0 14px;
  z-index: 3;
  text-align: center;
  position: fixed;
  bottom: 0;
  right: 0;
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

const ChangeMarginText = styled.h1`
  margin-top: 12px;
  margin-bottom: -14px;
`;

class Home extends Component {
  render() {
    return (
      <>
      <NowPlayingWrapper>
        <NowPlaying />
      </NowPlayingWrapper>
      <RowContents>
      <WholePageContainer>

      <BlinqBanner href="https://s.blinq.me/cmpyr6skd00eh0cs6kzflovx9?bs=icl" target="_blank" rel="noopener noreferrer">
        <BlinqLeft>
          <BlinqQRWrapper>
            <BlinqQR src={require('./images/qrcode.png')} alt="Blinq QR Code" />
          </BlinqQRWrapper>
          <BlinqPhotoCard>
            <BlinqPhoto src={require('./images/selfie.jpeg')} alt="Sadie Levy" />
            <BlinqText>
              <BlinqTitle>Sadie Levy</BlinqTitle>
              <BlinqSub>Software Engineer</BlinqSub>
              <BlinqSub>Boston, MA</BlinqSub>
              <BlinqArrow>Scan or tap to save my contact ↗</BlinqArrow>
            </BlinqText>
          </BlinqPhotoCard>
        </BlinqLeft>
      </BlinqBanner>

      <CenterContents>
        <ColAboutMe>
        
        <p style={{color: 'primaryBlue'}} className='font-face-body'>My background spans software engineering, product development, UI/UX design, and technical program management, which means I'm often happiest working on messy, ambiguous problems that require both technical depth and creative thinking.</p>

        <p style={{color: 'primaryBlue'}} className='font-face-body'>Over the past few years I've helped launch AI-powered platforms, renewable energy initiatives, startup products, and consumer-facing experiences. From leading user experience for startups as a freelancer, to helping deliver the first energy-autonomous island in Greece in a TPM role at Tesla, to building internal AI tools as a Full-Stack Software Engineer at John Hancock, I've always been drawn to innovation.</p>

        <p style={{color: 'primaryBlue'}} className='font-face-body'>When I'm not working, I'm usually planning my next trip, reading fantasy novels, drawing at my easel, baking my friends' birthday cakes, playing board games or with my cat, + listening to live music.</p>
        
        <p style={{color: 'primaryBlue'}} className='font-face-body'>Take a look around to see some of the projects I've worked on.</p>

        <p style={{color: 'primaryBlue'}} className='font-face-body'> (˚ˎ 。7  This custom website was made with react.js, html, css, & designed with Figma ˙ᵕ˙</p> 
        <NowPlayingMobile>
          <NowPlaying />
        </NowPlayingMobile>
        </ColAboutMe>

      </CenterContents>

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
      </WholePageContainer>
      </RowContents>
      </>
    );
  }
}
 
export default Home;
