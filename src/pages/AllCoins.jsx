import React, { useEffect, useState } from 'react'
import { CoinsList } from '../cmps/CoinsList'
import { useFetch } from '../services/customHooks';

export const AllCoins = () => {
    const url = `https://api.sprintt.co/crypto/currencies/list`;
    const { data } = useFetch(url);
    const [coins, setCoins] = useState(null);
    
    useEffect(() => {
        setCoins(data)
    }, [data])
    
    if(!coins) return <h1>loading...</h1>
    return (
        <div className="">
            <CoinsList coins={coins} />
        </div>
    )
}