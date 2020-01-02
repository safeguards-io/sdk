const policyResults = require('./policy_results')

class Safeguard {
  static provisioner = "terraform"

  get results(){
    return(policyResults.results);
  }
}

module.exports = Safeguard