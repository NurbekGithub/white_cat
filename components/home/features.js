import { useState } from "react";
import Container from "../container";
import Button from "../button";
import SectionHeader from "../section-header";
import CompanySlider from "./company-slider";
import Card from "../shop/card";
import Modal from '../common/modal';

export default () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Container wide role="region" aria-labelledby="features">
      <Container center padding>
        <SectionHeader
          id="features"
          title="Why Next.js"
          description="The world’s leading companies use and love Next.js"
        />
        <Button onClick={() => setModalOpen(true)}>Open modal</Button>
        {modalOpen && (
          <Modal toggleModal={() => setModalOpen(!modalOpen)}>
            <div>
              <h2>Hello cutie!</h2>
              <p>You look good today!</p>
            </div>
            <div>
              <h2>Hi there!</h2>
              <p>I like your cattitude!</p>
            </div>
            <div>
              <h2>Why does everyone...</h2>
              <p>Run away from me?</p>
            </div>
            <div>
              <h2>Scream!</h2>
              <p>For Ice Cream!</p>
            </div>
          </Modal>
        )}
        <div className="row">
          <Card
            classes="column"
            img="/static/images/testcase.jpg"
            title="Zero Setup"
            description="Automatic code splitting, filesystem based routing, hot code reloading and universal rendering."
            button={<Button href="/learn">Learn Next.js</Button>}
          />
          <Card
            classes="column"
            img="/static/images/testcase.jpg"
            title="Fully Extensible"
            description="Automatic code splitting, filesystem based routing, hot code reloading and universal rendering."
            button={<Button href="/learn">Learn Next.js</Button>}
          />
          <Card
            classes="column"
            img="/static/images/testcase.jpg"
            title="Ready for Production"
            description="Complete control over Babel and Webpack. Customizable server, routing and next-plugins."
            button={<Button href="/learn">Learn Next.js</Button>}
          />
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
      <CompanySlider />
    </Container>
  );
};
