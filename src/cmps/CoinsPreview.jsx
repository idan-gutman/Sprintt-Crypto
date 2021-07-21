import React, { useEffect, useState } from 'react';
import { MarketChange } from './MarketChange';

export const CoinsPreview = ({ coin }) => {
    const { change_24h, coin_id, image_url, name, price, symbol, volume_24h_mil } = coin

    return (
        <section className="coin-card">
            <div className="left-content">
                <img className="img-preview" src={image_url} alt="" />
                <div>
                    <p className="name">{name}</p>
                    <p className="symbol">{symbol}</p>
                </div>
            </div>
            <div className="right-content">
                <p className="price">${price}</p>
                <div className="change-preview">
                    <MarketChange value={change_24h} id={coin_id}/>
                </div>
            </div>
        </section>
    )
}
