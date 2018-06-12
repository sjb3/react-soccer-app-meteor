'use strict';

import React, { Component } from 'react';

export default class Edit extends Component {
  showTeamStats() {
    this.props.showTeamStats();
  }

  editPlayer(e) {
    e.preventDefault();

    let player = {
      _id: this.props.currentPlayer._id,
      name: this.refs.name.value,
      team: this.refs.team.value,
      balls_stretchiness: this.refs.balls_stretchiness.value,
      explosiveness_at_climax: this.refs.explosiveness_at_climax.value,
      topping_aptitude: this.refs.topping_aptitude.value,
      versatile_capabilities: this.refs.versatile_capabilities.value,
      appreciating_dOrifice: this.refs.appreciating_dOrifice.value,
      kissing: this.refs.kissing.value,
      // general_enthusiasm: this.refs.general_enthusiasm.value,
      coaxing_for_more: this.refs.coaxing_for_more.value,
      notes: this.refs.notes.value,
      createdAt: new Date(),
      owner: Meteor.userId(),
      image_Url: this.refs.image_Url.value,
    }
    // console.log('Success', Player);
    Meteor.call('updatePlayer', player, (err) => {
      if(err) {
        alert(`ERROR! ${err.message}`)
      }
      alert('Player updated')
      this.showTeamStats(); // pushing to the main page
    })
  }

  render() {
    const { currentPlayer } = this.props;
    return (
      <div className="row">
        <form onSubmit={this.editPlayer.bind(this)} style={{ fontStyle: 'italic', background: 'white', color: 'black' }} className="col s12">
          <h3 style={{ textAlign: 'center' }}>Add a New Player</h3>

          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Name" ref="name" type="text" className="validate" defaultValue={currentPlayer.name} />
            </div>
            <div className="input-field col s6">
              <input placeholder="Team" ref="team" type="text" className="validate" defaultValue={currentPlayer.team} />
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <h5>Balls Stretchiness</h5>
              <select className="browser-default" ref="balls_stretchiness" defaultValue={currentPlayer.balls_stretchiness}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="col s6">
              <h5>Explosiveness at Climax</h5>
              <select className="browser-default" ref="explosiveness_at_climax" defaultValue={currentPlayer.explosiveness_at_climax}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <h5>Topping Aptitude</h5>
              <select className="browser-default" ref="topping_aptitude" defaultValue={currentPlayer.topping_aptitude}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="col s6">
              <h5>Versatility?</h5>
              <select className="browser-default" ref="versatile_capabilities" defaultValue={currentPlayer.versatile_capabilities}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <h5>Appreciating d'Orifice</h5>
              <select className="browser-default" ref="appreciating_dOrifice" defaultValue={currentPlayer.appreciating_dOrifice}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="col s6">
              <h5>Kissing?</h5>
              <select className="browser-default" ref="kissing" defaultValue={currentPlayer.kissing}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
          </div>

          <div className="row">
            {/* <div className="col s6">
              <h5>General Enthusiasm</h5>
              <select className="browser-default" ref="general_enthusiasm" defaultValue={currentPlayer.general_enthusiasm}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div> */}
            <div className="col s6">
              <h5>Coaxing for More?</h5>
              <select className="browser-default" ref="coaxing_for_more" defaultValue={currentPlayer.coaxing_for_more}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <textarea placeholder="Notes" ref="notes" className="materialize-textarea"/>
            </div>
            <div className="col s6">
              <textarea placeholder="Type Model Name" ref="image_Url" className="materialize-textarea"/>
            </div>
            <div className="col s6">
              <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>

        </form>
      </div>
    )
  }
}

