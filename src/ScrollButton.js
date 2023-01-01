import React, {useState} from 'react';
import {ArrowUp} from 'react-feather';
import { Button } from './Styles';
import styled from 'styled-components';
import { secondaryGold } from './colors';

const IconArrowUp = styled(ArrowUp)`
  height: 30px;
  width: 30px;
  stroke: ${secondaryGold};
  stroke-width: 1px;
  padding: 2px 0;
  display: block;
  vertical-align: top;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
`;
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button>
     <IconArrowUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </Button>
  );
}
  
export default ScrollButton;