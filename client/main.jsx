'use strict';

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from '../imports/ui/App.jsx';
import New from '../imports/ui/New';
import FourOFour from '../imports/ui/FourOFour';


injectTapEventPlugin();

Meteor.startup(() => {
  render((
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/new' component={New} />
        <Route component={FourOFour} />
      </Switch>
    </Router>
  ), document.getElementById('root'));
});
