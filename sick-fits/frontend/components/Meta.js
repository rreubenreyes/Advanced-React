import React, { Component } from 'react'
import Head from 'next/head'

export default class Meta extends Component {
  render() {
    return (
      <Head>
        <meta name="viewport" content="width=device-wdith, initial-scale=1" />
        <meta charset="utf-8" />
        <link rel="shortcut icon" href="/static/favicon.png" />
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        <title>SICK FITS</title>
      </Head>
    )
  }
}
