'use client';

import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const EmiCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(30000); // Default principal amount
  const [months, setMonths] = useState<number>(9); // Default tenure in months
  const [interestRate, setInterestRate] = useState<number>(3); // Default interest rate
  const [emi, setEmi] = useState<number>(0); // EMI result
  const [totalInterest, setTotalInterest] = useState<number>(0); // Total interest payable

  // Function to calculate EMI
  const calculateEMI = (principal: number, tenure: number, rate: number) => {
    const monthlyRate = rate / 12 / 100; // Convert annual rate to monthly rate
    const emiValue =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);

    const totalInterestPayable = emiValue * tenure - principal; // Total interest to be paid
    setEmi(emiValue);
    setTotalInterest(totalInterestPayable);
  };

  // Update EMI calculation whenever any of the inputs change
  useEffect(() => {
    calculateEMI(loanAmount, months, interestRate);
  }, [loanAmount, months, interestRate]);

  // Doughnut chart data configuration, updated dynamically
  const data = {
    labels: ['Principal', 'Interest'],
    datasets: [
      {
        data: [loanAmount, totalInterest],
        backgroundColor: ['#5056fc', '#FF6F61'], // Blue for principal, pink for interest
        hoverBackgroundColor: ['#1e26fb', '#FF6F61'],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    borderColor: 'white',
  };

  // Function to check if the device is mobile
  const useUserAgent = () => {
    const [userAgent, setUserAgent] = useState('');

    useEffect(() => {
      setUserAgent(navigator.userAgent);
    }, []);

    return userAgent;
  };

  const userAgent = useUserAgent();

  const isMobile = /Mobile|Android/i.test(userAgent);

  // Dynamic styling for range input to fill the background up to the selected value
  const getRangeStyle = (value: number, min: number, max: number, color: string) => {
    return {
      background: `linear-gradient(to right, ${color} 0%, ${color} ${
        ((value - min) / (max - min)) * 100
      }%, #fff ${((value - min) / (max - min)) * 100}%, #fff 100%)`,
    };
  };

  return (
    <>
      <section className="w-full flex flex-col items-center mx-auto lg:flex-row-reverse py-20 sm:pt-16 md:pt-16 lg:pt-28 xl:pt-36 lg:pb-28 xl:pb-36 px-4 sm:px-8 md:px-4 lg:px-4 xl:px-0 lg:mr-4 xl:mr-auto overflow-y-hidden overflow-x-hidden bg-light">
        <div className="flex flex-col w-full lg:w-3/5 xl:w-1/2 items-start text-left">
          <div className=" text-dark font-extrabold text-left leading-none text-3xl sm:text-4xl md:text-5xl lg:text-title">
            Flexible EMI Options for Your Convenience
          </div>
          <div
            className="mb-8 mt-8 leading-relaxed text-gray-700 text-lg sm:text-pera"
            style={{ lineHeight: '2.5rem' }}
          >
            Explore our EMI calculator to understand your repayment options. Adjust the loan amount,
            tenure, and interest rate to find a plan that fits your needs.
          </div>
        </div>

        <div className="max-w-4xl mx-auto py-6 md:px-6">
      
          {/* Container for responsiveness */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left side: Sliders and EMI details */}
            <div className="w-full lg:w-1/2 space-y-6">
              {/* Loan Amount Slider */}
              <div>
                <label
                  htmlFor="loanAmount"
                  className="w-full flex justify-between text-sm font-medium text-gray-700 mb-2"
                >
                  <span>Amount:</span>₹{loanAmount}
                </label>
                <input
                  type="range"
                  id="loanAmount"
                  min="1000"
                  max="200000"
                  step="1000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full appearance-none rounded-lg h-2 cursor-pointer"
                  style={getRangeStyle(loanAmount, 1000, 200000, '#8286fd')}
                />
              </div>

              {/* Loan Term Slider */}
              <div>
                <label
                  htmlFor="months"
                  className="flex w-full justify-between text-sm font-medium text-gray-700 mb-2"
                >
                  <span>Length: </span> {months} months
                </label>
                <input
                  type="range"
                  id="months"
                  min="1"
                  max="12"
                  step="1"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full appearance-none rounded-lg h-2 cursor-pointer"
                  style={getRangeStyle(months, 1, 12, '#8286fd')
                
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="interestRate"
                  className="w-full flex justify-between text-sm font-medium text-gray-700 mb-2"
                >
                  <span>Interest Rate per annum: </span> {interestRate}%
                </label>
                <input
                  type="range"
                  id="interestRate"
                  min="0.5"
                  max="15"
                  step="0.5"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full appearance-none rounded-lg h-2 cursor-pointer"
                  style={getRangeStyle(interestRate, 0.5, 15, '#8286fd')}
                />
              </div>

              {/* EMI Result Display */}
              <div className="mt-4 p-4 bg-[#8286fd] rounded-lg min-w-[340px]">
                <p className="text-lg font-medium text-white">
                  Monthly Payable: ₹{emi.toFixed(2)}/mo
                </p>
              </div>
            </div>

            {/* Right side: Doughnut Chart */}
            <div className="hidden w-full lg:w-1/2 md:flex justify-center items-center lg:-mt-8">
              <div className="w-64 h-64 md:w-72 md:h-72">
                <h2 className="text-center text-xl font-semibold mb-2 text-gray-700">Payment Breakup</h2>
                <Doughnut data={data} options={options} />
              </div>
            </div>
          </div>

          {/* Bottom row for Principal, Interest, and Total Payable amounts */}
          <div className="flex flex-row lg:flex-row justify-between items-center mt-6 md:mt-6 p-4 py-2 bg-white rounded-lg order-first lg:order-none gap-4 min-w-[340px]">
            <div className="text-center lg:text-left mb-2 lg:mb-0">
              <p className="text-gray-700 font-medium">Principal</p>
              <p className="text-purple-700">₹{loanAmount}</p>
            </div>
            <div className="text-center lg:text-left mb-2 lg:mb-0">
              <p className="text-gray-700 font-medium">Interest</p>
              <p className="text-purple-700">₹{totalInterest.toFixed(2)}</p>
            </div>
            <div className="text-center lg:text-left mb-2 lg:mb-0">
              <p className="text-gray-700 font-medium">Total Payable</p>
              <p className="text-purple-700">₹{(loanAmount + totalInterest).toFixed(2)}</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 md:hidden flex justify-center items-center order-last lg:order-none mt-4">
            <div className="w-64 h-64 md:w-72 md:h-72">
              <h2 className="text-center text-xl font-semibold mb-2 text-gray-700">Payment Breakup</h2>
              <Doughnut data={data} options={options} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmiCalculator;
