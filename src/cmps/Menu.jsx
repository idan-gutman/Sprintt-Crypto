import React, { useEffect, useState } from 'react'
import Logo from "../assets/imgs/logo.png";
import { coinsService } from "../services/coinsService"
import { NavLink } from 'react-router-dom';
import { MarketChange } from './MarketChange';



export const Menu = () => {

    const [coins, setCoins] = useState(null);
    useEffect(() => {
        const getCoins = async () => {
            await coinsService.query()
                .then(coins => {
                    console.log(coins)
                    setCoins(coins.market_change_24hr)
                })
        }
        getCoins()
    }, [])


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