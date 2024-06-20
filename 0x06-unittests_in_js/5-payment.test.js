const sendPaymentRequestToApi = require('./5-payment');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', function () {
  beforeEach('Set up spy to use for each test', function () {
    sinon.spy(console, 'log');
  });
  afterEach('restore spy after each test', function () {
    console.log.restore();
  });
  it('check that console.log is called with the right arg', function () {
    sendPaymentRequestToApi(80, 30);

    expect(console.log.withArgs('The total is: 110').calledOnce).to.be.true;
  });
  it('check that console.log is called with the right arg', function () {
    sendPaymentRequestToApi(60, 10);

    expect(console.log.withArgs('The total is: 70').calledOnce).to.be.true;
  });
});
