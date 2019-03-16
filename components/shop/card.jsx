import React from "react";
import classnames from "classnames";
import { BASE_URL } from '../../config';

const Card = ({ title, images, classes, maskChildren }) => {
  return (
    <div className={classnames("card", classes)}>
      <div className='img'/>
      <div className='info'>
        {title}
      </div>
      <div className='mask'>{maskChildren}</div>
      <style jsx>{`
        .card {
          padding: 0;
          max-width: 250px;
          min-height: 300px;
          border-radius: 4px;
          overflow: hidden;
          position: relative;
        }
        .card:hover .img {
          transform: scale(1.2);
        }
        .card:hover .mask {
          border-raduis: 4px;
          opacity: 1;
        }
        .card:hover .info {
          visibility: hidden;
        }
        .img {
          position: absolute;
          width: 100%;
          height: 100%;
          background: url(${BASE_URL}${images[0].url});
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
