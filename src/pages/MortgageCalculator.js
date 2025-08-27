import React from 'react';
import '../styles/MortgageCalculator.css';


export default function MortgageCalculator (){

    const [houseCost, setHouseCost] = React.useState(300000);
    const [downPayment, setDownPayment] = React.useState(houseCost*0.2);
    const [loanTerm, setLoanTerm] = React.useState(30);
    const [interestRate, setInterestRate] = React.useState(6.6);
    const loanAmount = houseCost-downPayment;
    const trueInterestRate = interestRate/100;
    const percentDown = downPayment/houseCost*100;
    const totalMonths = loanTerm * 12;
    const monthlyInterest = trueInterestRate / 12;
    const monthlyPayment = loanAmount * ((monthlyInterest*(1+monthlyInterest)**totalMonths)/((1+monthlyInterest)**totalMonths-1))
    const totalPaid = monthlyPayment * totalMonths;
    const totalInterestPaid = totalPaid - houseCost;


    return (
        <div id="mortgage-container">
            <h2 className="calculator-title">Mortgage Calculator</h2>
            <div className="forms-container">
                {/* If you hit enter, the page will not reload */}
                <form className="input-form" onSubmit={e => e.preventDefault()}>
                    {/* Home Cost Input and Label */}
                    <div className="form-item" id="house-cost">
                        <label htmlFor="house-cost">Home Cost </label>
                        <input 
                            type="number" 
                            id="house-cost" 
                            value={houseCost} 
                            name="house-cost" 
                            step="25000"
                            onChange={(e) => setHouseCost(e.target.value)}
                        />
                    </div>
                    {/* Down Payment Input and Label */}
                    <div className="form-item" id="down-payment">
                        <label htmlFor="down-payment">Down Payment </label>
                        <input 
                            type="number" 
                            id="down-payment" 
                            value={downPayment} 
                            name="down-payment" 
                            step="5000"
                            onChange={(e) => setDownPayment(e.target.value)}
                        />
                        {percentDown}%
                    </div>

                    {/* Loan Term Input and Label */}
                    <div className="form-item" id="loan-term">
                        <label htmlFor="loan-term">Loan Term </label>
                        <select
                            id="loan-term" 
                            name="loan-term"
                            onChange={(e) => setLoanTerm(e.target.value)}
                        >
                            <option value="30">30 Years</option>
                            <option value="20 ">20 Years</option>
                            <option value="15">15 Years</option>
                            <option value="10">10 Years</option>
                        </select>
                    </div>

                    {/* Interest Rate Input and Label */}
                    <div className="form-item" id="interest-rate">
                        <label htmlFor="down-payment">Interest Rate </label>
                        <input 
                            type="number"
                            min="1"
                            max="100"
                            step="0.1"
                            id="interest-rate" 
                            value={interestRate} 
                            name="interest-rate" 
                            onChange={(e) => setInterestRate(e.target.value)}
                        />
                    </div>
                </form>
                <div className="summary">
                    <h2 className="title">Mortgage Summary</h2>
                    <p>If you pay {Math.round(houseCost).toLocaleString()} for a house today, with a {percentDown}% down payment, a loan term of {loanTerm} years, 
                        and an interest rate of {interestRate}%, you will end up paying a total of ${Math.round(totalPaid).toLocaleString()}, which equates 
                        to ${Math.round(totalInterestPaid).toLocaleString()} in interest.
                    </p>
                    <p className="text">House Cost: {Math.round(houseCost).toLocaleString()}</p>
                    {/* <p>House Cost: ${Math.round(houseCost).toLocaleString()}</p>
                    <p>Down Payment: ${Math.round(downPayment).toLocaleString()} | {percentDown}%</p>
                    <p>Loan Term: {loanTerm} years</p>
                    <p>Interest Rate: {interestRate} %</p>
                    <p>Total Paid: ${Math.round(totalPaid).toLocaleString()}</p>
                    <p>Total Interest Paid: ${Math.round(totalInterestPaid).toLocaleString()}</p> */}

                </div>
            </div>
        </div>
    );
}