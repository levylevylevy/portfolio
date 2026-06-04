import './App.css';
import React, { Component } from "react";
import {
  Route,
  Routes,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Home from "./Home";
import styled from 'styled-components';
import { primaryBlue, secondaryGold } from './colors';
import HackathonPage from './projectpages/Hackathons'

import ExperiencePage from './projectpages/workExperience'
import ExperiencePageAtem from './projectpages/workExperienceAtem'
import TilitiCaseStudy from './projectpages/caseStudyContent/tilitiCaseStudy';
import HareOfRuin from './projectpages/subPageContent/HareOfRuinCard'
import MakerPageGames from './projectpages/games'
import Guestbook from './Guestbook'


const AppContents = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  gap: 40px;
  margin-right: 94px;
  margin-top: 34px;
  color: ${primaryBlue};
  
  @media (max-width: 968px) {
    margin-right: 50px;
    gap: 30px;
  }
  
  @media (max-width: 768px) {
    justify-content: center;
    margin-right: 0;
    gap: 25px;
    margin-top: 20px;
  }
  
  @media (max-width: 480px) {
    gap: 20px;
    margin-top: 15px;
  }
`;

class Nav extends Component {
  render() {
    return (
 
        <BrowserRouter>
        <div 
        style={{
          fontSize: '16px',

        }}>
          <AppContents >
            <div>
            <NavLink  to="/portfolio/"  style={({ isActive }) => ({
              
              color: isActive? secondaryGold : primaryBlue,
              textDecoration: isActive? 'underline' :'none',
              font: isActive? 'font-face-navFont' : 'font-face-navFont'
            })} className = "font-face-navFont">
              Home
              </NavLink>
              </div>
              <div>

            <NavLink                

            to="/portfolio/projects/hackathons/hackmit" 
            className = "font-face-navFont" 
            style={({ isActive }) => ({
              color: isActive || window.location.href.includes('/projects/') ? secondaryGold : primaryBlue,
              textDecoration: isActive || window.location.href.includes('/projects/') ? 'underline' : 'none',
            })}> 
              Projects</NavLink>

            </div>

            <div>
            <NavLink
              to="/portfolio/guestbook"
              className="font-face-navFont"
              style={({ isActive }) => ({
                color: isActive ? secondaryGold : primaryBlue,
                textDecoration: isActive ? 'underline' : 'none',
              })}>
              Guestbook
            </NavLink>
            </div>
            
          </AppContents>
          
          <div className="content">
          <Routes>
          <Route exact path="/portfolio/" element={<Home/>}/> 
          <Route path="/portfolio/projects/workexperience/generate" element={<ExperiencePage/>}/> 
          <Route path="/portfolio/projects/workexperience/atem" element={<ExperiencePageAtem/>}/> 

          <Route path="/portfolio/projects/hackathons/hackmit" element={<HackathonPage />} />
          <Route path="/portfolio/projects/hackathons/hophacks" element={<HackathonPage />} />
          <Route path="/portfolio/projects/hackathons/hackbeanpot" element={<HackathonPage />} />

          <Route path="/portfolio/projects/makerprojects/games" element={<MakerPageGames/>} />
          <Route path ="/portfolio/projects/games/hareofruin" element={<HareOfRuin/>}/>
          <Route path="/portfolio/tiliti-case-study" element={<TilitiCaseStudy/>} />
          <Route path="/portfolio/guestbook" element={<Guestbook/>} />

          </Routes>
          </div>
        </div>
        </BrowserRouter>
        
    );
  }
}
 
export default Nav;
