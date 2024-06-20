const { describe, it } = require('mocha');
const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should resolve with correct object when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch(err => {
        done(err);
      });
  });

  it('should reject with an error when success is false', function (done) {
    getPaymentTokenFromAPI(false)
      .then(response => {
        done(new Error('Expected promise to be rejected, but it was resolved'));
      })
      .catch(err => {
        expect(err).to.be.an('error');
        expect(err.message).to.equal('API request failed');
        done();
      });
  });
});
