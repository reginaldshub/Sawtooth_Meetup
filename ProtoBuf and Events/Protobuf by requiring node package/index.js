var protobuf = require("protobufjs");
protobuf.load("structuredBank.proto", function(err, root) {
    if (err)
        throw err;

    // Obtain a message type
    var create_account = root.lookupType("structuredBank.create_account");
    // console.log("type",create_account)

    var create_account_payload = { 
        customerId: 101,
        customerName: "regi",
        savingsBalance: 2000.20,
        checkingBalance:5000.50 
    };
    // console.log("create_account_payload",create_account_payload)

    // Verify the create_account_payload if necessary (i.e. when possibly incomplete or invalid)
    var errMsg = create_account.verify(create_account_payload);
    if (errMsg)
        throw Error(errMsg);

    // Create a new message
    var message = create_account.create(create_account_payload); // or use .fromObject if conversion is necessary
    console.log("message",message)

    // Encode a message to an Uint8Array (browser) or Buffer (node)
    var buffer = create_account.encode(message).finish();
    console.log("Buffer",buffer)

    // Decode an Uint8Array (browser) or Buffer (node) to a message
    var payloadBytesmessage = create_account.decode(buffer);
    console.log("payloadBytesMessage",payloadBytesmessage)

    // Maybe convert the message back to a plain object
    var object = create_account.toObject(message, {
        longs: String,
        enums: String,
        bytes: String,
    });
    console.log("object",object)
});
