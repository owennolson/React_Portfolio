import React from 'react';
import AboutMe from '../Navigation/AboutMe';
import Portfolio from '../Navigation/Portfolio';

function Project({ currentPage }) {
  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutMe />;
      case 'portfolio':
        return <Portfolio />;
      default:
        return null;
    }
  };

  return <div>{renderPage()}</div>;
}

export default Project;