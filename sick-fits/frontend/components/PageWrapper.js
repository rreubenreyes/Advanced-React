import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Meta from './Meta'

export default class PageWrapper extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  }

  render() {
    const { children } = this.props
    return (
      <>
        <Meta />
        <Header />
        {children()}
      </>
    )
  }
}
