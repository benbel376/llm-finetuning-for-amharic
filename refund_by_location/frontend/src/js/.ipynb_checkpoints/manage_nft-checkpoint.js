const algosdk = require('algosdk');


// Retrieve the token, server and port values for your installation in the 
// algod.net and algod.token files within the data directory

// UPDATE THESE VALUES
// const token = "TOKEN";
// const server = "SERVER";
// const port = PORT;

// sandbox
const token = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const server = "http://localhost";
const port = 4001;

// Function used to wait for a tx confirmation
const waitForConfirmation = async function (algodclient, txId) {
    let response = await algodclient.status().do();
    let lastround = response["last-round"];
    while (true) {
        const pendingInfo = await algodclient.pendingTransactionInformation(txId).do();
        if (pendingInfo["confirmed-round"] !== null && pendingInfo["confirmed-round"] > 0) {
            //Got the completed Transaction
            console.log("Transaction " + txId + " confirmed in round " + pendingInfo["confirmed-round"]);
            break;
        }
        lastround++;
        await algodclient.statusAfterBlock(lastround).do();
    }
};


// Function used to print created asset for account and assetid
const printCreatedAsset = async function (algodclient, account, assetid) {
    // note: if you have an indexer instance available it is easier to just use this
    //     let accountInfo = await indexerClient.searchAccounts()
    //    .assetID(assetIndex).do();
    // and in the loop below use this to extract the asset for a particular account
    // accountInfo['accounts'][idx][account]);
    let accountInfo = await algodclient.accountInformation(account).do();
    for (idx = 0; idx < accountInfo['created-assets'].length; idx++) {
        let scrutinizedAsset = accountInfo['created-assets'][idx];
        if (scrutinizedAsset['index'] == assetid) {
            console.log("AssetID = " + scrutinizedAsset['index']);
            let myparms = JSON.stringify(scrutinizedAsset['params'], undefined, 2);
            console.log("parms = " + myparms);
            break;
        }
    }
};
// Function used to print asset holding for account and assetid
const printAssetHolding = async function (algodclient, account, assetid) {
    // note: if you have an indexer instance available it is easier to just use this
    //     let accountInfo = await indexerClient.searchAccounts()
    //    .assetID(assetIndex).do();
    // and in the loop below use this to extract the asset for a particular account
    // accountInfo['accounts'][idx][account]);
    let accountInfo = await algodclient.accountInformation(account).do();
    for (idx = 0; idx < accountInfo['assets'].length; idx++) {
        let scrutinizedAsset = accountInfo['assets'][idx];
        if (scrutinizedAsset['asset-id'] == assetid) {
            let myassetholding = JSON.stringify(scrutinizedAsset, undefined, 2);
            console.log("assetholdinginfo = " + myassetholding);
            break;
        }
    }
};

// Recover accounts
// paste in mnemonic phrases here for each account

var address = "6UMSNCZUNWOTWAYRQKE3CV6JXSVLPYA4BMG77CKZM75VASAAOFSLNKTALA"
var mnemonic = "select canyon order half resemble clever tissue panther tunnel agent inspire degree system donate gorilla strong vocal divide about magic vessel beef throw ability idea"
var private = algosdk.mnemonicToSecretKey(mnemonic);

// Instantiate the algod wrapper
let algodclient = new algosdk.Algodv2(token, server, port);

// Debug Console should look similar to this

// THQHGD4HEESOPSJJYYF34MWKOI57HXBX4XR63EPBKCWPOJG5KUPDJ7QJCM  
// AJNNFQN7DSR7QEY766V7JDG35OPM53ZSNF7CU264AWOOUGSZBMLMSKCRIU   
// 3ZQ3SHCYIKSGK7MTZ7PE7S6EDOFWLKDQ6RYYVMT7OHNQ4UJ774LE52AQCU   


(async () => {
    const creator = address;
    const defaultFrozen = false;    
    const unitName = "DANCERT"; 
    const assetName = "Dan'certificate@arc3";
    const url = "https://s3.amazonaws.com/your-bucket/images/alice-nft.png";
    const managerAddr = address; 
    const reserveAddr = address;
    const genHash = "l05M2G4xMH/Qhd/EVQi8U/npVJFw6PROEotj4sQnvUg=";
    const freezeAddr = address;
    const clawbackAddr = address;
    const total = 1;                // NFTs have totalIssuance of exactly 1
    const decimals = 0;             // NFTs have decimals of exactly 0
    const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
        from: creator,
        assetName: "something",
        unitName: unitName,
        assetURL: url,
        assetMetadataHash: "sha256-/tih/7ew0eziEZIVD4qoTWb0YrElAuRG3b40SnEstyk=",
        manager: managerAddr,
        reserve: reserveAddr,
        genesisHash: genHash,
        clawback: clawbackAddr,
        freeze: freezeAddr,
        total: total,
        decimals: decimals,
        defaultFrozen: token.defaultFrozen,
        suggestedParams: algodclient.suggested_params,});


    let rawSignedTxn = txn.signTxn(private)
    let tx = (await algodclient.sendRawTransaction(rawSignedTxn).do());
    console.log("Transaction : " + tx.txId);
    let assetID = null;
    // wait for transaction to be confirmed
    await waitForConfirmation(algodclient, tx.txId);
    // Get the new asset's information from the creator account
    let ptx = await algodclient.pendingTransactionInformation(tx.txId).do();
    assetID = ptx["asset-index"];
    // console.log("AssetID = " + assetID);

    await printCreatedAsset(algodclient, address, assetID);
    await printAssetHolding(algodclient, address, assetID);
})().catch(e => {
    console.log(e);
    console.trace();
});
