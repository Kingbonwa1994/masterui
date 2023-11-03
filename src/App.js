import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const FullScreenSection = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor || 'white'};
  color: ${props => props.textColor || 'black'};
`;

const HeroComponent = () => {
  return (
    <FullScreenSection backgroundColor="blue" textColor="white">
      <h1>Hero Section</h1>
    </FullScreenSection>
  );
};

const Projects = () => {
  return (
    <FullScreenSection backgroundColor="green" textColor="white">
      <h1>Projects Section</h1>
    </FullScreenSection>
  );
};

const Contact = () => {
  return (
    <FullScreenSection backgroundColor="purple" textColor="white">
      <h1>Contact Section</h1>
    </FullScreenSection>
  );
};

const App = () => {
  const [projectsRef, projectsInView] = useInView();
  const [contactRef, contactInView] = useInView();



  const disableRightClick = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    document.addEventListener('contextmenu', disableRightClick);
    return () => document.removeEventListener('contextmenu', disableRightClick);
  }, []);
  return (
    <div>
      <div>
        <HeroComponent />
      </div>
      <div ref={projectsRef}>
        {projectsInView && <Projects />}
      </div>
      <div ref={contactRef}>
        {contactInView && <Contact />}
      </div>
    </div>
  );
};

export default App;
