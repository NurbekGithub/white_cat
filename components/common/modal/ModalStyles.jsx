const borderWith = 120;
const maxWidth = 680;

export const OverlayWrapper = ({children}) => (
  <div>
    {children}
    <style jsx>{`
      position: fixed;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      z-index: 1;
      background: rgba(34, 47, 62, 0.9);
      color: white;
    `}</style>
  </div>
);

export const ModalClose = ({children}) => (
  <div>
    {children}
    <style jsx>{`
      svg {
        position: fixed;
        top: 16px;
        right: 16px;
        width: 34px;
        height: 34px;
        cursor: pointer;
        z-index: 4;
      }
      @media only screen and (max-width: 680px) {
        svg {
          right: 50%;
          transform: translateX(50%);
        }
      }
    `}</style>
  </div>
);

export const ModalNav = ({children}) => (
  <div>
    {children}
    <style jsx>{`
      @media only screen and (max-width: 680px) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.7);
        z-index: 3;
      }

      svg {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        width: 34px;
        height: 34px;
        font-size: 32px;
        text-align: center;
        line-height: 64px;
        cursor: pointer;
        z-index: 3;
      }

      svg:first-child {
        left: 16px;
      }
      svg:last-child {
        right: 16px;
      }
    `}</style>
  </div>
);

export const ModalCardWrapper = ({children}) => (
  <div>
    {children}
    <style jsx>{`
      position: relative;
      overflow-x: hidden;
      overflow-y: scroll;
      width: 100%;
      height: 100%;
      z-index: 2;
    `}</style>
  </div>
);

export const ModalCard = ({ children, accentColor }) => (
  <div>
    {children}
    <style jsx>{`
      width: 90%;
      overflow: hidden;
      position: relative;
      box-sizing: border-box;
      max-width: 600px;
      background: ${accentColor || "red"};
      margin: 80px auto;
      padding: 0 ${borderWith}px;
      border-radius: 20px;

      @media only screen and (max-width: 680px) {
        padding: 0 40px;
      }
    `}</style>
  </div>
);

export const ModalContent = ({ children, backgroundColor }) => (
  <div>
    {children}
    <style jsx>{`
      position: relative;
      height: 100%;
      min-height: 510px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${backgroundColor || "#fff"};
      text-align: center;
      line-height: 1.5;
      color: #222f3e;
      z-index: 2;

      svg {
        margin-bottom: 20px;
      }

      h2,
      p {
        margin: 0;
      }

      h2 {
        font-size: 25px;
      }

      p {
        font-size: 20px;
      }
    `}</style>
  </div>
);

export const BorderLeftEl = () => (
  <div>
    <style jsx>{`
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      width: ${borderWith}px;

      @media only screen and (max-width: 680px) {
        left: -40px;
      }
    `}</style>
  </div>
);

export const BorderRightEl = () => (
  <div>
    <style jsx>{`
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(0, -50%);
      width: ${borderWith}px;

      @media only screen and (max-width: 680px) {
        right: -40px;
      }
    `}</style>
  </div>
);
