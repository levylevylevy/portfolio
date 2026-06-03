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
import HackathonPageBeanpot from './projectpages/hackbeanpot'
import HackathonPageHop from './projectpages/hophacks'

import MakerPage from './projectpages/makerProjects'
import ExperiencePage from './projectpages/workExperience'
import ExperiencePageTesla from './projectpages/workExperienceTesla'
import ExperiencePageWillow from './projectpages/workExperienceWillow'
import ExperiencePageAtem from './projectpages/workExperienceAtem'
import ExperiencePageSharkNinja from './projectpages/workExperienceSharkNinja'
import MakerKevin from './projectpages/makerProjectsKevin';
import MakerFrog from './projectpages/makerProjectsFrogComputer';
import MakerTurntable from './projectpages/makerProjectsTurntAble';
import TilitiCaseStudy from './projectpages/caseStudyContent/tilitiCaseStudy';
import HareOfRuin from './projectpages/subPageContent/HareOfRuinCard'
import MakerPageGames from './projectpages/games'


const AppContents = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  gap: 40px;
  margin-right: 94px;
  margin-top: 34px;
  color: ${primaryBlue};
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

            to="/portfolio/projects/workexperience/generate/" 
            className = "font-face-navFont" 
            style={({ isActive }) => ({
              color: isActive || window.location.href.includes('/projects/') ? secondaryGold : primaryBlue,
              textDecoration: isActive || window.location.href.includes('/projects/') ? 'underline' : 'none',
            })}> 
              Projects</NavLink>

            
            </div>
          
{/* {this.window.location.href.includes("/portfolio/projects")
? color: secondaryGold
: color: primaryBlue,
} */}
            
          </AppContents>
          
          <div className="content">
          <Routes>
          <Route exact path="/portfolio/" element={<Home/>}/> 
          <Route path="/portfolio/projects/workexperience/generate" element={<ExperiencePage/>}/> 
          <Route path="/portfolio/projects/workexperience/tesla" element={<ExperiencePageTesla/>}/> 
          <Route path="/portfolio/projects/workexperience/willow" element={<ExperiencePageWillow/>}/> 
          <Route path="/portfolio/projects/workexperience/atem" element={<ExperiencePageAtem/>}/> 
          <Route path="/portfolio/projects/workexperience/sharkninja" element={<ExperiencePageSharkNinja/>}/> 

          <Route path="/portfolio/projects/hackathons/hackmit" element={<HackathonPage />} />
          <Route path="/portfolio/projects/hackathons/hophacks" element={<HackathonPageHop />} />
          <Route path="/portfolio/projects/hackathons/hackbeanpot" element={<HackathonPageBeanpot />} />

          <Route path="/portfolio/projects/makerprojects/games" element={<MakerPageGames/>} />
          <Route path="/portfolio/projects/makerprojects/phonebox" element={<MakerPage/>} />
          <Route path="/portfolio/projects/makerprojects/turntable" element={<MakerTurntable/>} />
          <Route path="/portfolio/projects/makerprojects/frogcomputer" element={<MakerFrog/>} />
          <Route path="/portfolio/projects/makerprojects/kevin" element={<MakerKevin/>} />
          {/* <Route path="/tiliti-case-study" element={<TilitiCaseStudy/>} /> */}
          <Route path ="/portfolio/projects/games/hareofruin" element={<HareOfRuin/>}/>
          <Route path="/portfolio/tiliti-case-study" element={<TilitiCaseStudy/>} />

          </Routes>
          </div>

          {/* <div className="case-studies">
            <Routes>
            <Route path="/portfolio/tiliti-case-study" element={<TilitiCaseStudy/>} />
            </Routes>
          </div> */}
        </div>
        </BrowserRouter>
        
    );
  }
}
 
export default Nav;
