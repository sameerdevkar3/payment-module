import { useNavigate } from "react-router-dom";
import React from "react";
export default function Pay () {
    const navigate = useNavigate();
  return (
    <>
      <div
        className="d-flex justify-content-center mt-5"
        onClick={() => navigate("/make-payment")}
        style={{ cursor:"pointer"}}
      >
        <div className="card-blue p-3 text-white mb-3" style={{ width: 200 }}>
          <span>You have to pay</span>
          <div className="d-flex flex-row align-items-end mb-3">
            <h1 className="mb-0 yellow">$888</h1>
          </div>
          <span>
            Enjoy all the features and perk after you complete the payment
          </span>
          <a href="#" className="yellow decoration">
            Know all the features
          </a>
        </div>
      </div>
    </>
  );
}
