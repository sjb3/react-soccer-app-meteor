'use strict';

import React, { Component } from 'react';
// material ui
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';

import { Atag } from '../styled/App.style';

export default class TeamList extends Component {
  updateCurrentPlayer(player) {
    this.props.updateCurrentPlayer(player)
  }

  render() {
    return (
      <ListItem
        style={{ color: 'red' }}
        onClick={this.updateCurrentPlayer.bind(this, this.props.player)}
        leftAvatar={<Avatar src={this.props.player.image_url} />}
      >
        <Atag>{this.props.player.name}</Atag>
      </ListItem>
    )
  }
}

