"use strict";
import express from "express";
import db from "../models/index.js";
import config from "config";

const userModel = db.user;
const paymentModel = db.payment;

const _ = express.Router();

_.route("/create-account").post((req, res) => {
  try {
    const body = req.body;
    const result = userModel.findOne({
      where: { email: body.email },
    });
    result.then((data) => {
      if (data) {
        return res.send({
          status: "failed",
          message: `email address already exists`,
        });
      } else {
        userModel.create(body);
        return res.send({
          status: "success",
          message: "successfully create account",
        });
      }
    });
  } catch (error) {
    return res.status(501).send({ status: "failed", message: error.message });
  }
});

_.route("/make-payment").post((req, res) => {
  try {
    const {
      cardName,
      cardNumber,
      cardExpiry,
      cardCVV,
      address,
      city,
      state,
      zipCode,
      amount,
    } = req.body;

    var paymentDetails = {
      amount: amount,
      customerId: cardName,
    };
    if (!paymentDetails.amount || !paymentDetails.customerId) {
      res.status(400).send("Payment failed");
    } else {
      var params = {};
      params["MID"] = config.PaytmConfig.mid;
      params["WEBSITE"] = config.PaytmConfig.website;
      params["CHANNEL_ID"] = "WEB";
      params["INDUSTRY_TYPE_ID"] = "Retail";
      params["ORDER_ID"] = "TEST_" + new Date().getTime();
      params["CUST_ID"] = paymentDetails.customerId;
      params["TXN_AMOUNT"] = paymentDetails.amount;
      params["CALLBACK_URL"] = "http://localhost:3000/payment-response";

      var paytmChecksum = PaytmChecksum.generateSignature(
        params,
        process.env.PAYTM_MERCHANT_KEY
      );
      paytmChecksum
        .then(function (checksum) {
          let paytmParams = {
            ...params,
            CHECKSUMHASH: checksum,
          };
          res.json(paytmParams);
        })
        .catch(function (error) {
          return res.status(501).send({ status: "failed", message: error.message });
        });
    }
  } catch (error) {
    return res.status(501).send({ status: "failed", message: error.message });
  }
});

_.route("/payment-response").post((req, res) => {
  // Route for verifiying payment

  var body = "";

  req.on("data", function (data) {
    body += data;
  });

  req.on("end", function () {
    var html = "";
    var post_data = qs.parse(body);

    // verify the checksum
    var checksumhash = post_data.CHECKSUMHASH;
    // delete post_data.CHECKSUMHASH;
    var result = checksum_lib.verifychecksum(
      post_data,
      config.PaytmConfig.key,
      checksumhash
    );

    // Send Server-to-Server request to verify Order Status
    var params = { MID: config.PaytmConfig.mid, ORDERID: post_data.ORDERID };

    checksum_lib.genchecksum(
      params,
      config.PaytmConfig.key,
      function (err, checksum) {
        params.CHECKSUMHASH = checksum;
        post_data = "JsonData=" + JSON.stringify(params);

        var options = {
          hostname: "securegw-stage.paytm.in", // for staging
          // hostname: 'securegw.paytm.in', // for production
          port: 443,
          path: "/merchant-status/getTxnStatus",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Content-Length": post_data.length,
          },
        };

        // Set up the request
        var response = "";
        var post_req = https.request(options, function (post_res) {
          post_res.on("data", function (chunk) {
            response += chunk;
          });

          post_res.on("end", function () {
            var _result = JSON.parse(response);
            if (_result.STATUS == "TXN_SUCCESS") {
              // paymentModel.create()
              res.send("payment sucess");
            } else {
              res.send("payment failed");
            }
          });
        });

        // post the data
        post_req.write(post_data);
        post_req.end();
      }
    );
  });
});

export default _;
