import React, { Component } from "react";
import styled from "styled-components";
import { primaryBlue, backgroundColorMain } from "../../colors.js";
import CardButton from '../../components/ui/CardButton.js';

const CardContainers = styled.div`
display: block;

@media (max-width: 768px) {
  width: 100%;
  height: auto;
}
`;

const ProjectCard = styled.div`
position: absolute; 
width: 641px;
min-height: 265px;
height: auto;
background: #FAF8F5;
box-shadow: 0px 1.5px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
padding: 24px;

@media (max-width: 768px) {
  position: relative;
  width: 100%;
  height: auto;
  min-height: auto;
  box-sizing: border-box;
}
`;

const CardTitle = styled.h1`
display: flex;
flex-direction: column;
margin-top: 32px;
margin-bottom: -14px;

@media (max-width: 768px) {
  margin-top: 8px;
  margin-bottom: 0;
}
`;

const Col = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: -50px;

@media (max-width: 768px) {
  margin-top: 0;
  width: 100%;
}
`;

const Row = styled.div`
display: flex;
flex-direction: row;
gap: 78px;
min-height: 260px;
height: auto;

@media (max-width: 768px) {
  flex-direction: column;
  gap: 16px;
  height: auto;
}
`;

const RowButtons = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
flex-wrap: wrap;
`;

const ExamplePhoto = styled.img`
display: flex;
width: 220px;
height: auto;
border-radius: 10px;
align-self: flex-start;

@media (max-width: 768px) {
  width: 100%;
  max-width: 220px;
  align-self: center;
}
`;

class MusicaCard extends Component {
  render() {
    return (
      <>
        <CardContainers>
          <ProjectCard>
            <Row>
              <Col>
                <CardTitle className="font-face-header1" style={{ color: primaryBlue }}>  Musica</CardTitle>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 6, marginBottom: 4 }}>
                  <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(28,25,23,0.06)", borderRadius: 100, padding: "3px 10px", fontSize: 11, fontWeight: 600, color: "#3D3530", letterSpacing: "0.03em" }}>Figma/Contra Makeathon 2025</span>
                </div>

                <p className="font-face-subtitle" style={{ color: primaryBlue, marginTop: 6 }}>  Musica is a collaborative music whiteboarding app for musical ideation and remote jamming.</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 8, marginBottom: 6 }}>
                  {["Figma Make", "Supabase"].map(tag => (
                    <span key={tag} style={{ display: "inline-flex", alignItems: "center", background: "rgba(28,25,23,0.06)", borderRadius: 100, padding: "2px 9px", fontSize: 10, fontWeight: 600, color: "#3D3530", letterSpacing: "0.03em" }}>{tag}</span>
                  ))}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 10 }}>
                  {["UI/UX", "Product Design", "Prompt Engineer", "Coding"].map(role => (
                    <span key={role} style={{ display: "inline-flex", alignItems: "center", background: "rgba(74,125,168,0.10)", borderRadius: 100, padding: "2px 9px", fontSize: 10, fontWeight: 600, color: primaryBlue, letterSpacing: "0.03em" }}>{role}</span>
                  ))}
                </div>

                <RowButtons>
                  <CardButton href="https://www.figma.com/proto/YOUR_FIGMA_LINK" target="_blank" rel="noopener noreferrer" variant="outline">Figma Preview ↗</CardButton>
                  <CardButton href="https://www.youtube.com/YOUR_YOUTUBE_LINK" target="_blank" rel="noopener noreferrer" variant="outline">Walkthrough ↗</CardButton>
                </RowButtons>

              </Col>
              <ExamplePhoto src={require('../../../src/images/musicalogo.png')} />
            </Row>
          </ProjectCard>
        </CardContainers>
      </>
    );
  }
}

export default MusicaCard;
