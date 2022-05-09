import React from "react";
import styles from "../assets/styles/TimelineOfBussiness.module.scss";
import roadmapblob from "../assets/images/roadmap-blob-design.png";
import roadmapblobVertical from "../assets/images/roadmap-blob-design-vertical.png";
import useMediaQuery from "../hooks/useMediaQuery";

const Card = ({ title, desc, isReverse }) => {
  return (
    <div className={`${styles.card} ${isReverse ? styles.isReverse : ""}`}>
      <p className={`${styles.title} font-poppins`}>{title}</p>

      <p className={`${styles.desc} font-poppins`}>{desc}</p>
    </div>
  );
};

function TimelineOfBussiness() {
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
        title={
          <>
            Jun <br /> <span>2020</span>
          </>
        }
        desc="Start Up Built"
        isReverse={false}
      />
      <Card
        title={
          <>
            Jun <br /> <span>2020</span>
          </>
        }
        desc="First Blockchain Project Launched"
        isReverse={true}
      />
      <Card
        title={
          <>
            Jun <br /> <span>2020</span>
          </>
        }
        desc="We reached 7 Team Members, Accoumpished 20 Blockchain Projects"
        isReverse={false}
      />
      <Card
        title={
          <>
            Jun <br /> <span>2020</span>
          </>
        }
        desc="Added Artificial Intelligence to our Portfolio"
        isReverse={true}
      />
      <Card
        title={
          <>
            Jun <br /> <span>2020</span>
          </>
        }
        desc="Accomplished 67 Blockchain NFT and DEFI projects"
        isReverse={false}
      />
      <Card
        title={
          <>
            Jun <br /> <span>2020</span>
          </>
        }
        desc="Delivered 70 high Quality Blockchain Projects"
        isReverse={true}
      />
      <Card
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

export default TimelineOfBussiness;
