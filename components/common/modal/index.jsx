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
  const { children, toggleModal, duration, accentColor } = props;
  // find container DOM element to append modal.
  const modalRoot = document.getElementById('modalRoot');
  const innerRef = React.useRef();
  
  // state
  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);
  const [direction, setDirection] = useState("");
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState([]);

  // lifecycle hooks
  useEffect(() => {
    setTotal(React.Children.count(children));
    setSlides(React.Children.toArray(children));
    
    document.addEventListener("keyup", handleKeyPress, false);
    return () => {
      // cleanup
      document.removeEventListener("keyup", handleKeyPress, false);
    };
  }, []);
  
  useEffect(() => {
    innerRef.current = total;
  }, [total])

  const handleKeyPress = ({ keyCode }) => {
    const ARROW_RIGHT = 39;
    const ESC = 27;
    const ARROW_LEFT = 37;
    switch (keyCode) {
      case ARROW_LEFT:
        animateToLeft();
        break;
      case ARROW_RIGHT:
        animateToRight(current);
        break;
      case ESC:
        toggleModal();
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
    }, 2000 + duration);
  };

  const animateToLeft = () => {
    handleAnimation("left");
    setCurrent(current => current === 0 ? innerRef.current - 1 : current - 1);
  };

  function animateToRight() {
    handleAnimation("right");
    setCurrent(current => current + 1 === innerRef.current ? 0 : current + 1);
  };

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
        <ModalCard accentColor={accentColor}>
          <BorderLeft
            animateLeft={animateLeft}
            animateRight={animateRight}
            direction={direction}
            duration={duration}
          />
          <ModalContent>{slides[current]}</ModalContent>
          {current + ', ' + total}
          <BorderRight
            animateLeft={animateLeft}
            animateRight={animateRight}
            direction={direction}
            duration={duration}
          />
        </ModalCard>
      </ModalCardWrapper>
    </OverlayWrapper>,
    modalRoot
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
