import React, { useEffect, useState } from 'react';
import { MarketChange } from './MarketChange';
import { Link } from 'react-router-dom'


export const CoinsPreview = ({ coin }) => {
    const { change_24h, currency_id, image_url, name, price, symbol, volume_24h_mil } = coin;
    
    return (
            <Link to={{ pathname: `/details/${currency_id}`, state: coin }}>
                <section className="coin-card">
                    <div className="left-content">
                        <img className="img-preview" src={image_url} alt="" />
                        <div className="name-symbol">
                            <p className="name">{name}</p>
                            <p className="symbol">{symbol}</p>
                        </div>
                    </div>
                    <div className="right-content">
                        <p className="price">${price}</p>
                        <div className="change-preview">
                            <MarketChange value={change_24h} id={currency_id} />
                        </div>
                    </div>
                </section>
            </Link>
    )
}
