import "./assets/styles/App.scss";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import banner from "./assets/images/banner.svg";
import processEllipse2 from "./assets/images/processEllipse2.svg";
import about from "./assets/images/about.svg";
import economy from "./assets/images/economy.svg";
import playIcon from "./assets/images/icons/playIcon.svg";
import about_divider from "./assets/images/about_divider.svg";
import advisor from "./assets/images/advisor.png";
import banner1 from "./assets/images/banner1.png";
import banner2 from "./assets/images/banner2.png";
import banner3 from "./assets/images/banner3.png";
import banner4 from "./assets/images/banner4.png";
import banner5 from "./assets/images/banner5.png";
import blog from "./assets/images/blog.png";

import Background from "./components/Background";
import Particles from "./components/Particles";
import Services from "./components/Services";
import FeedbackSlider from "./components/FeedbackSlider";
import Platforms from "./components/Platforms";
import Roadmap from "./components/Roadmap";
import Process from "./components/Process";
import Statistics from "./components/Statistics";
import Teams from "./components/Teams";
import AdvisorsCard from "./components/AdvisorsCard";
import NewsSlider from "./components/NewsSlider";
import PressSlider from "./components/PressSlider";
import BlogCard from "./components/BlogCard";
import Accordion from "./components/Accordion";
import Contact from "./components/Contact";
import { Fade } from "react-reveal";
import TimelineOfBussiness from "./components/TimelineOfBussiness";
import TimelineOfBussiness2 from "./components/TimelineOfBussiness2";

function App() {
  return (
    <>
      {/* <Background /> */}
      <Particles />
      <main className="home">
        <Navbar />
        <section className="home_container">
          <div className="banner" id="Home">
            <div className="banner_container">
              <Fade delay={200}>
                <div className="banner_left">
                  <p className="green">Chainversum</p>
                  <h1 className="banner_title">
                    We Develope Blockchain Decentralized Apps
                  </h1>
                  <p>for your success</p>
                  <div className="banner_line"></div>
                  <a href="#about_title">
                    <div className="banner_circle"></div>
                  </a>
                </div>
              </Fade>
              <Fade delay={400}>
                <div className="banner_right">
                  <img src={banner} alt="" className="banner_image" />
                </div>
              </Fade>
            </div>
            <div className="banner_bottom">
              <Fade delay={300}>
                <img src={banner1} alt="" />
              </Fade>
              <Fade delay={200}>
                <img src={banner2} alt="" />
              </Fade>
              <Fade delay={100}>
                <img src={banner3} alt="" />
              </Fade>
              <Fade delay={200}>
                <img src={banner4} alt="" />
              </Fade>
              <Fade delay={300}>
                <img src={banner5} alt="" />
              </Fade>
            </div>
          </div>
          <div className="about" id="About">
            <h1 className="primary_title" id="about_title">
              About
            </h1>
            <div className="about_container">
              <Fade delay={200}>
                <h1 className="secondary_title mobile_title">
                  Chainversum{" "}
                  <span>
                    develops
                    <br /> Blockchain decentralized
                    <br /> Apps for your success
                  </span>
                </h1>
              </Fade>
              <div className="about_left">
                <Fade delay={400}>
                  <img src={about} alt="" className="about_image" />
                </Fade>
              </div>
              <div className="about_center">
                <img src={about_divider} alt="" className="about_divider" />
                <img src={playIcon} alt="" className="about_icon" />
              </div>
              <Fade delay={200}>
                <div className="about_right">
                  <h1 className="secondary_title">
                    Chainversum{" "}
                    <span>
                      develops
                      <br /> Blockchain decentralized
                      <br /> Apps for your success
                    </span>
                  </h1>
                  <p className="descp">
                    We love Blockchain and Crypto. We are a tribe of engineers
                    and software developers building blockchain solutions for
                    crypto startups, enterprises, and also governments across
                    the globe. Our software Tech company is based in
                    Switzerland. If you are passionate about the potential of
                    Blockchain Technology and Crypto world and want to be part
                    of the next web generation, we’d love to hear from you!
                  </p>
                </div>
              </Fade>
            </div>
          </div>

          <div className="about">
            <h1 className="primary_title" id="about_title">
              DECENTRALISED ECONOMY
            </h1>
            <div className="about_container about_container2">
              <Fade delay={200}>
                <div className="about_right">
                  <h1 className="secondary_title">
                    Blockchain
                    <span>
                      {" "}
                      will reshape
                      <br /> Your industry. Be
                      <br /> prepared. With us
                    </span>
                  </h1>
                  <p className="descp">
                    Blockchain is changing Finance, helping Artists profit more
                    from their creative Works and Global supply chains are about
                    to get better thanks to it.
                  </p>
                  <br />
                  <ul>
                    <li className="descp">
                      <div className="radio">
                        <span></span>
                      </div>
                      <span>
                        <strong>DEFI </strong>We develope Decentralized
                        Exchanges, Stake and Yield Farming Apps and more...
                      </span>
                    </li>
                    <li className="descp">
                      <div className="radio">
                        <span></span>
                      </div>
                      <span>
                        <strong>DEFI </strong> We develope Decentralized
                        Exchanges, Stake and Yield Farming Apps and more...{" "}
                      </span>
                    </li>
                    <li className="descp">
                      <div className="radio">
                        <span></span>
                      </div>
                      <span>
                        <strong>DAPPS </strong> Our team passion is to develope
                        all sorts of decentralized Apps on the Blockchain
                        (Dapps){" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </Fade>
              <div className="about_left">
                <Fade delay={400}>
                  <img src={economy} alt="" className="about_image2" />
                </Fade>
              </div>
              <Fade delay={200}>
                <h1 className="secondary_title mobile_title">
                  Blockchain
                  <span>
                    {" "}
                    will reshape
                    <br /> Your industry. Be
                    <br /> prepared. With us
                  </span>
                </h1>
              </Fade>
            </div>
          </div>
          <div className="services_bg">
            <div className="services" id="Services">
              <h1 className="primary_title">
                <span className="descp green">WHAT WE OFFER</span>
                <br />
                Awesome services
              </h1>
              <Services />
            </div>

            <div className="services feedback">
              <h1 className="primary_title">
                <span className="descp green">Client Feedback</span>
                <br />
                What do people say about us?
              </h1>
            </div>
            <FeedbackSlider />

            <div className="services ">
              <h1 className="primary_title">
                Blockchain Development Platforms we work on
              </h1>
              <Platforms />
            </div>

            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
            {/* The timeline of our business */}

            <div className="services" id="Roadmap">
              <h1 className="primary_title">
                <span className="descp green">ROADMAP</span>
                <br />
                The timeline of our business
              </h1>
              {/* <Roadmap /> */}
              <TimelineOfBussiness />
            </div>
            <div className="services ">
              <h1 className="primary_title">The timeline of Your business</h1>
              {/* <Roadmap /> */}
              <TimelineOfBussiness2 />
            </div>

            <div className="services">
              <div className="process_title"></div>
              <img src={processEllipse2} alt="" className="process_title2" />
              <h1 className="primary_title">
                <span className="descp green">Process</span>
                <br />
                how we work
              </h1>
              <br />
              <br />
              <Process />
            </div>

            <div className="services" id="Statistics">
              <h1 className="primary_title">
                <span className="descp green">OUR DATA</span>
                <br />
                Statistic Information
              </h1>
              <br />
              <br />
              <Statistics />
            </div>

            <div className="services">
              <h1 className="primary_title">
                <span className="descp green">OUR ACHIEVEMENTS SO FAR</span>
                <br />
                Projects
              </h1>
              <br />
              <br />
              <div className="projects_container">
                <div className="banner_bottom projects">
                  <Fade delay={300}>
                    <img src={banner1} alt="" />
                  </Fade>
                  <Fade delay={200}>
                    <img src={banner2} alt="" />
                  </Fade>
                  <Fade delay={100}>
                    <img src={banner3} alt="" />
                  </Fade>
                  <Fade delay={200}>
                    <img src={banner4} alt="" />
                  </Fade>
                  <Fade delay={300}>
                    <img src={banner5} alt="" />
                  </Fade>
                </div>
              </div>
            </div>
          </div>

          <div className="team_bgContainer" id="Team">
            <div className="team_bg"></div>
            <div className="services">
              <div className="process_title"></div>
              <h1 className="primary_title">
                <span className="descp green">OUR BRAIN</span>
                <br />
                AWESOME TEAM
              </h1>
              <br />
              <br />
              <Teams />
            </div>

            <div className="services">
              <h1 className="primary_title">
                <span className="descp green">FAMILY</span>
                <br />
                Advisors
              </h1>
              <br />
              <br />
              <div className="container advisors_container">
                <Fade>
                  <AdvisorsCard
                    image={advisor}
                    name="david drake"
                    designation="Ceo"
                  />
                </Fade>
                <Fade delay={200}>
                  <AdvisorsCard
                    image={advisor}
                    name="david drake"
                    designation="Ceo"
                  />
                </Fade>
                <Fade delay={400}>
                  <AdvisorsCard
                    image={advisor}
                    name="david drake"
                    designation="Ceo"
                  />
                </Fade>
              </div>
            </div>

            <div className="services">
              <br />
              <h1 className="primary_title">
                <span className="descp green">IN THE WORLD</span>
                <br />
                Latest News
              </h1>
              <br />
              <br />
              <NewsSlider />
            </div>
          </div>
          <div className="team_bgContainer">
            <div className="services">
              <div className="team_bg team_bg2"></div>
              <h1 className="primary_title">
                <span className="descp green">Latest news</span>
                <br />
                Press
              </h1>
              <br />
              <br />
              <PressSlider />
            </div>

            <div className="services">
              <h1 className="primary_title">
                <span className="descp green">insights</span>
                <br />
                Our Blogs
              </h1>
              <br />
              <br />
              <div className="container blogs_container">
                <Fade>
                  <BlogCard
                    image={blog}
                    title="New Trends in UI/UX"
                    descp="Specially for our VIP customers the LH Crypto team representatives Alexander Smirnov and Antonis Lapos will conduct a number of personal meet."
                    time="September, 15 2020"
                  />
                </Fade>
                <Fade delay={200}>
                  <BlogCard
                    image={blog}
                    title="New Trends in UI/UX"
                    descp="Specially for our VIP customers the LH Crypto team representatives Alexander Smirnov and Antonis Lapos will conduct a number of personal meet."
                    time="September, 15 2020"
                  />
                </Fade>
                <Fade delay={400}>
                  <BlogCard
                    image={blog}
                    title="New Trends in UI/UX"
                    descp="Specially for our VIP customers the LH Crypto team representatives Alexander Smirnov and Antonis Lapos will conduct a number of personal meet."
                    time="September, 15 2020"
                  />
                </Fade>
              </div>
            </div>

            <div className="services" id="FAQ">
              <h1 className="primary_title">
                <span className="descp green">faq</span>
                <br />
                Frequently Asked Questions
              </h1>
              <br />
              <br />
              <div className="container">
                <Accordion question="Frequently Asked Questions">
                  Blockchain will reshape Your industry and the whole economy.
                  Be prepared. Here a collection of our FAQs.
                </Accordion>
                <Accordion question="What does Chainversum do?">
                  Led by engineers and product people, Chainversum is focused on
                  designing, building, testing, and shipping great Blockchain
                  and Crypto products that delight our users. We have three core
                  products: Defi, NFTs and Decentralized Exchanges
                </Accordion>
                <Accordion question="What is decentralized finance (DeFi)?">
                  Decentralized finance—often called DeFi or open finance—refers
                  to the economic paradigm shift enabled by decentralized
                  technologies, particularly blockchain networks. DeFi signals
                  the shift from a historically centralized and closed financial
                  system toward a universally accessible economy that is based
                  on open protocols that are interoperable, programmable, and
                  composable. From streamlined and secure payment networks to
                  automated loans to USD-pegged stablecoins, decentralized
                  finance has emerged as one of the most active sectors in the
                  blockchain space. Some of the defining factors of a DeFi
                  application include permissionless architecture (anyone can
                  participate), transparent and auditable code, and
                  interoperability with other DeFi products. DeFi Score offers a
                  single, consistently comparable value for measuring DeFi
                  platform risk.
                </Accordion>
                <Accordion question="What Is an NFT?">
                  An NFT is a digital asset that represents real-world objects
                  like art, music, in-game items and videos. They are bought and
                  sold online, frequently with cryptocurrency, and they are
                  generally encoded with the same underlying software as many
                  cryptos.
                </Accordion>
                <Accordion question="What is a blockchain wallet?">
                  A blockchain wallet contains the public key for others to
                  transfer cryptocurrency to your address and the private key so
                  you can securely access your own digital assets. A blockchain
                  wallet usually accompanies node hosting and stores
                  cryptocurrencies on your computer. The safest place for
                  storing digital assets is offline, what is often called “cold
                  storage.” Read “7 Pro Tips for Keeping Your Crypto Safe” for
                  some best practices on protecting your digital assets.
                </Accordion>
              </div>
            </div>

            <div className="services">
              <div className="process_title"></div>
              <h1 className="primary_title">
                <span className="descp green">Contact Us</span>
                <br />
                Are you ready to start your journey?
              </h1>
              <br />
              <br />
              <Contact />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
