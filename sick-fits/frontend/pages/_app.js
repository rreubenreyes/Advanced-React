import App, { Container } from 'next/app'

import PageWrapper from '../components/PageWrapper'

export default class AppContainer extends App {
  render() {
    const { Component } = this.props

    return (
      <Container>
        {/* this is literally just props.children, Next makes it weird for some reason */}
        <PageWrapper>{() => <Component />}</PageWrapper>
      </Container>
    )
  }
}
