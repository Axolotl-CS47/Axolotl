const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();

app.get('/flights/search', function(req, res) {
  res.status(200).json({ location_departure:'YYZ',itinerary_type: 'ONE_WAY' });
});


app.get("/places/geoname", (req, res) => {
  try {
    res
      .status(200)
      .json({activities:"CN Tower"});
  } catch(e) {
    console.error(e);
  }
});

  describe('GET /flights/search', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/flights/search')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          assert(response.body.location_departure, 'CN Tower')
          done();
      })
    });
  });


  describe('GET /places/geoname', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/places/geoname')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .then(response => {
          assert(response.body.activities, 'YYZ')
          done();
      })
    });
  });