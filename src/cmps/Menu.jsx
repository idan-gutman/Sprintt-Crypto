import React, { useEffect, useState } from 'react'
import Logo from "../assets/imgs/logo.png";
import { coinsService } from "../services/coinsService"
import { NavLink } from 'react-router-dom';
import { MarketChange } from './MarketChange';
import { useFetch } from '../services/customHooks';



export const Menu = () => {

    const url = `https://api.sprintt.co/crypto/currencies/market_change?n_coins=100`;
    const {data } = useFetch(url);
    const [coins, setCoins] = useState(null);
    
    useEffect(() => {
        setCoins(data.market_change_24hr)
    }, [data])


    return (
        <section className="menu">
            <img className="logo" src={Logo} alt="" />
            <p className="title-menu">Market is <span>{(coins > 0) ? "up" : "down"}</span></p>

            <MarketChange value={coins} />

            <nav className="navlink-container">
                <NavLink to="/all">All Currencies</NavLink>
                <NavLink to="/tracked">Tracked Currencies</NavLink>
            </nav>
        </section>
    )
}