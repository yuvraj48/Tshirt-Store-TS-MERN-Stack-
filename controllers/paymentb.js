var braintree = require("braintree");

var gateway = braintree.connect({
 
environment: braintree.Environment.Sandbox,
merchantId: "ggcpxk59fqvs89g8",
publicKey: "jrtrpbdhmzsjzwmf",
privateKey: "96dd27332a80e5fc570ec4b1ae847edb"
});

exports.getToken = (req, res) => {
  gateway.clientToken.generate({}, function(err, response) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.send(response);
    }
  });
};

exports.processPayment = (req, res) => {
  let nonceFromTheClient = req.body.paymentMethodNonce;

  let amountFromTheClient = req.body.amount;
  gateway.transaction.sale(
    {
      amount: amountFromTheClient,
      paymentMethodNonce: nonceFromTheClient,

      options: {
        submitForSettlement: true
      }
    },
    function(err, result) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json(result);
      }
    }
  );
};


