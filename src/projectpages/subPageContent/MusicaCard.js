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
height: 265px;
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
height: 260px;

@media (max-width: 768px) {
  flex-direction: column;
  gap: 16px;
  height: auto;
}
`;

const ExamplePhoto = styled.img`
display: flex;
width: 130px;
min-height: 260px;
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
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "#FEF3C7", border: "1px solid #FDE68A", borderRadius: 100, padding: "3px 10px", fontSize: 11, fontWeight: 700, color: "#92400E", letterSpacing: "0.04em" }}>Figma/Contra Makeathon 2025</span>
                </div>

                <p className="font-face-subtitle" style={{ color: primaryBlue, marginTop: 6 }}>  Details coming soon.</p>

              </Col>
            </Row>
          </ProjectCard>
        </CardContainers>
      </>
    );
  }
}

export default MusicaCard;
