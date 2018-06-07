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
    return (
      <Card>
        <CardMedia
          overlay={<CardTitle titleStyle={{ fontSize: 20, fontFamily: 'Satisfy' }} title="Colton Ford" subtitle="Falcon's" />}
        >
          <img src='COLTON_FORD.jpg' />
        </CardMedia>
        <CardText>
          <div style={styles.wrapper}>
          <Chip
          backgroundColor={red100}
          style={styles.chip}
          >
            <Avatar size={32} color={red100} backgroundColor={red500}>
              4.5
            </Avatar>
            Balls Stretchiness
          </Chip>
          <Chip
          backgroundColor={red100}
          style={styles.chip}
          >
          <Avatar size={32} color={red100} backgroundColor={red500}>
            5
          </Avatar>
          Explosiveness at Climax
        </Chip>
        <Chip
          backgroundColor={red100}
          style={styles.chip}
          >
          <Avatar size={32} color={red100} backgroundColor={red500}>
            4
          </Avatar>
          Topping aptitude
        </Chip>
        <Chip
          backgroundColor={red100}
          style={styles.chip}
          >
          <Avatar size={32} color={red100} backgroundColor={red500}>
            2.5
          </Avatar>
          Versatile Capabilities
        </Chip>
        <Chip
          backgroundColor={red100}
          style={styles.chip}
          >
          <Avatar size={32} color={red100} backgroundColor={red500}>
            2
          </Avatar>
          Appreciating d'Orifice
        </Chip>
        <Chip
          backgroundColor={red100}
          style={styles.chip}
          >
          <Avatar size={32} color={red100} backgroundColor={red500}>
            1.5
          </Avatar>
          Kissing?
        </Chip>
        <Chip
          backgroundColor={red100}
          style={styles.chip}
          >
          <Avatar size={32} color={red100} backgroundColor={red500}>
            4
          </Avatar>
          General Game Strategy
        </Chip>
        <Chip
          backgroundColor={red100}
          style={styles.chip}
          >
          <Avatar size={32} color={red100} backgroundColor={red500}>
            2
          </Avatar>
          Coaxing for more?
        </Chip>
        </div>
        </CardText>
        <CardActions>

        </CardActions>
      </Card>
    )
  }
}
