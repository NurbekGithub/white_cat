import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import {
  OverlayWrapper,
  ModalCardWrapper,
  ModalCard,
  ModalClose,
  ModalContent,
  ModalNav
} from "./ModalStyles";
import BorderLeft from "./BorderLeft";
import BorderRight from "./BorderRight";
import Toggle from "../../icons/toggle";
import ArrowPrevious from "../../icons/arrow-previous";
import ArrowNext from "../../icons/arrow-next";

// all credits to awesome girl muikimiu
const Modal = props => {
  // Create container DOM element and append to DOM.
  const overlayContainer = document.createElement("div");
  document.body.appendChild(overlayContainer);

  // state
  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);
  const [direction, setDirection] = useState("");
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState([]);

  // lifecycle hooks
  useEffect(() => {
    const { children } = props;

    setTotal(React.Children.count(children));
    setSlides(React.Children.toArray(children));
    document.addEventListener("keyup", handleKeyPress, false);

    return () => {
      // cleanup
      document.removeEventListener("keyup", handleKeyPress, false);
      document.body.removeChild(overlayContainer);
    };
  }, []);

  const handleKeyPress = ({ keyCode }) => {
    const ARROW_RIGHT = 39;
    const ESC = 27;
    const ARROW_LEFT = 37;
    switch (keyCode) {
      case ARROW_LEFT:
        animateToLeft();
        break;
      case ARROW_RIGHT:
        animateToRight();
        break;
      case ESC:
        props.toggleModal();
        break;
      default:
    }
  };

  const handleAnimation = direction => {
    setAnimateLeft(true);
    setAnimateRight(true);
    setDirection(direction);

    setTimeout(() => {
      setAnimateLeft(false);
      setAnimateRight(false);
    }, props.duration);
  };

  const animateToLeft = () => {
    handleAnimation("left");
    const current = current === 0 ? total - 1 : current - 1;
    setCurrent(current);
  };

  const animateToRight = () => {
    handleAnimation("right");
    const current = current + 1 === total ? 0 : current + 1;
    setCurrent(current);
  };
  const {
    children,
    toggleModal,
    illustration,
    duration,
    backgroundColor,
    accentColor
  } = props;

  return ReactDOM.createPortal(
    <OverlayWrapper>
      <ModalClose onClick={toggleModal}>
        <Toggle />
      </ModalClose>
      <ModalNav>
        <ArrowPrevious onClick={animateToLeft} />
        <ArrowNext onClick={animateToRight} />
      </ModalNav>
      <ModalCardWrapper>
        <ModalCard>
          <BorderLeft
            animateLeft={animateLeft}
            animateRight={animateRight}
            direction={direction}
            duration={duration}
          />
          <ModalContent>{slides[current]}</ModalContent>

          <BorderRight
            animateLeft={animateLeft}
            animateRight={animateRight}
            direction={direction}
            duration={duration}
          />
        </ModalCard>
      </ModalCardWrapper>
    </OverlayWrapper>,
    overlayContainer
  );
};

Modal.defaultProps = {
  duration: 300,
  backgroundColor: "white",
  accentColor: "#646dc1"
};

Modal.propTypes = {
  duration: PropTypes.number,
  backgroundColor: PropTypes.string,
  accentColor: PropTypes.string
};

export default Modal;
