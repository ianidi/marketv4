const BFactory = artifacts.require('BFactory');
const PoolManager = artifacts.require('PoolManager');
const Market = artifacts.require('Market');

module.exports = function(deployer) {
  deployer.deploy(BFactory).then(function() {
    return deployer.deploy(PoolManager, BFactory.address).then(function() {
      return deployer.deploy(Market, PoolManager.address);
    });
  });
};
