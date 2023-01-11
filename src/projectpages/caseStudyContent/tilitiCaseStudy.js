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
  import {ChevronLeft, ChevronRight, ChevronsRight, ChevronsLeft, XCircle, Maximize, Edit3, CornerRightUp, GitHub, Linkedin, Mail} from 'react-feather';
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

const DisplayVideo= styled.video`
display: flex;
flex-direction: column;
width: 30%;
margin-top: 20px;
background-color: #E0E0E2;
border-radius: 20px;
align-items: center;
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

const TopSegment=styled.div`
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


const TopSegmentCol=styled.div`
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

const TopSegmentColVideos=styled.div`
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
<TextWrap className = "font-face-subtitle">A new connected product allowing small business owners in India to transport their goods affordably and sustainably</TextWrap>

{/* <RowInfo>
    <TextWrapBody className = "font-face-body">UI/UX Designer, Brand Designer</TextWrapBody>
    <TextWrapBody className = "font-face-body">January 2021 - May 2021</TextWrapBody>
    <TextWrapBody className = "font-face-body">Figma, Adobe Illustrator, After Effects</TextWrapBody>
</RowInfo> */}
</Col>
        </Row>

        </TopSegment>
        <TopSegmentCol>
       <ChangeMarginText className = "font-face-header2">Overview</ChangeMarginText> 
       <TextWrapBody className = "font-face-body" style={{color: secondaryGold}}>Scope: January 2021 - May 2021</TextWrapBody>
       <TextWrapBody className = "font-face-body">Tiliti is a startup developing an electronic bike that can carry large amounts of goods for small business owners in India. 
       Additionally, the bike will have a network of charging stations at which the user can recharge the bike's built in batteries. Tiliti's technology will allow small business owners who need a sustainable and affordable solution for delivering goods to achieve their goals. 
       While our client was developing the physical bike, they realized the user would need a mobile app to fully use many of the features of the bike. </TextWrapBody>
       <TextWrapBody className = "font-face-body">I worked as a UI/UX designer with 1 other designer to develop the user experience of the connected product and the app itself + 6 engineers to develop our design into working software.</TextWrapBody>
       </TopSegmentCol>
       <TopSegmentCol>
       
       <ChangeMarginText className = "font-face-header2">Problem</ChangeMarginText> 
       <TextWrapBody className = "font-face-body">Small business owners in India cannot transport large amounts of goods. They use scooters or motorcyles to transport goods, and can only carry a little at a time. The options are also not sustainable, which is an important value of the client and of a modern transportation infrastructure system.</TextWrapBody>
       </TopSegmentCol>
       <TopSegmentCol>
       
       <ChangeMarginText className = "font-face-header2">Research</ChangeMarginText> 
       <TextWrapBody className = "font-face-body">We researched competitors in the sustainable transportation field.
       One competitor was called Bolt. It is a sustainable delivery service, however delivery drivers sign up to deliver for small businesses through the app, instead of small business owners getting the vehicles themselves. Because of the focus on the business owner itself, Tiliti is for bigger business related loads, rather than the small one-product delivery at a time that a service like Bolt provides. Tiliti's unique network of charging stations will also be emphasized within the app.</TextWrapBody>
       </TopSegmentCol>
       <TopSegmentCol>
      
       <ChangeMarginText className = "font-face-header2">Personas</ChangeMarginText> 
       <TextWrapBody className = "font-face-body">In order to clarify the user base, we created personas to narrow down the user of the app. During this process we met with the client with specific, prepared questions, to make sure we fully understood their user base's needs and problems.</TextWrapBody>
       <TextWrapBody className = "font-face-body">We narrowed down our app's user to the bike owner. The owner can login/signup to the app, use the dashboard, enter ride mode, submit payments, interact with the charging station map, submit maintenance requests, and edit their profile/settings.</TextWrapBody>
       <ColImages>
       <Carousel>
       <CarouselItem><ExamplePhoto2 src={require('../../../src/images/UX Persona.png')} /></CarouselItem>
       <CarouselItem><ExamplePhoto2 src={require('../../../src/images/UX Persona-2.png')} /></CarouselItem>
       <CarouselItem><ExamplePhoto2 src={require('../../../src/images/UX Persona-3.png')} /></CarouselItem>
      </Carousel>

       </ColImages>
       </TopSegmentCol>
       <TopSegmentCol>
       
       <ChangeMarginText className = "font-face-header2">Flow Diagram</ChangeMarginText> 
       <TextWrapBody className = "font-face-body">We created a workflow diagram in order to come up with the best user flow for the bike owner, and have a source of truth to pass off to the software engineers as they programmed the flow of the app.</TextWrapBody>
       <ColImages>
       <ExamplePhoto2 src={require('../../../src/images/Persist Energy Workflow.png')} />
       </ColImages>
       </TopSegmentCol>
       <TopSegmentCol>
       
       <ChangeMarginText className = "font-face-header2">Lo-fi Flows</ChangeMarginText> 
       <p className = "font-face-body">We began with the lo-fi stage, creating a low fidelity version of our workflow diagram. We worked out the details of the user interactions between pages and on a certain pages. This was a very iterative process, and we went through many different versions, of which some examples are below!</p>
       <ColImages>
       
       <Carousel>
       <CarouselItem>
       <ColInfo>
       <TextWrapBody className = "font-face-body">Signup/Login</TextWrapBody>
       <ExamplePhoto3 src={require('../../../src/images/tilitiloginflow.png')} />
       </ColInfo>
       </CarouselItem>

       <CarouselItem>
       <ColInfo>
       <TextWrapBody className = "font-face-body">Onboard</TextWrapBody>
       <ExamplePhoto3 src={require('../../../src/images/tilitionboardflow.png')} />
       </ColInfo>
       </CarouselItem>
       
       <CarouselItem>
       <ColInfo>
       <TextWrapBody className = "font-face-body">User Dashboard</TextWrapBody>
       <ExamplePhoto3 src={require('../../../src/images/tilitidashboardflow.png')} />
       </ColInfo>
       </CarouselItem>

       <CarouselItem>
       <ColInfo>
       <TextWrapBody className = "font-face-body">Ride Mode</TextWrapBody>
       <ExamplePhoto3 src={require('../../../src/images/tilitiridemode.png')} />
       </ColInfo>
       </CarouselItem>

       <CarouselItem>
       <ColInfo>
       <TextWrapBody className = "font-face-body">Charging Station Map</TextWrapBody>
       <ExamplePhoto3 src={require('../../../src/images/tilitimapmode.png')} />
       </ColInfo>
       </CarouselItem>

       <CarouselItem>
       <ColInfo>
       <TextWrapBody className = "font-face-body">Payment</TextWrapBody>

       <ExamplePhoto3 src={require('../../../src/images/tilitiinsights.png')} />
       </ColInfo>
       </CarouselItem>

       <CarouselItem>
       <ColInfo>
       <TextWrapBody className = "font-face-body">Profile</TextWrapBody>
       <ExamplePhoto3 src={require('../../../src/images/tilitiprofile.png')} />
       </ColInfo>
       </CarouselItem>
       </Carousel>

       </ColImages>       
       </TopSegmentCol>
       <TopSegmentCol>
       
       <ChangeMarginText className = "font-face-header2">User Testing</ChangeMarginText> 
       <TextWrapBody className = "font-face-body">In order to user test, we created a version of our Lo-Fi design with Lorem Ipsum language. This would test that our app could clearly communicate its functionalities without language signaling. This was important, as we were designing an app that would mainly be used in India. </TextWrapBody>
       <TextWrapBody className = "font-face-body"> Additionally, we prototyped our Figma design so it was interactive. Then, we imported our prototype into the user testing product Useberry. Within Useberry, we could make a user test for completing a specific task. For example, we made a test for the task of logging in. The user would click through the login flow until they completed the goal. We gathered data on completion rates of our tasks. We also created question forms from which we gathered written feedback from the users. Having this easy to use, remote user testing available was extremely important, as it allowed us to user test with actual small business owners in India who want to use the product, while we could stay located in Boston!</TextWrapBody>
       <TextWrapBody className = "font-face-body">Our user testing led to important insights. For instance, we figured out that the user interaction on the charging map page was not clear to users. There was a very low completion rate on our task of finding the nearest charging station. This led us to redesign the charging map page to have more user-friendly icons and buttons.</TextWrapBody>
       </TopSegmentCol>
       <TopSegmentCol>
      
       <ChangeMarginText className = "font-face-header2">Brand</ChangeMarginText> 
       <TextWrapBody className = "font-face-body">We created a consistent brand, choosing dark mode to match the aesthetics of the physical bike. After communicating with the clients and and obtaining a sign off, we developed a brand book which would inform our decisions in turning our Lo-Fi design to a Hi-Fi design. We decided on a dark blue background and bright neon components. We also used components in Figma, so that if we changed our source component, all the child components would show that change. This allowed us to continue iterating on our hi-fi design in a clean and organized, component-based way.</TextWrapBody>

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
    
       <ChangeMarginText className = "font-face-header2" >Hi-fidelity Design</ChangeMarginText>
       <ColImages>
               {/* <DisplayVideo width="250" controls autoplay><source src={require('../../../src/videos/tiliti-hifi-signin.mp4')} type="video/mp4"/></DisplayVideo>
               <DisplayVideo width="250" controls autoplay><source src={require('../../../src/videos/tiliti-hifi-dashboard.mp4')} type="video/mp4"/></DisplayVideo>
               <DisplayVideo width="250" controls autoplay><source src={require('../../../src/videos/tiliti-hifi-map.mp4')} type="video/mp4"/></DisplayVideo>
               <DisplayVideo width="250" controls autoplay><source src={require('../../../src/videos/tiliti-payment-hifi.mp4')} type="video/mp4"/></DisplayVideo>
               <DisplayVideo width="250" controls autoplay><source src={require('../../../src/videos/tiliti-hifi-maintenance.mp4')} type="video/mp4"/></DisplayVideo>
               <DisplayVideo width="250" controls autoplay><source src={require('../../../src/videos/tiliti-hifi-profile.mp4')} type="video/mp4"/></DisplayVideo> */}
       <TextWrapBody className = "font-face-body">Our final design consists of 7 flows, in which our branding has been applied to create a high fidelity design. The first flow is the sign-in/log-in process. Tiliti uses 2 factor authentication in order to verify the login.</TextWrapBody>
       <TextWrapBody className = "font-face-body">The second flow is the onboarding process. Tiliti brings the user through an interactive tutorial on what functionalities are available in the app, from how to view their payments on the app to how they can remove batteries from the bike itself. Due to clear communication and getting ahead of scope creep, I was able to create the illustrations of the bike as a last minute addition to the scope, while still finishing within our initial timeline for the app. </TextWrapBody>
       <TextWrapBody className = "font-face-body">The third flow is the dashboard. The user can view stats on battery health, bike usage, and past trips. When the app detects that the bike is moving, a speedometer pops up and the user enters ride mode. We made this full screen in order to deter distractoins, however the user can swap out of ride mode and go back to the app if needed.</TextWrapBody>
       <TextWrapBody className = "font-face-body">The fourth flow is the charging station map. The user can favorite stations, search for stations, move around the map, and see stats at a specific station, like how many chargers are available for use there. The user can also submit a service request if something is wrong at that station.</TextWrapBody>
       <TextWrapBody className = "font-face-body">The fifth flow is bike maintenance. The user can view a FAQ section about their bike. The user can also submit a help request and attach photos. If it is an emergency, there is also an option to call a help line.</TextWrapBody>
       <TextWrapBody className = "font-face-body">The sixth flow is payment. The user had to purchase their bike previous to signing up on the app, but they can make it more affordable through paying in increments on the app. They also pay for battery charge sessions on the app.</TextWrapBody>
       <TextWrapBody className = "font-face-body">The seventh flow is profile/settings. The user can view their bike ID information, change their settings or profile info, and control location permissions here. The user can also send feedback.</TextWrapBody>

<DisplayVideo width="200" controls autoplay><source src={require('../../../src/videos/tiliti-hifi-full.mp4')} type="video/mp4"/></DisplayVideo>
        {/* <TilitiGif src={require('../../../src/videos/tiliti-hifi-signin_AdobeExpress.gif')} />

        <TilitiGif src={require('../../../src/videos/tiliti-hifi-home_AdobeExpress.gif')} />
        <TilitiGif src={require('../../../src/videos/tiliti-hifi-map_AdobeExpress.gif')} />
        <TilitiGif src={require('../../../src/videos/tiliti-payment-hifi_AdobeExpress.gif')} />
        <TilitiGif src={require('../../../src/videos/tiliti-hifi-maintenance_AdobeExpress.gif')} />
        <TilitiGif src={require('../../../src/videos/tiliti-hifi-profile_AdobeExpress.gif')} /> */}

    

               </ColImages> 


    </TopSegmentColVideos>
       <TopSegmentCol>
     
       <ChangeMarginText className = "font-face-header2">Learnings</ChangeMarginText> 
       <TextWrapBody className = "font-face-body">This project taught me a lot about the importance of communication with the client. At the beginning of the project, our team wasn't very sure about what functionalities would be needed for the app. Since it was hard to find time to meet due to the time difference between Boston and India, we prepared very specific questions for our meetings with the client, in order to make the most of our limited time. It is very important to have open communication with the client. For instance, it was important that we got the branding approved before applying it to our hi-fi's, otherwise that would have been time wasted if they wanted the branding changed. The open communication also allowed us to get ahead of any scope-creep.</TextWrapBody>
       <TextWrapBody className = "font-face-body">Another important learning was about the importance of a component-based design. This made the iterative design process more efficient. We stopped running into issues with inconsistency and duplication when we implemented components. Additionally, throughout the process of designing the app, we were passing off designs to the software engineers so they could update their programmed version of our design. Components made this hand-off process much easier for everyone involved. There was a clear, singular place in our Figma where the most recent iterations of components could be found. This way, the software engineers could make a component, and if we changed our parent component in Figma, they could simply edit that one component to change it across their code base. This cut down on a lot of time and confusion for the software engineers.</TextWrapBody>
       </TopSegmentCol>
       

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
       </>
      );
    }
}

export default TilitiCaseStudy; 
