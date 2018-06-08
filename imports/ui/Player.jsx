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
          <img src='NICCOLO_NERI.jpg' />
        </CardMedia>
        <CardText>
          <div style={styles.wrapper}>
          <Chip
          backgroundColor={red100}
          style={styles.chip}
          >
            <Avatar size={32} color={red100} backgroundColor={red500}>
              3
            </Avatar>
            Balls Stretchiness
          </Chip>
          <Chip
          backgroundColor={red100}
          style={styles.chip}
          >
          <Avatar size={32} color={red100} backgroundColor={red500}>
            2.5
          </Avatar>
          Explosiveness at Climax
        </Chip>
        <Chip
          backgroundColor={red100}
          style={styles.chip}
          >
          <Avatar size={32} color={red100} backgroundColor={red500}>
            3
          </Avatar>
          Topping aptitude
        </Chip>
        <Chip
          backgroundColor={red100}
          style={styles.chip}
          >
          <Avatar size={32} color={red100} backgroundColor={red500}>
            3
          </Avatar>
          Versatile Capabilities
        </Chip>
        <Chip
          backgroundColor={red100}
          style={styles.chip}
          >
          <Avatar size={32} color={red100} backgroundColor={red500}>
            3
          </Avatar>
          Appreciating d'Orifice
        </Chip>
        <Chip
          backgroundColor={red100}
          style={styles.chip}
          >
          <Avatar size={32} color={red100} backgroundColor={red500}>
            3
          </Avatar>
          Kissing?
        </Chip>
        <Chip
          backgroundColor={red100}
          style={styles.chip}
          >
          <Avatar size={32} color={red100} backgroundColor={red500}>
            3
          </Avatar>
          General Enthusiasm
        </Chip>
        <Chip
          backgroundColor={red100}
          style={styles.chip}
          >
          <Avatar size={32} color={red100} backgroundColor={red500}>
            2.5
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
