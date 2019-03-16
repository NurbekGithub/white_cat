import Page from '../components/page';
import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { MediaQueryConsumer } from '../components/media-query';
import 'react-image-gallery/styles/css/image-gallery.css';
import Intro, { LOGO_TOP } from '../components/home/intro';
import Features from '../components/home/features';
// import SocialMeta from '../components/social-meta';

export default () => (
  <Page title="White-cat | store">
    {/* <SocialMeta
      image="/static/twitter-cards/home.jpg"
      title="Next.js - The React Framework"
      url="https://nextjs.org"
      description="Next.js is the React framework for production"
    /> */}
    <MediaQueryConsumer>
      {({ isMobile }) => (
        <Header height={32} offset={0} distance={0} shadow active={isMobile ? 32 : LOGO_TOP}>
          {/* <Notification href="/blog/next-8" title="Next 8 is out!" titleMobile="Next 8 is out!">
            Next 8 is out! — Serverless mode, performance and security improvements and more.
            Monday, February 11th 2019
          </Notification> */}
          <Navbar hideLogo={!isMobile} />
        </Header>
      )}
    </MediaQueryConsumer>
    <Intro />
    <Features />
    {/* <Customers /> */}
    <Footer />
  </Page>
);
