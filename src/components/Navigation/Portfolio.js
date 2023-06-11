import React from 'react';
import Card from './Card';

import Movies321 from '../../Images/Shrek.png';
import WeatherForecast from '../../Images/WeatherForecast.png';
import InNeed from '../../Images/InNeed.png';

import '../../styles.css';

function Portfolio() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 mb-4">
          <a href="https://github.com/owennolson/321_Movies" className="card-link">
            <Card imageSrc={Movies321} />
          </a>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <a href="https://github.com/owennolson/Weather_Forecast" className="card-link">
            <Card imageSrc={WeatherForecast}/>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <a href="https://github.com/Cmeesh11/InNeed" className="card-link">
            <Card imageSrc={InNeed} />
          </a>
          </div>
      </div>
    </div>
  );
}

export default Portfolio;