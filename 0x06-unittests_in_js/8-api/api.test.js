const { expect } = require('chai');
const request = require('request');
const app = require('./api');

describe('Index page', function () {
  it('Correct status code and message', function (done) {
    request.get('http://localhost:7865/', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
