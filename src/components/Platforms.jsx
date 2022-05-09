import ether from "../assets/images/ether.png";
import stellar from "../assets/images/stellar.png";
import tezos from "../assets/images/tezos.png";
import tron from "../assets/images/tron.png";
import hashgraph from "../assets/images/hashgraph.png";
import eos from "../assets/images/eos.png";
import corda from "../assets/images/corda.png";
import { Fade } from "react-reveal";

const Platforms = () => {
  return (
    <div className="platform">
      <Fade>
        <div className="platform_container">
          <div className="platform_details">
            <h2 className="primary_title">Hyperledger</h2>
            <p className="platform_text">
              An umbrella project of open source blockchains to build
              enterprise-grade blockchain apps
            </p>
          </div>
        </div>
      </Fade>
      <Fade delay={100}>
        <div className="platform_container">
          <img src={ether} alt="" />
          <div className="platform_details">
            <h2 className="primary_title">Ethereum</h2>
            <p className="platform_text">
              A decentralized public platform that runs dApps
            </p>
          </div>
        </div>
      </Fade>
      <Fade delay={200}>
        <div className="platform_container">
          <img src={stellar} alt="" />
          <div className="platform_details">
            <h2 className="primary_title">Stellar</h2>
            <p className="platform_text">
              Stellar is an open platform for building financial products that
              connect people everywhere.
            </p>
          </div>
        </div>
      </Fade>
      <Fade delay={300}>
        <div className="platform_container">
          <img src={corda} alt="" />
          <div className="platform_details">
            <h2 className="primary_title">Corda</h2>
            <p className="platform_text">
              Corda is an open source blockchain platform for businesses
            </p>
          </div>
        </div>
      </Fade>
      <Fade delay={400}>
        <div className="platform_container">
          <img src={eos} alt="" />
          <div className="platform_details">
            <h2 className="primary_title">EOS</h2>
            <p className="platform_text">
              EOS is a decentralized blockchain, which can process fast and free
              transactions
            </p>
          </div>
        </div>
      </Fade>
      <Fade delay={500}>
        <div className="platform_container">
          <img src={tron} alt="" />
          <div className="platform_details">
            <h2 className="primary_title">Tron</h2>
            <p className="platform_text">
              A decentralized platform to develop high-performance blockchain
              apps
            </p>
          </div>
        </div>
      </Fade>
      <Fade delay={600}>
        <div className="platform_container">
          <img src={hashgraph} alt="" />
          <div className="platform_details">
            <h2 className="primary_title">Hashgraph</h2>
            <p className="platform_text">
              Fair, Fast and most secured acrylic graph DLT
            </p>
          </div>
        </div>
      </Fade>
      <Fade delay={700}>
        <div className="platform_container">
          <img src={tezos} alt="" />
          <div className="platform_details">
            <h2 className="primary_title">Tezos</h2>
            <p className="platform_text">
              An Open-Source Platform for Decentralized Assets and Applications
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Platforms;
