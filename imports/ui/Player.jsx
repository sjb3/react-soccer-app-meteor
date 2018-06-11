'use strict';

import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { red100, red500 } from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: 12,
  },
};

export default class Player extends Component {

  render() {
    const { player } = this.props;
    return (
      <Card>
        <CardMedia
          overlay={<CardTitle titleStyle={{ fontSize: 20, fontFamily: 'Satisfy' }} title={player.name} subtitle={player.team} />}
        >
          <img src='BUCK_HAYES.jpg' />
          {/* <img src={player.image_Url} /> */}
        </CardMedia>
        <CardText>general_enthusiasm
          <div style={styles.wrapper}>
          <Chip
          backgroundColor={red100}
          style={styles.chip}
          >
            <Avatar size={32} color={red100} backgroundColor={red500}>
              {player.balls_stretchiness}
            </Avatar>
            Balls Stretchiness
          </Chip>
          <Chip
          backgroundColor={red100}
          style={styles.chip}
          >
          <Avatar size={32} color={red100} backgroundColor={red500}>
            {player.explosiveness_at_climax}
          </Avatar>
          Explosiveness at Climax
        </Chip>
        <Chip
          backgroundColor={red100}
          style={styles.chip}
          >
          <Avatar size={32} color={red100} backgroundColor={red500}>
            {player.topping_aptitude}
          </Avatar>
          Topping aptitude
        </Chip>
        <Chip
          backgroundColor={red100}
          style={styles.chip}
          >
          <Avatar size={32} color={red100} backgroundColor={red500}>
            {player.versatile_capabilities}
          </Avatar>
          Versatile Capabilities
        </Chip>
        <Chip
          backgroundColor={red100}
          style={styles.chip}
          >
          <Avatar size={32} color={red100} backgroundColor={red500}>
            {player.appreciating_dOrifice}
          </Avatar>
          Appreciating d'Orifice
        </Chip>
        <Chip
          backgroundColor={red100}
          style={styles.chip}
          >
          <Avatar size={32} color={red100} backgroundColor={red500}>
            {player.kissing}
          </Avatar>
          Kissing?
        </Chip>
        <Chip
          backgroundColor={red100}
          style={styles.chip}
          >
          <Avatar size={32} color={red100} backgroundColor={red500}>
            {player.general_enthusiasm}
          </Avatar>
          General Enthusiasm
        </Chip>
        <Chip
          backgroundColor={red100}
          style={styles.chip}
          >
          <Avatar size={32} color={red100} backgroundColor={red500}>
            {player.coaxing_for_more}
          </Avatar>
          Coaxing for more?
        </Chip>

        <Chip
          backgroundColor={red100}
          style={styles.chip}
          >
          note: {player.notes}
        </Chip>
        </div>
        </CardText>
        <CardActions>

        </CardActions>
      </Card>
    )
  }
}
