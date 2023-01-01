import { secondaryGold } from "./colors";
import styled from "styled-components";
import React, { Component } from "react";
import PhotoAlbum from "react-photo-album";

//Components

const GalleryContainer = styled.div`
// margin-bottom: -500px;
`;

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




