'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TeamSchema = new mongoose.Schema({
  team: String,
  origin: String, //three letters?
  player: [String, String, String]
});

var Team = mongoose.model('Teams', TeamSchema);

Team.remove({}, function(err) {
  if (err) {
    console.log('error deleting old data.');
  }
});

var teamTest = new Team({
  team: 'nicks',
  origin: 'San Francisco',
  player: ['MP', 'MP2', 'MP3']
});


teamTest.save(function(err) {
  if (err) console.log('Error on save!');
});

