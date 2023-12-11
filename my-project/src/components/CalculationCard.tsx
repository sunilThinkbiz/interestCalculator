import React, { useState } from "react";
import  {calculatorConstant}  from "../appConstant";
import { IState } from "../Type";
const CalculatorCard: React.FC = () => {
  const {
    HEADER_TITLE,
    PRINCIPLE_AMOUNT,
    RATE_OF_INTEREST,
    TIME_PERIOD,
    TOTAL_AMOUNT,
    BUTTON,
    CLEAR,
  } = calculatorConstant;
 
  const initialSate={
    principleAmount: 0,
    RateOfInterest: 0,
    TimePeriod: 0,
  }
  const [interest, setInterest] = useState<IState>(initialSate);
 
  const [totalAmount, setTotalAmount] = useState<number | null>(null);
 
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const numericValue = parseFloat(value);
 
    setInterest((prevInterest) => ({
      ...prevInterest,
      [name]: numericValue,
    }));
  };
 
  const handleCalculate = () => {
    const { principleAmount, RateOfInterest, TimePeriod } = interest;
 
    const calculatedInterest = (principleAmount * RateOfInterest * TimePeriod) / 100;
 
    const TotalAmount = principleAmount + calculatedInterest;
 
    setTotalAmount(TotalAmount);
  };
 
  const handleClear=()=>{
   setInterest(initialSate)
   setTotalAmount(null)
  }
  return (
    <div className=" py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <div className="text-center space-y-2 sm:text-left">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900 border-b">
            {HEADER_TITLE}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="number"
                className=" block text-sm font-medium leading-6 text-gray-900"
              >
                {PRINCIPLE_AMOUNT}
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="principleAmount"
                  value={interest.principleAmount}
                  onChange={handleInput}
                  placeholder="Principle Amount"
                  className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="Rate of Interest"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {RATE_OF_INTEREST}
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="RateOfInterest"
                  value={interest.RateOfInterest}
                  onChange={handleInput}
                  placeholder="RateOfInterest"
                  className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="time period"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {TIME_PERIOD}
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="TimePeriod"
                  value={interest.TimePeriod}
                  onChange={handleInput}
                  placeholder="Add month"
                  className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-1 text-sm leading-6 text-gray-600">
            <p>
              {PRINCIPLE_AMOUNT}: {interest.principleAmount}
            </p>
            <p>
              {RATE_OF_INTEREST}: {interest.RateOfInterest}
            </p>
            <p>
              {TIME_PERIOD}: {interest.TimePeriod}
            </p>
            <p>
              {TOTAL_AMOUNT}:
              {totalAmount !== null ? totalAmount : "N/A"}
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-x-20">
        <button
          onClick={handleCalculate}
          className="flex justify-center items-center gap-5 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#c055c7] via-[#ae3c9d] to-[#780470] hover:shadow-xl hover:shadow-green-500 hover:scale-105 duration-300 hover:from-[#78045b] hover:to-[#b81495]"
        >
          {BUTTON}
        </button>
        <button onClick={handleClear}className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#c055c7] via-[#ae3c9d] to-[#780470] hover:shadow-xl hover:shadow-green-500 hover:scale-105 duration-300 hover:from-[#78045b] hover:to-[#b81495]"
        >{CLEAR}</button>
        </div>
       
      </div>
    </div>
  );
};
 
export default CalculatorCard;