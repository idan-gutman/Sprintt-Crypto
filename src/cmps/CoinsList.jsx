import React from 'react'
import { CoinsPreview } from './CoinsPreview'
export const CoinsList=({coins})=>{
    return(
        <div className='coins-list'>
        {coins.map(coin =>
            <CoinsPreview key={coin.coin_id} coin={coin}/>
        )}
    </div>
    )
}