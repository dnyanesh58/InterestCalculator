import React, { useState } from "react";



function LoanCalc() {
    var [loanAmt,setloanAmt] = useState();
    var [rateOfInt,setrateOfInt] = useState();
    var [timePeriod,settimePeriod] = useState();

    var [interest,setinterest] = useState();
    var [monthlypayment,setmonthlypayment] = useState();
    var [totalamount,settotalamount] = useState();

    function calc() 
    {
        var amount = parseInt(loanAmt);
        var roi = parseInt(rateOfInt);
        var period = parseInt(timePeriod);

        var a = (amount * (roi/100) * period);
        var b = (a / 12);
        var c = (amount + a);

        setinterest(a);
        setmonthlypayment(b);
        settotalamount(c);

        const clearState = () =>
        {
            setloanAmt();
            setrateOfInt();
            settimePeriod();
        }
    }

  return (
    <div>
        <fieldset className="container">
        <br></br>
          <label> Amount of loan (any currency) : </label>{" "}
          <input type="number" name="al" id="al" onChange={(event) =>{
            setloanAmt(event.target.value)
          }}></input>
        <br></br>
          <label> Annual percentange rate of interest : </label>{" "}
          <input type="number" name="roi" id="roi" onChange={(event) =>{
            setrateOfInt(event.target.value)
          }}></input>
        <br></br>
          <label> Repayment period in years : </label>{" "}
          <input type="number" name="py" id="py" onChange={(event) =>{
            settimePeriod(event.target.value)
          }}></input>
        <br></br>
        <br></br>
          <button
            type="button" name="btn" id="btn" onClick={calc}
            className="btn btn-dark"> Compute </button>
        <br></br>
        <br></br>
        <h2> Payment Information : </h2>
        <br></br>
          Your monthly payment will be :{" "}
          <input type="number" name="mp" id="mp" value={monthlypayment}></input>
        <br></br>
          Your total payment will be :{" "}
          <input type="number" name="tp" id="tp" value={totalamount}></input>
        <br></br>
          Your total interest payment will be :{" "}
          <input type="number" name="tip" id="tip" value={interest}></input>
        <br></br>
        <br></br>
        </fieldset>
    </div>
  );
}

export default LoanCalc;
