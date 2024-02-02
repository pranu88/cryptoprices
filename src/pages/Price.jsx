import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Price() {
const apiKey = "BC5683D1-DD9F-4E82-A343-969D63950B5B"

const params = useParams()
const symbol = params.symbol
const url =`http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

const [coin, setCoin] = useState(null)
 const getCoin = async()=>{
    const response = await fetech(url)
    const data = await response.json()
    setCoin(data)
 }

// ----> get the coin

 useEffect(()=>{
    getCoin()
 },[])
  return (
    <div>
        <h1>Price</h1>
    </div>
  )
}

export default Price