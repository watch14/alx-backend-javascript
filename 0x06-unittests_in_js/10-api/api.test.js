const { expect } = require('chai');
const request = require('request');
const app = require('./api');

describe('Login endpoint', function () {
  it('POST /login returns correct message', function (done) {
    const userData = { userName: 'Betty' };
    request.post({
      url: 'http://localhost:7865/login',
      body: userData,
      json: true
    }, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});

describe('Available payments endpoint', function () {
  it('GET /available_payments returns correct structure', function (done) {
    request.get('http://localhost:7865/available_payments', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.deep.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
      done();
    });
  });
});
