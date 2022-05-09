import React from "react";
import styles from "../assets/styles/TimelineOfBussiness2.module.scss";
import roadmapblob from "../assets/images/roadmap-path.png";
import roadmapblobVertical from "../assets/images/roadmap-path-vertical.png";
import useMediaQuery from "../hooks/useMediaQuery";
import pad1 from "../assets/images/pad1.png";
import pad2 from "../assets/images/pad2.png";
import pad3 from "../assets/images/pad3.png";
import pad4 from "../assets/images/pad4.png";
import pad5 from "../assets/images/pad5.png";
import pad6 from "../assets/images/pad6.png";
import pad7 from "../assets/images/pad7.png";

const Card = ({ title, desc, isReverse, img }) => {
  return (
    <div className={`${styles.card} ${isReverse ? styles.isReverse : ""}`}>
      <img src={img} className={`${styles.cardImg}`} alt="" />
      <p className={`${styles.title} font-poppins`}>{title}</p>
      <p className={`${styles.desc} font-poppins`}>{desc}</p>
    </div>
  );
};

function TimelineOfBussiness2() {
  const isBellow800px = useMediaQuery("(max-width : 800px)");

  return (
    <div className={`${styles.container}`}>
      {isBellow800px ? (
        <img
          src={roadmapblobVertical}
          className={`${styles.roadmapblobVertical}`}
          alt=""
        />
      ) : (
        ""
      )}

      <img src={roadmapblob} className={`${styles.roadmapBlob}`} alt="" />

      <Card
        img={pad1}
        title={
          <>
            Jun <br /> <span>2020</span>
          </>
        }
        desc="Start Up Built"
        isReverse={false}
      />
      <Card
        img={pad2}
        title={
          <>
            Jun <br /> <span>2020</span>
          </>
        }
        desc="First Blockchain Project Launched"
        isReverse={true}
      />
      <Card
        img={pad3}
        title={
          <>
            Jun <br /> <span>2020</span>
          </>
        }
        desc="We reached 7 Team Members, Accoumpished 20 Blockchain Projects"
        isReverse={false}
      />
      <Card
        img={pad4}
        title={
          <>
            Jun <br /> <span>2020</span>
          </>
        }
        desc="Added Artificial Intelligence to our Portfolio"
        isReverse={true}
      />
      <Card
        img={pad5}
        title={
          <>
            Jun <br /> <span>2020</span>
          </>
        }
        desc="Accomplished 67 Blockchain NFT and DEFI projects"
        isReverse={false}
      />
      <Card
        img={pad6}
        title={
          <>
            Jun <br /> <span>2020</span>
          </>
        }
        desc="Delivered 70 high Quality Blockchain Projects"
        isReverse={true}
      />
      <Card
        img={pad7}
        title={
          <>
            Jun <br /> <span>2020</span>
          </>
        }
        desc="Bitcoin hits 350k for the second time & we are Top Swiss Blockchain Tech Company"
        isReverse={false}
      />
    </div>
  );
}

export default TimelineOfBussiness2;
