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
width: 241.52px;
min-height: 480px;

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
width: 20%;
margin-top: 20px;
background-color: #E0E0E2;
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

class TilitiCaseStudy extends Component {
  render() {
    return (
      <>
        <WholePageContainer>
          <TopSegment>
            <Row>
              {/* update with larger photo */}
              <ExamplePhoto src={require('../../../src/images/tilitihomepagebetterquality.png')} />
              <Col>
                <ExamplePhoto2 src={require('../../../src/images/tilitilogo2.png')} />
                <TextWrap className="font-face-subtitle">A new connected product allowing small business owners in India to transport their goods affordably and sustainably</TextWrap>

                {/* <RowInfo>
    <TextWrapBody className = "font-face-body">UI/UX Designer, Brand Designer</TextWrapBody>
    <TextWrapBody className = "font-face-body">January 2021 - May 2021</TextWrapBody>
    <TextWrapBody className = "font-face-body">Figma, Adobe Illustrator, After Effects</TextWrapBody>
</RowInfo> */}
              </Col>
            </Row>

          </TopSegment>
          <TopSegmentCol>
            <ChangeMarginText className="font-face-header2">Overview</ChangeMarginText>
            <TextWrapBody className="font-face-body" style={{ color: secondaryGold }}>Scope: January 2021 - May 2021</TextWrapBody>
            <TextWrapBody className="font-face-body">Tiliti is a startup dedicated to creating an electronic bike designed specifically for small business owners in India. This innovative bike offers ample cargo capacity, enabling efficient transportation of goods. Complementing the bike is a network of charging stations strategically placed for convenient battery recharging. Tiliti's technology addresses the need for sustainable and cost-effective delivery solutions for small business owners.

</TextWrapBody>
            <TextWrapBody className="font-face-body">During the project, I collaborated as a UI/UX designer with one other designer to design the UI/UX of the bike's accompanying mobile app and a team of six software engineers to develop our design into working software. Our goal was to seamlessly integrate the bike's features into a user-friendly interface that optimizes functionality and user satisfaction.</TextWrapBody>
          </TopSegmentCol>
          <TopSegmentCol>

            <ChangeMarginText className="font-face-header2">Problem</ChangeMarginText>
            <TextWrapBody className="font-face-body">Small business owners in India face limitations when it comes to transporting large quantities of goods. Currently, they rely on scooters or motorcycles, which have limited carrying capacity. These options are also not aligned with the client's emphasis on sustainability, which is a vital aspect of modern transportation infrastructure systems.</TextWrapBody>
          </TopSegmentCol>
          <TopSegmentCol>

            <ChangeMarginText className="font-face-header2">Research</ChangeMarginText>
            <TextWrapBody className="font-face-body">We conducted competitor research in the sustainable transportation sector and identified Bolt as one of the competitors. Bolt operates as a sustainable delivery service, where delivery drivers sign up to deliver for small businesses through the app. In contrast, Tiliti caters to larger business-related loads, rather than the individual product delivery model offered by Bolt. Tiliti also highlights its distinctive network of charging stations within the app as a key feature.</TextWrapBody>
          </TopSegmentCol>
          <TopSegmentCol>

            <ChangeMarginText className="font-face-header2">Personas</ChangeMarginText>
            <TextWrapBody className="font-face-body">To refine our target audience, we developed personas to precisely identify the app's users. Through focused meetings with the client and strategic questioning, we gained a deep understanding of their specific needs and challenges.</TextWrapBody>
            <TextWrapBody className="font-face-body">We narrowed down our app's user base to bike owners. These users have access to various features, including login/signup, dashboard utilization, ride mode activation, payment submission, interaction with the charging station map, maintenance request submission, and profile/settings customization.</TextWrapBody>
            <ColImages>
              <Carousel>
                <CarouselItem><ExamplePhoto2 src={require('../../../src/images/UX Persona.png')} /></CarouselItem>
                <CarouselItem><ExamplePhoto2 src={require('../../../src/images/UX Persona-2.png')} /></CarouselItem>
                <CarouselItem><ExamplePhoto2 src={require('../../../src/images/UX Persona-3.png')} /></CarouselItem>
              </Carousel>

            </ColImages>
          </TopSegmentCol>
          <TopSegmentCol>

            <ChangeMarginText className="font-face-header2">Flow Diagram</ChangeMarginText>
            <TextWrapBody className="font-face-body">We crafted a comprehensive workflow diagram to optimize the user flow for bike owners and provide a definitive reference for the software engineers during app development.</TextWrapBody>
            <ColImages>
              <ExamplePhoto2 src={require('../../../src/images/Persist Energy Workflow.png')} />
            </ColImages>
          </TopSegmentCol>
          <TopSegmentCol>

            <ChangeMarginText className="font-face-header2">Lo-fi Flows</ChangeMarginText>
            <p className="font-face-body">During the initial lo-fi stage, we developed a low fidelity workflow diagram to outline user interactions and page details. This iterative process involved multiple versions, a few of which are illustrated below.</p>
            <ColImages>

              <Carousel>
                <CarouselItem>
                  <ColInfo>
                    <TextWrapBody className="font-face-body">Signup/Login</TextWrapBody>
                    <ExamplePhoto3 src={require('../../../src/images/tilitiloginflow.png')} />
                  </ColInfo>
                </CarouselItem>

                <CarouselItem>
                  <ColInfo>
                    <TextWrapBody className="font-face-body">Onboard</TextWrapBody>
                    <ExamplePhoto3 src={require('../../../src/images/tilitionboardflow.png')} />
                  </ColInfo>
                </CarouselItem>

                <CarouselItem>
                  <ColInfo>
                    <TextWrapBody className="font-face-body">User Dashboard</TextWrapBody>
                    <ExamplePhoto3 src={require('../../../src/images/tilitidashboardflow.png')} />
                  </ColInfo>
                </CarouselItem>

                <CarouselItem>
                  <ColInfo>
                    <TextWrapBody className="font-face-body">Ride Mode</TextWrapBody>
                    <ExamplePhoto3 src={require('../../../src/images/tilitiridemode.png')} />
                  </ColInfo>
                </CarouselItem>

                <CarouselItem>
                  <ColInfo>
                    <TextWrapBody className="font-face-body">Charging Station Map</TextWrapBody>
                    <ExamplePhoto3 src={require('../../../src/images/tilitimapmode.png')} />
                  </ColInfo>
                </CarouselItem>

                <CarouselItem>
                  <ColInfo>
                    <TextWrapBody className="font-face-body">Payment</TextWrapBody>

                    <ExamplePhoto3 src={require('../../../src/images/tilitiinsights.png')} />
                  </ColInfo>
                </CarouselItem>

                <CarouselItem>
                  <ColInfo>
                    <TextWrapBody className="font-face-body">Profile</TextWrapBody>
                    <ExamplePhoto3 src={require('../../../src/images/tilitiprofile.png')} />
                  </ColInfo>
                </CarouselItem>
              </Carousel>

            </ColImages>
          </TopSegmentCol>
          <TopSegmentCol>

            <ChangeMarginText className="font-face-header2">User Testing</ChangeMarginText>
            <TextWrapBody className="font-face-body">To conduct user testing, we created a Lorem Ipsum version of our Lo-Fi design, ensuring clear communication of app functionalities without language dependencies, which was crucial for our target audience in India.</TextWrapBody>
            <TextWrapBody className="font-face-body">Furthermore, we utilized interactive prototypes in Figma, which were imported into the user testing platform Useberry. Through Useberry, we designed task-specific user tests, such as 'login to your account', capturing completion rates and gathering written feedback from small business owners in India. This remote user testing capability proved invaluable, allowing us to gather insights while remaining in Boston.</TextWrapBody>
            <TextWrapBody className="font-face-body">The user testing process yielded significant findings, notably identifying a lack of clarity in user interaction on the charging map page. A low completion rate in locating the nearest charging station prompted us to revamp the page with more intuitive icons and buttons, enhancing user-friendliness.</TextWrapBody>
          </TopSegmentCol>
          <TopSegmentCol>

            <ChangeMarginText className="font-face-header2">Brand</ChangeMarginText>
            <TextWrapBody className="font-face-body">We established a cohesive brand by aligning with the dark mode aesthetics of the physical bike. Following client communication and approval, we created a brand book to guide the transformation from Lo-Fi to Hi-Fi design. Our design incorporated a dark blue background and vibrant neon components. Leveraging Figma's component functionality, any changes made to the source component automatically propagated to all child components. This streamlined approach enabled efficient iteration and maintained a clean, organized, and component-based design process.</TextWrapBody>

            <ColImages>
              <Carousel>
                <CarouselItem><ExamplePhoto2 src={require('../../../src/images/tiliti-brand-1.png')} /></CarouselItem>
                <CarouselItem><ExamplePhoto2 src={require('../../../src/images/tiliti-brand-2.png')} /></CarouselItem>
                <CarouselItem><ExamplePhoto2 src={require('../../../src/images/tiliti-brand-3.png')} /></CarouselItem>
                <CarouselItem><ExamplePhoto2 src={require('../../../src/images/tiliti-brand-4.png')} /></CarouselItem>
                <CarouselItem><ExamplePhoto2 src={require('../../../src/images/tiliti-brand-5.png')} /></CarouselItem>
                <CarouselItem><ExamplePhoto2 src={require('../../../src/images/tiliti-brand-6.png')} /></CarouselItem>
                <CarouselItem><ExamplePhoto2 src={require('../../../src/images/tiliti-brand-7.png')} /></CarouselItem>
                <CarouselItem><ExamplePhoto2 src={require('../../../src/images/tiliti-brand-8.png')} /></CarouselItem>
                <CarouselItem><ExamplePhoto2 src={require('../../../src/images/tiliti-brand-9.png')} /></CarouselItem>

              </Carousel>

            </ColImages>
          </TopSegmentCol>
          <TopSegmentColVideos>

            <ChangeMarginText className="font-face-header2" >Hi-fidelity Design</ChangeMarginText>
            <ColImages>
            <DisplayVideo width="250" controls autoplay><source src={require('../../../src/videos/sadie_levy_tiliti_final-figma.mp4')} type="video/mp4" /></DisplayVideo>

              {/* <DisplayVideo width="250" controls autoplay><source src={require('../../../src/videos/tiliti-hifi-signin.mp4')} type="video/mp4"/></DisplayVideo>
               <DisplayVideo width="250" controls autoplay><source src={require('../../../src/videos/tiliti-hifi-dashboard.mp4')} type="video/mp4"/></DisplayVideo>
               <DisplayVideo width="250" controls autoplay><source src={require('../../../src/videos/tiliti-hifi-map.mp4')} type="video/mp4"/></DisplayVideo>
               <DisplayVideo width="250" controls autoplay><source src={require('../../../src/videos/tiliti-payment-hifi.mp4')} type="video/mp4"/></DisplayVideo>
               <DisplayVideo width="250" controls autoplay><source src={require('../../../src/videos/tiliti-hifi-maintenance.mp4')} type="video/mp4"/></DisplayVideo>
               <DisplayVideo width="250" controls autoplay><source src={require('../../../src/videos/tiliti-hifi-profile.mp4')} type="video/mp4"/></DisplayVideo> */}
<TextWrapBody>
<TextWrapBody className="font-face-body">Our final design comprises 7 flows with applied branding, resulting in a high fidelity design. 
</TextWrapBody>
<TextWrapBody className="font-face-body">1. Sign-in/log-in process, which utilizes 2-factor authentication for login verification.
</TextWrapBody>
<TextWrapBody className="font-face-body">2. The onboarding process, where Tiliti guides the user through an interactive tutorial showcasing the app's functionalities. This includes instructions on viewing payments and removing batteries from the bike. Through effective communication and proactive scope management, I successfully incorporated illustrations of the bike into the project, staying within the initial timeline.
</TextWrapBody>
<TextWrapBody className="font-face-body">3. The dashboard, where users can access battery health, bike usage, and past trip statistics. When the bike is in motion, a full-screen speedometer appears, entering ride mode. However, users can easily switch back to the app if necessary, as we prioritize minimizing distractions.
</TextWrapBody>
<TextWrapBody className="font-face-body">4. The charging station map, enabling users to favorite, search, and navigate stations. Detailed statistics, such as the number of available chargers, are displayed for each station. Additionally, users can report any issues or submit service requests for a specific station.
</TextWrapBody>
<TextWrapBody className="font-face-body">5. Bike maintenance, providing users with a FAQ section for bike-related inquiries. Users can also submit help requests and attach photos. In case of emergencies, an option to contact a help line is available.
</TextWrapBody>
<TextWrapBody className="font-face-body">6. Payment, where users can make incremental payments for their purchased bike through the app. Furthermore, they can pay for battery charge sessions directly within the app.
</TextWrapBody>
<TextWrapBody className="font-face-body">7. Profile and settings section, allowing users to access their bike ID information, modify settings and profile details, and manage location permissions. Users can also provide feedback through this section.
</TextWrapBody>
</TextWrapBody>
              {/* <TilitiGif src={require('../../../src/videos/tiliti-hifi-signin_AdobeExpress.gif')} />

        <TilitiGif src={require('../../../src/videos/tiliti-hifi-home_AdobeExpress.gif')} />
        <TilitiGif src={require('../../../src/videos/tiliti-hifi-map_AdobeExpress.gif')} />
        <TilitiGif src={require('../../../src/videos/tiliti-payment-hifi_AdobeExpress.gif')} />
        <TilitiGif src={require('../../../src/videos/tiliti-hifi-maintenance_AdobeExpress.gif')} />
        <TilitiGif src={require('../../../src/videos/tiliti-hifi-profile_AdobeExpress.gif')} /> */}



            </ColImages>


          </TopSegmentColVideos>
          <TopSegmentCol>

            <ChangeMarginText className="font-face-header2">Learnings</ChangeMarginText>
            <TextWrapBody className="font-face-body">This project provided valuable insights into effective client communication. Despite challenges posed by the time difference between Boston and India, our team prioritized efficient meetings by preparing specific questions. Maintaining open communication with the client proved crucial, ensuring timely approval of branding and addressing potential scope creep.</TextWrapBody>
            <TextWrapBody className="font-face-body">Another key learning was the significance of a component-based design approach. Implementing components facilitated an efficient and consistent iterative design process. By centralizing the most recent iterations in Figma, software engineers could easily update their codebase, reducing time and confusion.</TextWrapBody>
            <TextWrapBody className="font-face-body">Overall, this project underscored the importance of proactive communication and streamlined design methodologies, resulting in enhanced collaboration and project success.</TextWrapBody>
          </TopSegmentCol>


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

export default TilitiCaseStudy; 
