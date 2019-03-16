import Page from '../components/page';
import Screen from '../components/screen';
import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Container from '../components/container';

import Catalog from '../components/shop/Catalog';

export default ({query: {page}}) => (
  <Page title="Enterprise | Next.js">
    <Header height={64} shadow defaultActive>
      <Navbar />
    </Header>
    <Screen offset={64 + 400}>
      <Container>
        <Catalog page={Number(page)}/>
      </Container>
    </Screen>
    <Footer />
  </Page>
);
