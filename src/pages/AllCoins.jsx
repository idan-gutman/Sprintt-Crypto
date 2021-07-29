import React, { useEffect, useState } from 'react'
import { CoinsList } from '../cmps/CoinsList'
import { useFetch } from '../services/customHooks';
import loader from '../assets/svg/loader2.svg'


export const AllCoins = () => {
    const url = `https://api.sprintt.co/crypto/currencies/list`;
    const { data } = useFetch(url);
    const [coins, setCoins] = useState(null);
    
    useEffect(() => {
        // setTimeout(() => {
            setCoins(data)
            console.log(data);
        //   }, 1000);
    }, [data])
    
    if (!coins) return <img className="loader" src={loader} alt="loading" />
    return (
        <div className="">
            <CoinsList coins={coins} />
        </div>
    )
}