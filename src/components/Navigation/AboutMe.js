import React from "react";
import "../../styles.css";
import Card from './Card';
import Profilepic from '../../Images/Untitled-1.png';

function AboutMe() {
  return (
    <div className="container d-flex flex-column align-items-center text-center">
      <div className="d-flex flex-row justify-content-between w-100">
        <div className="flex-grow-1 pe-4 pt-5">
          <h2 className="text-color my-4 mt-5 text-center text-nowrap">
            Get To Know Me!
          </h2>
        </div>
        <div className="ProfilePicture container d-flex flex-column align-items-center text-center">
            <Card imageSrc={Profilepic} />
        </div>
        <div className="flex-grow-1 text-start ps-3 custom-border">
          <p className="fs-4 text-color mb-4">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My name is Owen
            Olson, I am a current I.T. Deployment Tech for Shaws/Star Market
            Grocery Stores and I am now a Software Developer!
          </p>
          <p className="fs-4 text-color">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In my free time I
            enjoy playing video games (my favorites right now are Valorant and
            Call of Duty) and making youtube videos of me playing! I also love
            reading Webtoons and Manga as well as watching anime, I also have
            plans of making my own Webtoon in the near future when I get some
            more time on my hands! When I am not doing either of those two I am
            most likely spending time with my beautiful girlfriend or with my
            family.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
