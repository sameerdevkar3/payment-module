import React, { useState } from "react";
export default function Payment() {
  const [cardName, setCardName] = useState();
  const [cardNumber, setCardNumber] = useState();
  const [cardExpiry, setCardExpiry] = useState();
  const [cardCVV, setCardCVV] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [zipCode, setZipCode] = useState();
  const [amount, setAmount] = useState(888);

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      cardName ||
      cardNumber ||
      cardExpiry ||
      cardCVV ||
      address ||
      city ||
      state ||
      zipCode ||
      amount
    ) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        cardName: cardName,
        cardNumber: cardNumber,
        cardExpiry: cardExpiry,
        cardCVV: cardCVV,
        address: address,
        city: city,
        state: state,
        zipCode: zipCode,
        amount: amount,
      });

      console.warn(raw);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      fetch("http://localhost:3000/make-payment", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }
  };

  const expriy_format = (value) => {
    if (!value) {
      return "";
    }
    const expdate = value;
    const expDateFormatter =
      String(expdate).replace(/\//g, "").substring(0, 2) +
      (String(expdate).length > 2 ? "/" : "") +
      String(expdate).replace(/\//g, "").substring(2, 4);

    return expDateFormatter;
  };
  const handleChangeCVV = (value) => {
    if (value.target.value.length === 3) {
      setCardCVV(value.target.value);
    }
  };

  const handleChangeCardNumber = (value) => {
    if (value.target.value.length === 16) {
      setCardNumber(value.target.value);
    }
  };

  return (
    <>
      <div
        className="container shadow-lg p-3 mb-5 bg-white rounded"
        style={{ width: "20%" }}
      >
        <div className="mb-4">
          <h2>Confirm order and pay</h2>
          <span>
            please make the payment, after that you can enjoy all the features
            and benefits.
          </span>
        </div>
        <div>
          <form onSubmit={onSubmit}>
            <div>
              <div className="p-3">
                <h6 className="text-uppercase">Payment details</h6>
                <div className="form-group inputbox mt-3">
                  <input
                    type="text"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    name="name"
                    className="form-control"
                    required="required"
                  />
                  <span>Name on card</span>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group inputbox mt-3 mr-2">
                      <input
                        type="number"
                        value={cardNumber}
                        onChange={handleChangeCardNumber}
                        name="card_number"
                        className="form-control"
                        maxLength={16}
                        required="required"
                      />
                      <i className="fa fa-credit-card" />{" "}
                      <span>Card Number</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex flex-row">
                      <div className="form-group inputbox mt-3 mr-2">
                        <input
                          type="text"
                          onChange={(e) => setCardExpiry(e.target.value)}
                          name="card_expiry"
                          className="form-control"
                          maxLength={5}
                          value={expriy_format(cardExpiry)}
                          required="required"
                        />
                        <span>Expiry</span>
                      </div>
                      <div className="form-group inputbox mt-3 mr-2">
                        <input
                          type="number"
                          value={cardCVV}
                          onChange={handleChangeCVV}
                          name="card_cvv"
                          className="form-control"
                          maxLength={3}
                          pattern="[0-9][0-9][0-9]"
                          required="required"
                        />
                        <span>CVV</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <h6 className="text-uppercase">Billing Address</h6>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <div className="form-group inputbox mt-3 mr-2">
                        <input
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          name="payment_address"
                          className="form-control"
                          required="required"
                        />
                        <span>Street Address</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group inputbox mt-3 mr-2">
                        <input
                          type="text"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          name="payment_city"
                          className="form-control"
                          required="required"
                        />
                        <span>City</span>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <div className="form-group inputbox mt-3 mr-2">
                        <input
                          type="text"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          name="payment_state"
                          className="form-control"
                          required="required"
                        />
                        <span>State/Province</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group inputbox mt-3 mr-2">
                        <input
                          type="number"
                          value={zipCode}
                          onChange={(e) => setZipCode(e.target.value)}
                          name="zipcode"
                          className="form-control"
                          required="required"
                        />
                        <span>Zip code</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group mt-4 mb-4 d-flex justify-content-between">
                <span>Previous step</span>
                <button className="btn btn-primary px-3" type="submit">
                  Pay ${amount}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
