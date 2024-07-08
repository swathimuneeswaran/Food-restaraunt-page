import React from "react";
import "./About.css";
import vision from "../images/vision.jpeg"
import mission from "../images/mission.jpeg";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import { Element } from 'react-scroll';

const About = () => {
  return (
    <>
      <Element className="about" id="about" >
        <h1 className="head_about">
          About <span>Us</span>
        </h1>
        <div className="container">
          <div data-aos="fade-left" data-aos-delay="700"  className="contain_box1">
            <img src="https://cdn.prod.website-files.com/5fd2ba952bcd68835f2c8254/654553fedbede7976b97eaf5_Professional-5.remini-enhanced.webp" />
            <h3>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              laboriosam accusamus ducimus amet corrupti maxime voluptate ipsa
              numquam velit quis laudantium atque ex ipsum impedit nam, optio
              non, repudiandae ullam totam! Quos nam mollitia ad aliquid quam
              ullam temporibus exercitationem fugit delectus adipisci asperiores
              possimus, corrupti ducimus autem. Voluptatibus, odio?
            </h3>
          </div>
          <h1 className="vision">Vision</h1>
          <div data-aos="fade-right" className="contain_box2">
           
            
            <h3>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              laboriosam accusamus ducimus amet corrupti maxime voluptate ipsa
              numquam velit quis laudantium atque ex ipsum impedit nam, optio
              non, repudiandae ullam totam! Quos nam mollitia ad aliquid quam
              ullam temporibus exercitationem fugit delectus adipisci asperiores
              possimus, corrupti ducimus autem. Voluptatibus, odio?
            </h3>
            <img src={vision} />
          </div>
          <h3 className="mission">Mission</h3>
          <div  data-aos="fade-left"  className="contain_box3">
            
            <img src={mission} />
            <h3>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              laboriosam accusamus ducimus amet corrupti maxime voluptate ipsa
              numquam velit quis laudantium atque ex ipsum impedit nam, optio
              non, repudiandae ullam totam! Quos nam mollitia ad aliquid quam
              ullam temporibus exercitationem fugit delectus adipisci asperiores
              possimus, corrupti ducimus autem. Voluptatibus, odio?
            </h3>
          </div>
        </div>
      </Element>
    </>
  );
};

export default About;
