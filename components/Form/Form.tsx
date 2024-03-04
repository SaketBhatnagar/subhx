"use client"
import React, { useState } from 'react'
import BuyBtc from './BuyBtc'

const Form = () => {
    const [showbuy,setShowBuy]=useState("BUY BTC")

    return (
    <section className='flex flex-col gap-5 py-11 '>

        <article className='flex justify-center items-center'>
          <div className='flex '>            
            <button className={`bg-slate-700 py-1 px-3 ${showbuy.includes("BUY")?"bg-slate-900":"bg-slate-700"}`} onClick={()=> setShowBuy("BUY BTC")}>BUY BTC</button>
            <button onClick={()=> setShowBuy("SELL BTC")} className={`bg-slate-700 py-1 px-3 ${showbuy.includes("SELL")?"bg-slate-900":"bg-slate-700"}`} >SELL BTC</button>
            </div>
        </article>
        <article className=''>
        <BuyBtc todo={showbuy} />
        </article>
    </section>
  )
}

export default Form
