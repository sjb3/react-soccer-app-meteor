'use strict';

import React, { Component } from 'react';
// material ui
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import { red500 } from 'material-ui/styles/colors';

import { Atag } from '../styled/App.style';


export default class TeamList extends Component {
  updateCurrentPlayer(player) {
    this.props.updateCurrentPlayer(player)
  }

  deleteplayer(playerId) {
    Meteor.call('deletePlayer', playerId, (err) => {
      if(err) {
        alert(`ERROR! ${err.message}`)
      }
      console.log('Player deleted!');
    })
  }

  render() {
    return (
      <ListItem
        style={{ color: 'red' }}
        leftAvatar={<Avatar src={this.props.player.image_url} />}
        rightIcon={<ActionDeleteForever hoverColor={red500}
          onClick={this.deleteplayer.bind(this, this.props.player._id)} />}
        onClick={this.updateCurrentPlayer.bind(this, this.props.player)}
      >
        <Atag>{this.props.player.name}</Atag>
      </ListItem>
    )
  }
}

