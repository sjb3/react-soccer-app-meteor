import React, { Component } from 'react';
// from material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
// other components to use
import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';
// for styling
import { H2 } from '../styled/App.style';

export default class App extends Component {
  constructor(props) {
    super(props);
    // set up state
    this.state = { playsers: [] };
  }
  // if components mount, load new state
  componentWillMount() {
    this.setState({ players: [
      {
        _id: 1,
        name: 'COLTON FORD',
        balls_stretchiness: 'N/A',
        explosiveness_at_climax: 'N/A',
        topping_aptitude: 'N/A',
        versatile_capabilities: 'N/A',
        appreciating_dOrifice: 'N/A',
        kissing: 'N/A',
        general_game_strategy: 'N/A',
        coaxing_for_more: 'N/A',
        image_url: 'COLTON_FORD.jpg'
      },
      {
        _id: 2,
        name: 'NICCOLO NERI',
        balls_stretchiness: 'N/A',
        explosiveness_at_climax: 'N/A',
        topping_aptitude: 'N/A',
        versatile_capabilities: 'N/A',
        appreciating_dOrifice: 'N/A',
        kissing: 'N/A',
        general_game_strategy: 'N/A',
        coaxing_for_more: 'N/A',
        image_url: 'NICCOLO_NERI.jpg'
      },
      {
        _id: 3,
        name: 'KRIS EVANS',
        balls_stretchiness: 3,
        explosiveness_at_climax: 3,
        topping_aptitude: 3,
        versatile_capabilities: 3,
        appreciating_dOrifice: 3,
        kissing: 2,
        general_game_strategy: 3,
        coaxing_for_more: 3,
        image_url: 'KRIS_EVANS.jpg'
      }
    ]});
  }

  renderPlayers() {
    return this.state.players.map(player => (
      <TeamList key={player._id} player={player} />
    ));
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className='container'>
          <AppBar
            title='Model App'
            iconClassNameRight='muidocs-icon-navigation-expand-more'
            showMenuIconButton={false}
          />
          <div>
            <div className='col s12 m7'><Player /></div>
            <div className='col s12 m5'>
              <H2>Team List</H2>
              <Divider />
                <List>
                  {this.renderPlayers()}
                </List>
              <Divider />
            </div>
            <div className='col s12 m5'><TeamStats /></div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
