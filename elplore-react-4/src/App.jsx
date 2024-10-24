
import { useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch';


function App() {
  const watches = [
    {
      id: 1,
      brand: "ChronoMaster",
      model: "CMX-1000",
      price: 450,
      features: ["Water-resistant", "Sapphire crystal", "Stainless steel band", "40mm case"],
      color: "Silver"
    },
    {
      id: 2,
      brand: "ZenithPro",
      model: "ZP-300 Chronograph",
      price: 620,
      features: ["Chronograph", "Automatic movement", "Leather strap", "42mm case"],
      color: "Black"
    },
    {
      id: 3,
      brand: "EclipseTime",
      model: "ET-55 Solar",
      price: 280,
      features: ["Solar-powered", "Digital display", "Rubber strap", "38mm case"],
      color: "Blue"
    },
    {
      id: 4,
      brand: "LuxeVision",
      model: "LV-Quartz 200",
      price: 1150,
      features: ["Swiss quartz movement", "Gold-plated case", "Sapphire crystal", "36mm case"],
      color: "Gold"
    },
    {
      id: 5,
      brand: "AstroTek",
      model: "AT-Sport 500",
      price: 320,
      features: ["GPS", "Heart rate monitor", "Nylon strap", "44mm case"],
      color: "Red"
    }
  ];

  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch> )
      }
    </>
  )
}

export default App
