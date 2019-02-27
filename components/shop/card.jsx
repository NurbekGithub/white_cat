import React from "react";
import classnames from "classnames";

const Card = ({ title, button, img, classes, description, maskChildren }) => {
  return (
    <div className={classnames("card", classes)}>
      <div className='img'/>
      <div className='info'>
        {title}
        {button}
      </div>
      <div className='mask'>{maskChildren}</div>
      <style jsx>{`
        .card {
          overflow: hidden;
          position: relative;
        }
        .card:hover .img {
          transform: scale(1.2);
        }
        .card:hover .mask {
          opacity: 1;
        }
        .img {
          position: absolute;
          width: 100%;
          height: 100%;
          background: url(${img});
          background-repeat: no-repeat;
          background-size: contain;
          background-position: 50%;
          transition: .3s;
        }
        .info {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .mask {
          opacity: 0;
          transition: .3s;
          background-color: rgba(0,0,0,.2);
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 2;
        }
      `}</style>
    </div>
  );
};

export default Card;
