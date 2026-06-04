import styled from "styled-components";
import React, { Component } from "react";

const GalleryContainer = styled.div``;

const Row = styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 row-gap: 20px;
 width: 641px;
 height: 160px;
 
 @media (max-width: 968px) {
   width: 90%;
   max-width: 550px;
   height: auto;
 }
 
 @media (max-width: 768px) {
   width: 100%;
   row-gap: 15px;
   flex-direction: column;
 }

`;

const ImageContainer = styled.div`
width: 300px;
height: 160px;

@media (max-width: 768px) {
  width: 100%;
  height: auto;
}
`;

const AtemImage = styled.img`
  display: flex;
  max-height: 90%;
  max-width: 90%;
  
  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 100%;
  }

`;

class PhotoGalleryKevin extends Component {
  render() {
    return (
      <GalleryContainer>
<Row>
<ImageContainer>
<AtemImage src={require('./images/kevinautocad.jpg')} />
</ImageContainer>
<ImageContainer>
<AtemImage src={require('./images/kevin-ss.jpg')} />
</ImageContainer>
<ImageContainer>
<iframe 
  height="480" 
  width="500" 
  src="https://www.youtube.com/embed/hFMq3_eoI2c" 
  title="KEVIN Robot Demo"
  style={{ maxWidth: '100%', height: 'auto' }}
></iframe>
</ImageContainer>
</Row>
</GalleryContainer>

    );
  }
}
  
  export default PhotoGalleryKevin;




