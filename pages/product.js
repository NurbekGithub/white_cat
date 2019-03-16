import SingleProduct from '../components/shop/SingleProduct';
import Page from '../components/page';
import Screen from '../components/screen';
import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Container from '../components/container';

export default props => (
  <Page title="Enterprise | Next.js">
    <Header height={64} shadow defaultActive>
      <Navbar />
    </Header>
    <Screen offset={64 + 400}>
      <Container padding>
        <SingleProduct id={props.query.id}/>
      </Container>
    </Screen>
    <Footer />
  </Page>
);
