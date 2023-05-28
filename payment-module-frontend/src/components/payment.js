export default function payment() {
  return (
    <>
      <div
        className="container shadow-lg p-3 mb-5 bg-white rounded"
        style={{ width: "50%" }}
      >
        <div className="mb-4">
          <h2>Confirm order and pay</h2>
          <span>
            please make the payment, after that you can enjoy all the features
            and benefits.
          </span>
        </div>
        <div>
          <form method="post">
            <div>
              <div className="p-3">
                <h6 className="text-uppercase">Payment details</h6>
                <div className="form-group inputbox mt-3">
                  <input
                    type="text"
                    ngmodel
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
                        type="text"
                        ngmodel
                        name="card_number"
                        className="form-control"
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
                          ngmodel
                          name="card_expiry"
                          className="form-control"
                          required="required"
                        />
                        <span>Expiry</span>
                      </div>
                      <div className="form-group inputbox mt-3 mr-2">
                        <input
                          type="text"
                          ngmodel
                          name="card_cvv"
                          className="form-control"
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
                          ngmodel
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
                          ngmodel
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
                          ngmodel
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
                          type="text"
                          ngmodel
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
                <button className="btn btn-primary px-3">Pay $888</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
