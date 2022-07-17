const algosdk = require('algosdk');

function change_page(mn){
    let userMnemonic = mn
    let userAccount = algosdk.mnemonicToSecretKey(userMnemonic);
    let sender = userAccount.addr;
    let app_args = [sender]
    let app_id = 16  
    // get node suggested parameters
    // user declared algod connection parameters
    const algodServer = "http://localhost";
    const algodPort = 4001;
    const algodToken = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    let client = new algosdk.Algodv2(algodToken, algodServer, algodPort);

    let params = client.getTransactionParams().do();
    // comment out the next two lines to use suggested fee
    params.fee = 1000;
    params.flatFee = true;

    // create unsigned transaction
    let txn = algosdk.makeApplicationNoOpTxn(sender, params, app_id, appArgs)


    // Sign the transaction
    let signedTxn = txn.signTxn(creatorAccount.sk);
    console.log("Signed transaction with txID: %s", txId);

    // Submit the transaction
    client.sendRawTransaction(signedTxn).do();

    // Wait for transaction to be confirmed
    confirmedTxn = algosdk.waitForConfirmation(client, txId, 4);
    //Get the completed Transaction
    console.log("Transaction " + txId + " confirmed in round " + confirmedTxn["confirmed-round"]);

    // display results
    let transactionResponse = client.pendingTransactionInformation(txId).do();
    console.log("Called app-id:",transactionResponse['txn']['txn']['apid']);

    const accountInfo = algodClient.getApplicationByID(app_id).do();
    const { key, value } = accountInfo.params["global-state"][1];

    console.log(key, value);
    return (value)
}