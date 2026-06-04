import React, {useState} from 'react';
import {ArrowUp} from 'react-feather';
import styled from 'styled-components';
import { secondaryGold } from './colors';

const IconArrowUp = styled(ArrowUp)`
  height: 22px;
  width: 22px;
  stroke: ${secondaryGold};
  stroke-width: 1.5px;
  display: block;
  margin: 0 auto;
`;

const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  max-height: ${({ visible }) => (visible ? '36px' : '0px')};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: max-height 0.3s ease, opacity 0.3s ease;
  cursor: ${({ visible }) => (visible ? 'pointer' : 'default')};
  padding: ${({ visible }) => (visible ? '4px 0' : '0')};
`;
  
const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <ArrowWrapper visible={visible} onClick={visible ? scrollToTop : undefined}>
      <IconArrowUp />
    </ArrowWrapper>
  );
};
  
export default ScrollButton;