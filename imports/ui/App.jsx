'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// from material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';

// to leverage meteor
import { createContainer } from 'meteor/react-meteor-data';

// database collection
import { Players } from '../api/players';

// other components to use
import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';
import Edit from './EditPlayer';
// for styling
import { H2 } from '../styled/App.style';

import AccountsWrapper from './AccountsWrapper';

const tempPlayer = {
  name: 'Temp Player',
  team: 'Vers',
  balls_stretchiness: 0,
  explosiveness_at_climax: 0,
  topping_aptitude: 0,
  versatile_capabilities: 0,
  appreciating_dOrifice: 0,
  kissing: 0,
  // general_enthusiasm: 0,
  coaxing_for_more: 0,
  notes: 'Temp Note',
  image_Url: 'RICK_WOLFMIER.jpg'
}

export class App extends Component {
  constructor(props) {
    super(props);
    // set up state with default data
    this.state = {
      currentPlayer: tempPlayer,
      showEditPlayer: false,
    };
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.showTeamStats = this.showTeamStats.bind(this);
  }

  renderPlayers() {
    return this.props.players.map(player => (
      <TeamList key={player._id} player={player} updateCurrentPlayer={this.updateCurrentPlayer}/>
    ));
  }

  updateCurrentPlayer(player) {
    this.setState({
      currentPlayer: player,
    });
  }

  showEditForm() {
    this.setState({
      showEditPlayer: true,
    })
  }

  showTeamStats() {
    this.setState({
      showEditPlayer: false,
    })
  }

  showForm() {
    if(this.state.showEditPlayer === true) {
      return (<Edit currentPlayer={this.state.currentPlayer} showTeamStats={this.showTeamStats} />);
    } else {
      return (<TeamStats players={this.props.players}/>);
    }
  }

  render() {
    // const { classes } = props;
    return (
      <MuiThemeProvider>
        <div className='container'>
          <AppBar
            title='Model App'
            iconClassNameRight='muidocs-icon-navigation-expand-more'
            showMenuIconButton={false}
          >
          <AccountsWrapper />
          </AppBar>
          <div>
            <div className='col s12 m7'>
              <Player player={this.state.currentPlayer} showEditForm={this.showEditForm}/>
            </div>
            <div className='col s12 m5'>
              <H2>Team List</H2>
                <Link to='/new' className='waves-effect waves-light btn'>Add Player</Link>
              <Divider />
                <List>
                  {this.renderPlayers()}
                </List>
              <Divider />
            </div>
          </div>
          <div className='row'>
            <div className='col s12'>
              <br />
              <Divider />
              {this.showForm()}
              <Divider />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  players: PropTypes.array.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('players');
  const user = Meteor.userId();

  return {
    players: Players.find({ owner: user }, { sort: { name: 1}}).fetch(),
  };
}, App);
