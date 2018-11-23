import React, { Component } from 'react'
import Link from 'next/link'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <Link href="/" as="/">
          <a>home</a>
        </Link>
        <Link href="/sell" as="/sell">
          <a>sell</a>
        </Link>
      </div>
    )
  }
}
