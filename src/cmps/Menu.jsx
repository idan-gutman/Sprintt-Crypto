import React, { useEffect, useState } from 'react'
import Logo from "../assets/imgs/logo.png";
import { coinsService } from "../services/coinsService"
import { Route, NavLink, Router, Switch } from 'react-router-dom';
// import { AllCurrencies } from '../pages/AllCurrencies';
// import { TrackedCurrencies } from '../pages/Tracked Currencies';


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

    const marketChange = () => {
        if (!coins) return;
        return parseFloat(coins) > 0;
    }

    const arrowImg = () => {
        if (!coins) return;
        return (marketChange()) ? "./imgs/green_arrow.png" : "./imgs/red_arrow.png";
    }

    return (
        <section className="menu">
            <img className="logo" src={Logo} alt="" />
            <p className="title-menu">Market is <span>{marketChange() ? "up" : "down"}</span></p>
            <div className="percentage-container">
                <img className="arrow-img" src={arrowImg()} alt="" />
                <p className={`percentage ${marketChange() ? "green" : "red"}`}>{coins}</p>
            </div>
            <nav className="navlink-container">
                <NavLink to="/all">All Currencies</NavLink>
                <NavLink to="/tracked">Tracked Currencies</NavLink>
            </nav>
            {/* <Switch>
                <Route component={AllCurrencies} path="/all" />
                <Route component={TrackedCurrencies} path="/tracked" />
            </Switch> */}
        </section>
    )
}