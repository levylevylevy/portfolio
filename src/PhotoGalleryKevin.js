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
<iframe height="480" width="500" src="https://www.youtube.com/embed/hFMq3_eoI2c" title="KEVIN Robot Demo"></iframe></ImageContainer>
</Row>
</GalleryContainer>

    );
  }
}
  
  export default PhotoGalleryKevin;




