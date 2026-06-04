//Generate Tiliti card
import React from "react";
import { useState } from 'react';
import CaseStudyModal from "../caseStudyContent/CaseStudyModal.js";
import TilitiCaseStudy from '../caseStudyContent/tilitiCaseStudy';
import CardButton from '../../components/ui/CardButton.js';
import styled from "styled-components";
import { primaryBlue, backgroundColorMain } from "../../colors.js";

const CardContainers = styled.div`
  display: block;
`;

const ProjectCard = styled.div`
  position: absolute; 
  width: 641px;
  height: 265px;
  background: #FAF8F5;
  box-shadow: 0px 1.5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 24px;

  @media (max-width: 968px) {
    width: 90%;
    max-width: 550px;
    height: auto;
    min-height: 265px;
  }

  @media (max-width: 768px) {
    width: 85%;
    padding: 20px;
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 16px;
  }
`;

const CardTitle = styled.h1`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  margin-bottom: -14px;

  @media (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: -10px;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: -50px;

  @media (max-width: 768px) {
    margin-top: -30px;
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
    gap: 20px;
    height: auto;
  }
`;

const ExamplePhoto = styled.img`
  display: flex;
  width: 130px;
  min-height: 260px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 200px;
    min-height: auto;
    height: auto;
    align-self: center;
  }
`;

const tag = {
  display: "inline-flex",
  alignItems: "center",
  background: "rgba(28,25,23,0.06)",
  borderRadius: 100,
  padding: "3px 10px",
  fontSize: 11,
  fontWeight: 600,
  color: "#3D3530",
  letterSpacing: "0.03em",
};

function GenerateCards() {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <>
      <CardContainers>
        <ProjectCard>
          <Row>
            <Col>
              <CardTitle className="font-face-header1" style={{ color: primaryBlue }}>TILITI</CardTitle>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8, marginBottom: 4 }}>
                <span style={tag}>UI/UX Design</span>
                <span style={tag}>Figma · Illustrator</span>
                <span style={tag}>Generate Studio · 2021</span>
              </div>
              <p className="font-face-subtitle" style={{ color: primaryBlue, marginTop: 6 }}>
                A mobile app to help small business owners in India transport their goods on Tiliti's sustainable e-bike.
              </p>
              <CardButton onClick={togglePopup} variant="primary">Read Case Study</CardButton>
              <CaseStudyModal isOpen={isOpen} onClose={togglePopup}>
                <TilitiCaseStudy />
              </CaseStudyModal>
            </Col>
            <ExamplePhoto src={require('../../../src/images/tiliti-home-betterquality.png')} />
          </Row>
        </ProjectCard>
      </CardContainers>
    </>
  );
}

export default GenerateCards;