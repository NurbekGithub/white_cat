import React from "react";
import posed from "react-pose";
import { BorderRightEl } from "./ModalStyles";

const waveExpanded =
  "M0,0 L81.23625,0 C105.37875,86.6666667 117.45,173.333333 117.45,260 C117.45,346.666667 105.37875,433.333333 81.23625,520 L0,520 L0,0 Z";

const waveReset =
  "M0,0 L53.5695833,0 C069.4898611,86.6666667 077.45,173.333333 077.45,260 C077.45,346.666667 069.4898611,433.333333 53.5695833,520 L0,520 L0,0 Z";

const waveContracted =
  "M0,0 L53.5695833,0 C044.4765278,86.6666667 039.93,173.333333 039.93,260 C039.93,346.666667 044.4765278,433.333333 53.5695833,520 L0,520 L0,0 Z";

const Path = posed.path({
  initialPose: { d: waveReset },
  left: {
    d: waveReset,
    transition: ({ duration }) => ({
      type: "tween",
      from: waveReset,
      to: waveContracted,
      duration: duration,
      yoyo: 1
    })
  },
  right: {
    d: waveReset,
    transition: props => ({
      type: "tween",
      from: waveReset,
      to: waveExpanded,
      duration: props.duration,
      yoyo: 1
    })
  }
});

const BorderRight = ({ animateRight, direction, duration }) => {
  return (
    <BorderRightEl>
      <svg viewBox="0 0 120 520">
        <Path
          initialPose={"initialPose"}
          pose={animateRight && direction}
          fill="#FFF"
          d={waveReset}
          duration={duration}
        />
      </svg>
    </BorderRightEl>
  );
};

export default BorderRight;
