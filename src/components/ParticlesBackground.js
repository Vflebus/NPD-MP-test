import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Fragment, useCallback, useMemo, useState } from "react";

export default function ParticlesBackground() {

  const [snow, setSnow] = useState(true);
  function handleSnowButton() {
    setSnow(!snow);
    console.log('cc');
  }

  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      particles: {
        number: {
          value: 20,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#fff"
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 10,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: false,
          distance: 500,
          color: "#ffffff",
          opacity: 0.4,
          width: 2
        },
        move: {
          enable: true,
          speed: { min: 1, max: 4 },
          direction: "bottom",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      retina_detect: true
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return (
    <Fragment>
      <button className="snowButton" onClick={handleSnowButton}>&#10052;</button>
      {
        snow && (
          <Particles init={particlesInit} options={options} />
        )
      }
    </Fragment>
  )
}