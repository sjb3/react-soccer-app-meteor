'use strict';

import React, { Component } from 'react';
import { H2 } from '../styled/App.style';
import { Radar } from 'react-chartjs-2';
import Divider from 'material-ui/Divider';

export default class TeamStats extends Component {
  render() {
    const { players } = this.props;
    const numPlayers = players.length;

    const balls_stretchiness = Math.round((players.reduce((balls_stretchiness, player) => {
      return balls_stretchiness + player.balls_stretchiness;
    }, 0) / (3 * numPlayers )) * 100);

    const explosiveness_at_climax = Math.round((players.reduce((explosiveness_at_climax, player) => {
      return explosiveness_at_climax + player.explosiveness_at_climax;
    }, 0) / (3 * numPlayers )) * 100);

    const topping_aptitude = Math.round((players.reduce((topping_aptitude, player) => {
      return topping_aptitude  + player.topping_aptitude;
    }, 0) / (3 * numPlayers )) * 100);

    const versatile_capabilities = Math.round((players.reduce((versatile_capabilities, player) => {
      return versatile_capabilities + player.versatile_capabilities;
    }, 0) / (3 * numPlayers )) * 100);

    const appreciating_dOrifice = Math.round((players.reduce((appreciating_dOrifice, player) => {
      return appreciating_dOrifice + player.appreciating_dOrifice;
    }, 0) / (3 * numPlayers )) * 100);

    const kissing = Math.round((players.reduce((kissing, player) => {
      return kissing + player.kissing;
    }, 0) / (3 * numPlayers )) * 100);

    const coaxing_for_more = Math.round((players.reduce((coaxing_for_more, player) => {
      return coaxing_for_more + player.coaxing_for_more;
    }, 0) / (3 * numPlayers )) * 100);

    const data = {
      labels: ['Balls Stretchiness', 'Explosiveness at Climax', 'Topping Aptitude', 'Versatile Capabilities', 'Appreciating dOrifice', 'Kissing', 'Coaxing for More?'],
      datasets: [
        {
          label: 'Model Stats',
          backgroundColor: 'rgba(143, 202, 249, 0.2)',
          borderColor: 'rgba(12, 71, 16, 1)',
          pointBackgroundColor: 'rgba(12, 71, 162, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [balls_stretchiness, explosiveness_at_climax, topping_aptitude, versatile_capabilities, appreciating_dOrifice, kissing, coaxing_for_more]
        },
      ]
    };

    return (
      <div>
        <H2>Team Stats</H2>
        <div className='row'>
          <div className='col s12 m5'>
            <Radar
              data={data}
              width={500}
              height={500}
              option={{
                maintainAspectRatio: false
              }} />
          </div>
        </div>
        <div className='col s12 m5'>
          <h4>Scores in % of max possible</h4>
          <Divider />
          <h4>Team's offense 45%</h4>
          <h4>Team's defense 45%</h4>
          <h4>Team's total 45%</h4>
          <Divider />
          <h4>Number of players</h4>

        </div>
      </div>
    )
  }
}
