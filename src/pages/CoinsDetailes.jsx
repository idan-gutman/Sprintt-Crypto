import React, { useEffect, useState } from 'react'
import Logo from "../assets/imgs/logo.png";
import { ReactComponent as ArrowBack2 } from "../assets/svg/arrowBack2.svg";
import { MarketChange } from '../cmps/MarketChange';
import loader from '../assets/svg/loader2.svg'
import { axiosService } from '../services/axiosService';
import { HistoryGraph } from '../cmps/HistoryGraph';
import { coinsService } from '../services/coinsService';


export const CoinsDetails = ({ location, history }) => {
    
    const [coin, setCoin] = useState(null);
    const [localIsTracked, setLocalIsTracked] = useState(null);
    
    useEffect(() => {
        const { state } = location
        setCoin(state)
        const _isTracked = state?.is_tracked ? true : false;
        setLocalIsTracked(_isTracked)
        // eslint-disable-next-line
    }, []);
    
    const setIsTracked = async () => {
        setLocalIsTracked(!localIsTracked)
        const trackedCoins = await axiosService.axiosIsTracked(!localIsTracked, currency_id);
        console.log(trackedCoins);
    }
    
    const isTracked = () => {
        return localIsTracked ? "Remove from tracked currencies list" : "Add to tracked currencies list";
    }
    
    if (!coin) return <img className="loader" src={loader} alt="loading" />
    
    const { name, symbol, price, change_24h, is_tracked, currency_id } = coin;
    

    return (
        <section className="coins-details">
            <ArrowBack2 onClick={() => history.push("/")} className="arrow-back" />
            <div className="details-header">
                <img className="logo" src={Logo} alt="" />
                <div className="name-details-content">
                    <p className="name-details">{name}</p>
                    <p className="symbol-details">{symbol}</p>
                </div>
                <div className="price-details-content">
                    <p className="price-details">${coinsService.priceFormat(price)}</p>
                    <MarketChange value={change_24h} />
                </div>
            </div>
            <HistoryGraph id={currency_id} />

            <button onClick={setIsTracked} className={`btn-details ${localIsTracked ? "btn-is-tracked" : ''}`}>{isTracked()}</button>
        </section>
    )
}