'use strict';

import React, { Component, Fragment } from 'react'
import { H2 } from '../styled/App.style';

export default class FourOFour extends Component {
  render () {
    return (
      <Fragment>
        <img style={{ backgroundImage: 'cover' }} src='THE_SUICIDE.jpg' />
        <H2 style={{ marginBottom: 100 }}>4 0 4</H2>
      </Fragment>
    )
  }
}

