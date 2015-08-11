/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Student = require('../api/student/student.model');

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Student.find({}).remove(function() {
  Student.create({
	"firstName" : "mark",
	"lastName" : "scott",
	"phone" : "55555555",
	"__v" : 0
},
{
	"firstName" : "glennnnnn",
	"lastName" : "forrrrrrest",
	"phone" : "123456789",
	"__v" : 0
},
{
	"firstName" : "peter",
	"lastName" : "sharrrrrrrrp",
	"phone" : "987654321",
	"__v" : 0
},
{
	"firstName" : "angus",
	"lastName" : "mckay",
	"phone" : "56785467865",
	"__v" : 0
},
{
	"firstName" : "tate",
	"lastName" : "mccutchan",
	"phone" : "5646754654",
	"__v" : 0
},
{
	"firstName" : "seb",
	"lastName" : "black",
	"phone" : "44343",
	"__v" : 0
},
{
	"firstName" : "michael",
	"lastName" : "monk",
	"phone" : "828928927",
	"__v" : 0
},
{
	"firstName" : "blake",
	"lastName" : "wells",
	"phone" : "54545454",
	"__v" : 0
},
{
	"firstName" : "john",
	"lastName" : "doe",
	"phone" : "54545454",
	"__v" : 0
},
{
	"firstName" : "mmmmmmark",
	"lastName" : "sssssscott",
	"phone" : "55555555",
	"__v" : 0
}, function() {
      console.log('finished populating users');
    }
  );
});
