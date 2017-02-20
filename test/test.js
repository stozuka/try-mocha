'use strict';

const models = require('../models');
const assert = require('assert');
const rp = require('request-promise');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('User', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      models.User
        .create({name: 'Luna', 'occupationId': 1})
        .then(function (saved) {
          done();
        })
        .catch(function (err) {
          done(err);
        });
    });
  });
});

describe('GET users', function() {
  it('should respond without error', function(done) {
    rp('http://127.0.0.1:3000')
     .then(function (results) {
       done();
     })
     .catch(function (err) {
       done(err);
     });
  });
});

describe('Delete User', function() {
  let userId;

  before(function () {
    return models.User
      .create({name: 'Luna', occupationId: 1})
      then(function (saved) {
        userId = saved.get('id');
        return null;
      })
      .catch(err)
  });

  describe('delete', function() {
    it('should delete user without error', function(done) {
      models.User
        .destroy({where: {id: userId}})
        .then(function (saved) {
          done();
        })
        .catch(function (err) {
          done(err);
        });
    });
  });
});
