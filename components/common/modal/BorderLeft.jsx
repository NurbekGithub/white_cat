import React from "react";
import posed from "react-pose";
import { BorderLeftEl } from "./ModalStyles";

const waveExpanded =
  "M60.453125,5.68434189e-14 L120.453125,0 L120.453125,520 L60.453125,520 C22.1510417,433.541667 3,346.875 3,260 C3,173.125 22.1510417,86.4583333 60.453125,5.68434189e-14 Z";

const waveReset =
  "M60.453125,5.68434189e-14 L120.453125,0 L120.453125,520 L60.453125,520 C48.8177083,433.541667 43,346.875 43,260 C43,173.125 48.8177083,86.4583333 60.453125,5.68434189e-14 Z";

const waveContracted =
  "M60.453125,5.68434189e-14 L120.453125,0 L120.453125,520 L60.453125,520 C48.8177083,433.541667 65,346.875 65,260 C65,173.125 48.8177083,86.4583333 60.453125,5.68434189e-14 Z";

const Path = posed.path({
  initialPose: { d: waveReset },
  left: {
    d: waveReset,
    transition: ({ duration }) => ({
      type: "tween",
      from: waveReset,
      to: waveExpanded,
      duration: duration,
      yoyo: 1
    })
  },
  right: {
    d: waveReset,
    transition: ({ duration }) => ({
      type: "tween",
      from: waveReset,
      to: waveContracted,
      duration: duration,
      yoyo: 1
    })
  }
});

const BorderLeft = ({ animateLeft, direction, duration }) => {
  return (
    <BorderLeftEl>
      <svg viewBox="0 0 120 520">
        <Path
          initialPose={"initialPose"}
          pose={animateLeft && direction}
          fill="#FFF"
          d={waveReset}
          duration={duration}
        />
      </svg>
    </BorderLeftEl>
  );
};

export default BorderLeft;
