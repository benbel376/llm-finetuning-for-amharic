const { expect } = require('chai');

var chai = require('chai');

describe('refunder test', function () {
    before(async function () {
      refunder = await ethers.getContractFactory('refunderContract');
      refunder = await refunder.deploy();
      await refunder.deployed();
    });

    it('retrieve returns a value previously stored', async function () {
        await refunder.add_employee('0x6789546d8E4632Ec54740943E41aE1f7D0647F62', '12309', '13515', "132", "0.001");
      expect((await refunder.get_all).toString()).to.equal('0x6789546d8E4632Ec54740943E41aE1f7D0647F62');
        });

  });