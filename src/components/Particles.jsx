import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Particle() {
    const [ init, setInit ] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (<Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
          fpsLimit: 120,
          interactivity: {
              events: {
                  onHover: {
                      enable: true,
                      mode: "repulse",
                  },
                  resize: true,
              },
              modes: {
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
            color: {
                value: "#fff",
                animation: {
                  enable: true,
                  speed: 10,
                  sync: false,
                },
            },
              move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                      default: "bounce",
                  },
                  random: false,
                  speed: 6,
                  straight: false,
              },
              number: {
                  density: {
                      enable: true,
                      area: 200,
                  },
                  value: 30,
              },
              opacity: {
                  value: 0.5,
              },
              shape: {
                type: "triangle",
              },
              rotate: {
                value: { x: 0, y: 0, z: 45 },
                animation: {
                  enable: true, // Enable rotation animation
                  speed: 10, // Speed of rotation
                  sync: false, // Different rotation speed for each particle
                  easing: "linear", // Smooth rotation easing
                },
              },
              size: {
                  value: { min: 5, max: 30 },
                  animation: {
                    enable: true, // Enable rotation animation
                    speed: 10, // Speed of rotation
                    sync: false, // Different rotation speed for each particle
                    easing: "linear", // Smooth rotation easing
                  },
              },
          },
          detectRetina: true,
      }}
  />
  );
};

export default Particle;