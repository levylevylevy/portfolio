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
 height: 641px;

`;

const ImageContainer = styled.div`
width: 300px;
height: 300px;
`;

const AtemImage = styled.img`
  display: flex;
  max-height: 90%;
  max-width: 90%;

`;

class PhotoGallery extends Component {
  render() {
    return (
      <GalleryContainer>
<Row>
<ImageContainer>
<AtemImage src={require('./images/atem13.jpg')} />
</ImageContainer>
<ImageContainer>
<AtemImage src={require('./images/atem1.jpg')} />
</ImageContainer>
<ImageContainer>
<AtemImage src={require('./images/atem5.jpg')} />
</ImageContainer>
<ImageContainer>
<AtemImage src={require('./images/atem6.jpg')} />
</ImageContainer>
<ImageContainer>
<AtemImage src={require('./images/atem2.jpg')} />
</ImageContainer>
<ImageContainer>
<AtemImage src={require('./images/atem3.jpg')} />
</ImageContainer>
<ImageContainer>
<AtemImage src={require('./images/atem4.jpg')} />
</ImageContainer>
<ImageContainer>
<AtemImage src={require('./images/atem7.jpg')} />
</ImageContainer>
<ImageContainer>
<AtemImage src={require('./images/atem8.jpg')} />
</ImageContainer>
<ImageContainer>
<AtemImage src={require('./images/atem9.jpg')} />
</ImageContainer>
<ImageContainer>
<AtemImage src={require('./images/atem10.jpg')} />
</ImageContainer>
<ImageContainer>
<AtemImage src={require('./images/atem11.jpg')} />
</ImageContainer>
<ImageContainer>
<AtemImage src={require('./images/atem12.jpg')} />
</ImageContainer>
</Row>
</GalleryContainer>

    );
  }
}
  
  export default PhotoGallery;




