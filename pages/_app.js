import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo-hooks';
import withData from '../lib/withData';

import NProgress from '../components/nprogress';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
          <NProgress />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
