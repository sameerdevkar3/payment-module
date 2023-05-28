export default function HomeLogin() {
  return (
    <>
      <div
        className="container shadow-lg p-3 mb-5 bg-white rounded"
        style={{ width: "50%" }}
      >
        <div>
          <div className="row mb-5 mt-2">
            <div className="col-6">Logo</div>
            <div className="col-6 text-end">Login Link</div>
          </div>
          <div>
            <h2>Manage your freelance business with us!</h2>
            <p>
              Takes less than 15 minutes to feel out all the informationexcited
              to ----- your business
            </p>
          </div>
        </div>
        <form method="post">
          {/* Email input */}
          <div className={"form-group inputbox mt-3 mr-2"}>
            <input
              type="email"
              ngmodel
              name="email"
              className="form-control"
              required="required"
            />
            <i className="fa fa-credit-card" /> <span>Email</span>
          </div>
          {/* FullName input */}
          <div className="form-group inputbox mt-3 mr-2">
            <input
              type="text"
              ngmodel
              name="fullName"
              className="form-control"
              required="required"
            />
            <i className="fa fa-credit-card" /> <span>Full Name</span>
          </div>
          {/* Password input */}
          <div className="form-group inputbox mt-3 mr-2">
            <input
              type="password"
              ngmodel
              name="password"
              className="form-control"
              required="required"
            />
            <i className="fa fa-credit-card" /> <span>Password</span>
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className="btn btn-primary btn-block mb-4 form-control"
          >
            Get Started
          </button>
          {/* Register buttons */}
          <div className="text-left">
            <p className="m-0 p-0">By signing uo you are agreeing to our</p>
            <p>
              <a href="#!" className="text-dark fs-5 text-decoration-none">
                Terms And Conditions
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
