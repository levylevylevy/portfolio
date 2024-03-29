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

const AtemVideo = styled.div`
width: 100px;
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
<ImageContainer>
<AtemImage src={require('./images/ali-deucher-illustration-updated_orig.jpg')}/>
</ImageContainer>
<ImageContainer><iframe width="337" height="200" src="https://www.youtube.com/embed/H7dh6g_Y-HU" title="ATEM Rubiks Animation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></ImageContainer>

</Row>

</GalleryContainer>


    );
  }
}
  
  export default PhotoGallery;




