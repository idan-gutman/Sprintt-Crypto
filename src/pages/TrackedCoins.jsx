import React, { useEffect, useState } from 'react'
import { CoinsList } from '../cmps/CoinsList'
import { coinsService } from '../services/coinsService';
export const TrackedCoins = () => {
    const [coins, setCoins] = useState(null);
    useEffect(() => {
        const getCoins = async () => {
            await coinsService.loadCoinsSummery()
                .then(coins => {
                    console.log(coins)
                    setCoins(coins)
                })
        }
        getCoins()
    }, [])

    return (
        <div className="">
           {coins && <CoinsList coins={coins} />}
        </div>
    )
}