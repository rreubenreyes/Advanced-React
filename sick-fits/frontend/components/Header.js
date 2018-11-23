import React, { Component } from 'react'

import Nav from './Nav'

export default class Header extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="bar">
          <a href="">SICK FITS</a>
        </div>
        <div className="sub-bar">
          <p>Search</p>
        </div>
        <div>Cart</div>
      </div>
    )
  }
}
