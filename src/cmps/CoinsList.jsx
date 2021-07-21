import React from 'react'
import { CoinsPreview } from './CoinsPreview'
export const CoinsList=({coins})=>{
    return(
        <div className='coins-list'>
        {coins?.currencies_list?.map(coin =>
            <CoinsPreview key={coin.currency_id} coin={coin}/>
        )}
    </div>
    )
}