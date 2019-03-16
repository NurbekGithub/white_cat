import Container from "../container";
import Button from "../button";
import SectionHeader from "../section-header";
import Card from "./card";
import { BASE_URL } from "../../config";

export function renderProducts({_id, name, manufacturer, price, image }) {

  function renderTitle() {
    return <div>
      <img src={`${BASE_URL}${manufacturer.icon.url}`} alt={manufacturer.name}/>
      <span>
        {name}
      </span>
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          background: rgba(255,255,255,.8);
        }
        img {
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
      `}</style>
    </div>
  }

  return <Card
    classes="column"
    key={_id}
    images={image}
    title={renderTitle()}
    description={price}
    maskChildren={
      <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button invert href={`/product?id=${_id}`}>Подробнее</Button>
      </div>
    }
  />
}

export default ({ cat: { name, image, products }}) => {
  return (
    <Container dotBackground wide role="region" aria-labelledby={name}>
      <Container padding>
        <SectionHeader
          title={name}
          // description={<img src={`http://2.133.52.3:1337${image.url}`}/>}
          img={image.url}
        />
        <div className="row">
          {products.map(renderProducts)}
        </div>
        <style jsx>{`
          .column {
            text-align: left;
          }
          .row {
            height: 300px;
          }
          // CSS only media query for tablet
          @media screen and (max-width: 960px) {
            .row {
              flex-direction: column;
              margin: -1.5rem 0;
            }
            .column {
              width: 100%;
              padding: 1.5rem 0;
              text-align: center;
              max-width: 350px;
            }
          }
        `}</style>
      </Container>
    </Container>
  )
}