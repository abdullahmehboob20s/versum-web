import "../assets/styles/Services.scss";
import service1 from "../assets/images/service1.svg";
import service2 from "../assets/images/service2.svg";
import service3 from "../assets/images/service3.svg";
import service4 from "../assets/images/service4.svg";
import { Fade } from "react-reveal";

const services = [
  {
    id: 1,
    image: service1,
    title: "Dapps Development",
    descp:
      "From ideation to design and development, our blockchain developers build enterprise-grade decentralized applications to help clients accelerate time to market and maximize ROI.",
  },
  {
    id: 2,
    image: service2,
    title: "NFT Development",
    descp: "NFT Projects development, NFT Smart contracts, NFT Marketplaces...",
  },
  {
    id: 3,
    image: service3,
    title: "Custom Blockchain Apps",
    descp:
      "With expertise in multiple blockchain platforms, including Ethereum, Polygon, Solana, Tezos, Hyperledger, Corda, Tron, Stellar and EOS, we build scalable, robust and custom blockchain software solutions for enterprises and startups.",
  },
  {
    id: 4,
    image: service4,
    title: "Decentralized Exchanges",
    descp:
      "Our blockchain development team creates hack-proof and robust platforms on Android and iOS to enable the real-time exchange of digital currencies securely and efficiently.",
  },
];

const Services = () => {
  return (
    <div className="services_container">
      {services?.map((item) => (
        <Fade delay={200} key={item.id}>
          <div className="service_card">
            <div className="service_cardInner">
              <img src={item.image} alt={item.title} />
              <h2 className="service_cardTitle">{item.title}</h2>
              <p className="descp">{item.descp}</p>
            </div>
            <Fade bottom>
              <button className="descp service_cardButton">Learn More</button>
            </Fade>
          </div>
        </Fade>
      ))}
    </div>
  );
};

export default Services;
