import "../assets/styles/Roadmap.scss";
import radio from "../assets/images/radio1.svg";
import { Fade } from "react-reveal";

const Roadmap = () => {
  return (
    <div className="container roadmap">
      <div className="roadmap_container">
        <Fade>
          <div className="roadmap_content">
            <div className="radio">
              <span></span>
            </div>
            <h3 className="roadmap_time">June 2020</h3>
            <p className="roadmap_msg">Start Up Built</p>
          </div>
        </Fade>
        <img src={radio} alt="" className="radio_img" />
        <Fade delay={100}>
          <div className="roadmap_content">
            <div className="radio">
              <span></span>
            </div>
            <h3 className="roadmap_time">September 2020</h3>
            <p className="roadmap_msg">First Blockchain Project Launched</p>
          </div>
        </Fade>
        <img src={radio} alt="" className="radio_img" />
        <Fade delay={200}>
          <div className="roadmap_content">
            <div className="radio">
              <span></span>
            </div>
            <h3 className="roadmap_time">mAY 2021</h3>
            <p className="roadmap_msg">
              We reached 7 Team Members, Accomplished 20 Blockchain Projects
            </p>
          </div>
        </Fade>
        <img src={radio} alt="" className="radio_img" />
        <Fade delay={300}>
          <div className="roadmap_content">
            <div className="radio">
              <span></span>
            </div>
            <h3 className="roadmap_time">August 2021</h3>
            <p className="roadmap_msg">
              Added Artificial Intelligence to our Portfolio
            </p>
          </div>
        </Fade>
        <img src={radio} alt="" className="radio_img" />
      </div>

      <div className="roadmap_container roadmap_container2">
        <Fade delay={400}>
          <div className="roadmap_content">
            <div className="radio">
              <span></span>
            </div>
            <h3 className="roadmap_time">October 2021</h3>
            <p className="roadmap_msg">
              Accomplished 67 Blockchain NFT and DEFI projects
            </p>
          </div>
        </Fade>
        <img src={radio} alt="" className="radio_img" />
        <Fade delay={500}>
          <div className="roadmap_content">
            <div className="radio">
              <span></span>
            </div>
            <h3 className="roadmap_time">April 2022</h3>
            <p className="roadmap_msg">
              Delivered 70 high Quality Blockchain Projects
            </p>
          </div>
        </Fade>
        <img src={radio} alt="" className="radio_img" />
        <div className="roadmap_content">
          <Fade delay={600}>
            <div className="radio">
              <span></span>
            </div>
            <h3 className="roadmap_time">May 2023</h3>
            <p className="roadmap_msg">
              Bitcoin hits 350k for the second time and we are Top Swiss
              Blockchain Tech Company
            </p>
          </Fade>
        </div>
        <div className="roadmap_content">
          <h3 className="roadmap_time"></h3>
          <p className="roadmap_msg"></p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
