import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/parentAction";

const Shop = () => {
  const dispatch = useDispatch();


  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div>
      <h1 className="mb-5 mt-5">Deposit/Withdraw Money</h1>
      <button
        className="btn btn-danger mx-2"
        onClick={() => withdrawMoney(100)}
      >
        -
      </button>
      Update Balance
      <button
        className="btn btn-success mx-2"
        onClick={() => depositMoney(100)}
      >
        +
      </button>
    </div>
  );
};

export default Shop;

