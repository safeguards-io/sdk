const { expect } = require('chai');
const { Safeguard } = require("../index")
const { SkipResultError, FailResultError } = require("../src/policy_results")

describe('safeguards', () => {
  describe('sdk', () => {
    before(()=> {
      this.safeguard = new Safeguard();
    })

    it('should be able to return positive result', () => {
      expect(this.safeguard.results.pass()).to.be.true;
    });

    it('should be able to skip', () => {
      expect(() => this.safeguard.results.skip()).to.throw(SkipResultError)
    })

    it('should be able to fail', () => {
      expect(() => this.safeguard.results.fail()).to.throw(FailResultError)
    })
  });
});
