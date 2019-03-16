import withPure from './hoc/pure';
import { BASE_URL } from '../config';

export default withPure(({ anchor, id, title, description, img }) => (
  <div>
    <style jsx>
      {`
        div {
          position: relative;
          margin-bottom: 3rem;
        }
        .anchor {
          position: absolute;
          top: -9rem;
        }
        .category-title {
          display: flex;
          align-items: center;
        }
        .category-title img {
          width: 50px;
          margin-right: 10px;
          transition: margin .3s;
        }
        div:hover .category-title img {
          margin-right: 50px;
        }
      `}
    </style>
    {anchor && <span id={anchor} className="anchor" />}
    <div className='category-title'>
      <img alt={title} src={BASE_URL + img}/>
      <h2 id={id} className="f0 fw6">
        {title}
      </h2>
    </div>
    {description && <h3 className="f-reset subtitle fw4">{description}</h3>}
  </div>
));
