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

class PhotoGalleryTurnt extends Component {
  render() {
    return (
      <GalleryContainer>
<Row>
<ImageContainer>
<AtemImage src={require('./images/turntable_orig.jpg')} />
</ImageContainer>
<ImageContainer>
<AtemImage src={require('./images/crank-poc_orig.jpg')} />
</ImageContainer>
<ImageContainer>
<AtemImage src={require('./images/buttons-poc_orig.jpg')} />
</ImageContainer>
</Row>
</GalleryContainer>

    );
  }
}
  
  export default PhotoGalleryTurnt;




