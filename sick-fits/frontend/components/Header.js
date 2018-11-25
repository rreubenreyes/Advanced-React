import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Router from 'next/router'
import NProgress from 'nprogress'

import Nav from './Nav'

Router.onRouteChangeStart = () => {
  NProgress.start()
  console.log(`onRouteChangeStart triggered`)
}
Router.onRouteChangeComplete = () => {
  NProgress.done()
  console.log(`onRouteChangeComplete triggered`)
}
Router.onRouteChangeError = () => {
  NProgress.error()
  console.log(`onRouteChangeError triggered`)
}

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  transform: skew(-7deg);
  z-index: 10;
  a {
    padding: 0.5rem 1rem;
    background: ${({ theme }) => theme.red};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`
const StyledHeader = styled.header`
  .bar {
    /* main nav bar */
    border-bottom: 10px solid ${({ theme }) => theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    /* search bar etc. */
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${({ theme }) => theme.lightgrey};
  }
`
export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <div className="bar">
          <Logo>
            <Link href="" as="">
              <a>SICK FITS</a>
            </Link>
          </Logo>
          <Nav />
        </div>
        <div className="sub-bar">
          <p>Search</p>
        </div>
        <div>Cart</div>
      </StyledHeader>
    )
  }
}
