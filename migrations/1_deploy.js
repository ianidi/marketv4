const BFactory = artifacts.require('BFactory');
const PoolManager = artifacts.require('PoolManager');

module.exports = function(deployer) {
  deployer.deploy(BFactory).then(function() {
    return deployer.deploy(PoolManager, BFactory.address);
  });
};
