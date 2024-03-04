"use client";
import React, { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

type BuyorSell = {
    todo : string
}

const BuyBtc = (props:BuyorSell) => {
  const [amount, setAmount] = useState("0");
  const [price, setPrice] = useState("0");
  const [total, setTotal] = useState("0");
  const [instanttrade, setInstantTrade] = useState(true);

  return (
    <div className="flex  justify-center flex-col gap-5 items-center">
        <div className="flex justify-center text-xs items-center gap-1 bg-sky-700">
      <div className="bg-sky-700 rounded-sm p-1 px-2 border-slate-400 border-2">INSTANT TRADE</div>
      <div className="bg-sky-700 rounded-sm p-1 px-2 border-sky-700 border-2">LIMIT TRADE</div>
      </div>
      <form className="flex gap-5 flex-col">
        {/* amount */}
        <div className="flex gap-5 items-center">
          <label htmlFor="" className="">
            <span>AMOUNT</span>
            <div className="flex gap-2 items-center p-1 rounded-sm px-2 bg-white">
              <input
                type="text"
                className="text-black font-semibold"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <div className="text-slate-400 text-xs">BTC</div>
            </div>
          </label>
          <div className="flex gap-5 self-end">
            <div className="bg-white p-2 rounded-md" onClick={(e)=> setAmount(`${+amount-1}`)}>
              <FaMinus className="text-green-900" />
            </div>
            <div className="bg-white p-2 rounded-md" onClick={(e)=> setAmount(`${+amount+1}`)}>
              <FaPlus className="text-green-900" />
            </div>
          </div>
        </div>
        {/*  price*/}
        <div className="flex gap-5 items-center">
          <label htmlFor="" className="">
            <span>PRICE</span>
            <div className="flex gap-2 items-center p-1 rounded-sm px-2 bg-white">
              <input
                type="text"
                className="text-black font-semibold"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <div className="text-slate-400 text-xs">BTC</div>
            </div>
          </label>
          <div className="flex gap-5 self-end">
            <div className="bg-white p-2 rounded-md" onClick={(e)=> setPrice(`${+price-1}`)}>
              <FaMinus className="text-black" />
            </div>
            <div className="bg-white p-2 rounded-md" onClick={(e)=> setPrice(`${+price-1}`)}>
              <FaPlus className="text-black" />
            </div>
          </div>
        </div>
        {/* Total */}

        <div className="">
          <span>TOTAL</span>
        <div className="bg-white rounded-sm py-1 text-black  px-2 flex justify-between"> <span className="font-semibold">{+amount - +price}</span><span className="text-slate-400">INR</span></div>
        </div>
        <div className="w-full relative">

        <button className={`${props.todo.includes("BUY")?"bg-emerald-600":"bg-red-500"} p-2 rounded-md w-full`}>{props.todo}</button>
       
        <div className={`bg-black h-14 w-14 absolute top-[-1.8rem] right-[-3rem] rotate-[-130deg]`}></div>
        </div>
      </form>
    </div>
  );
};

export default BuyBtc;
