import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
// import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";
import React from "react";

const BaclgroundParticle = props =>{
const options = useMemo(() => {
    return {
      background: {
        color: "#8333FF", 
      },
      fullScreen: {
        enable: true, 
        zIndex: -1, 
      },
      interactivity: {
        events: {
          onClick: {
            enable: true, 
            // mode: "push",
          },
          onHover: {
            enable: true, 
            mode: "repulse", 
          },
        },
        modes: {
          push: {
            quantity: 10, 
          },
          repulse: {
            distance: 100, 
          },
        },
      },
      particles: {
        links: {
          enable: true, 
          distance: 200, 
        },
        move: {
          enable: true,
          speed: { min: 1, max: 5 },
        },
        opacity: {
          value: { min: 0.3, max: 0.7 }, 
        },
        size: {
          value: { min: 1, max: 3 }, 
        },
      },
    };
  }, []);
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);
  return <Particles id={props.id} init={particlesInit} options={options} />;
}

export default BaclgroundParticle;