const shim = require('fabric-shim');
const util = require('util');

const AssetManagementChaincode = class {
  async Init(stub) {
    // Initialize the chaincode
  }

  async Invoke(stub) {
    let ret = stub.getFunctionAndParameters();
    console.log(ret);
    let method = this[ret.fcn];
    if (!method) {
      console.log('No method of name:' + ret.fcn + ' found');
      return shim.error(new Error('Invalid function name'));
    }
    try {
      let payload = await method(stub, ret.params);
      return shim.success(payload);
    } catch (err) {
      console.log(err);
      return shim.error(err);
    }
  }

  async createAsset(stub, args) {
    // Create a new asset
  }

  async updateAsset(stub, args) {
    // Update an existing asset
  }

  async queryAsset(stub, args) {
    // Query an asset
  }

  async getAssetHistory(stub, args) {
    // Get an asset's transaction history
  }
};

shim.start(new AssetManagementChaincode());
