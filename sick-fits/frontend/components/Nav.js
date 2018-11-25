import React, { Component } from 'react'
import Link from 'next/link'

import NavStyles from './styles/NavStyles'

export default class Nav extends Component {
  render() {
    return (
      <NavStyles>
        <Link href="/items" as="/items">
          <a>Items</a>
        </Link>
        <Link href="/sell" as="/sell">
          <a>Sell</a>
        </Link>
        <Link href="/signup" as="/signup">
          <a>Signup</a>
        </Link>
        <Link href="/orders" as="/orders">
          <a>Orders</a>
        </Link>
        <Link href="/me" as="/me">
          <a>Me</a>
        </Link>
      </NavStyles>
    )
  }
}
