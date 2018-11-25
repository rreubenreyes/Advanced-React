import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'

import Header from './Header'
import Meta from './Meta'

const pageTheme = {
  red: `#FF0000`,
  black: `#393939`,
  grey: `#3a3a3a`,
  lightgrey: `#e1e1e1`,
  offWhite: `#ededed`,
  maxWidth: `1000px`,
  boxShadow: `0 12px 24px 0 rgba(0, 0, 0, 0.09)`,
}

const StyledPage = styled.div`
  /* the overarching page */
  background: white; /* this will be a theme later */
  color: ${({ theme }) => theme.black};
`

const Inner = styled.div`
  /* constrains the main content to something more readable (think .container from bootstrap) */
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    color: ${pageTheme.black};
  }
  button {  font-family: 'radnika_next'; }
`

export default class PageWrapper extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  }

  render() {
    const { children } = this.props
    return (
      <ThemeProvider theme={pageTheme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{children()}</Inner>
        </StyledPage>
      </ThemeProvider>
    )
  }
}
