import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default class AccountsWrapper extends Component {
  componentDidMount() {
    this.view = Blaze.render(Template.loginButtons,
    ReactDOM.findDOMNode(this.refs.container));
  }

  // remove Blaze once View is rendered
  componentWillUnmount() {
    Blaze.remove(this.view);
  }

  render () {
    return (
      <span ref='container' />

    )
  }
}

