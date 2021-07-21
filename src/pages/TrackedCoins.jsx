import React, { useEffect, useState } from 'react'
import { CoinsList } from '../cmps/CoinsList'
import { useFetch } from '../services/customHooks';

export const TrackedCoins = () => {
    const url = `https://api.sprintt.co/crypto/currencies/list?tracked_only=true`;
    const { data } = useFetch(url);
    const [coins, setCoins] = useState(null);

    useEffect(() => {
        setCoins(data)
    }, [data])

    return (
        <div className="">
           <CoinsList coins={coins} />
        </div>
    )
}