'use strict';

import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Players = new Mongo.Collection('players');

const PlayerSchema = new SimpleSchema({
  name: { type: String },
  team: { type: String },
  balls_stretchiness: { type: Number, defaultValue: 0 },
  explosiveness_at_climax: { type: Number, defaultValue: 0 },
  topping_aptitude: { type: Number, defaultValue: 0 },
  versatile_capabilities: { type: Number, defaultValue: 0 },
  appreciating_dOrifice: { type: Number, defaultValue: 0 },
  kissing: { type: Number, defaultValue: 0 },
  general_game_strategy: { type: Number, defaultValue: 0 },
  coaxing_for_more: { type: Number, defaultValue: 0 },
  notes: { type: String, optional: true },
});

Players.attachSchema(PlayerSchema);