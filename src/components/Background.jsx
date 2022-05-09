import Particles from "react-tsparticles";

const Background = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            // value: "#000"
          },
        },
        fpsLimit: 500,
        particles: {
          number: {
            value: 10,
            density: {
              enable: false,
            },
          },
          size: {
            value: 10,
            random: true,
          },
          move: {
            outMode: "out",
          },
          links: {
            enable: false,
          },
        },
        interactivity: {
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          number: {
            value: 10,
            density: {
              enable: false,
            },
          },
          size: {
            value: 10,
            random: true,
          },
          color: {
            value: ["#fcb542"],
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "out",
            random: false,
            speed: 2,
            straight: false,
          },
          links: {
            enable: false,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
        },
      }}
    />
  );
};

export default Background;
