'use strict';

import React, { Component } from 'react';
// material ui
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import { Atag } from '../styled/App.style';

export default class TeamList extends Component {
  render() {
    return (
      <ListItem
        style={{ color: 'red' }}
        // primaryText={this.props.player.name}
        leftAvatar={<Avatar src='NICCOLO_NERI.jpg' />}
        // leftAvatar={<Avatar src={this.props.player.image_url} />}
      >
        {/* <Atag>{this.props.player.name}</Atag> */}
      </ListItem>
    )
  }
}
