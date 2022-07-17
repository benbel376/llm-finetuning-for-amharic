const main = async () => {
  const locationFactory = await hre.ethers.getContractFactory("refunder");
  const locationContract = await locationFactory.deploy();

  await locationContract.deployed();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
