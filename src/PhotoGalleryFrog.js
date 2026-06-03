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

`;

const ImageContainer = styled.div`
width: 300px;
height: 160px;
`;

const AtemImage = styled.img`
  display: flex;
  max-height: 90%;
  max-width: 90%;

`;

class PhotoGalleryFrog extends Component {
  render() {
    return (
      <GalleryContainer>
<Row>
<ImageContainer>
<AtemImage src={require('./images/frog-sketches_orig.jpg')} />
</ImageContainer>
<ImageContainer>
<AtemImage src={require('./images/final-frog-3d-design_orig.jpg')} />
</ImageContainer>
<ImageContainer>
<AtemImage src={require('./images/frog-computer-package_orig.jpg')} />
</ImageContainer>
</Row>
</GalleryContainer>

    );
  }
}
  
  export default PhotoGalleryFrog;




