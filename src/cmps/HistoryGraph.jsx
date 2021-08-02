import React, { useEffect, useState } from "react"
import { coinsService } from "../services/coinsService";
import { LineGraph } from "./LineGraph";
import loader from '../assets/svg/loader2.svg'


export const HistoryGraph = ({ id }) => {

    const [data, setData] = useState({ price: null, date: null });
    const [active, setActive] = useState({
        activeBtn: null,
        btns: [{ id: '1 Day' }, { id: '1 Month' }, { id: '1 Year' }]
    });
    
    useEffect(() => {
        const getDayData = async () => {
            const _day = await coinsService.loadGraphData(0, id);
            let _date = _day.quotes_data.map(res => res.date_time)
            let _price = _day.quotes_data.map(res => res.price)
            setActive({ ...active, activeBtn: active.btns[0] });
            setData({ price: _price, date: _date })
        }
        getDayData()
        // eslint-disable-next-line
    }, []);

    const getTime = async (idx) => {
        const _dataTime = await coinsService.loadGraphData(idx, id);
        let _date = _dataTime.quotes_data.map(res => res.date_time)
        let _price = _dataTime.quotes_data.map(res => res.price)
        setActive({ ...active, activeBtn: active.btns[idx] });
        setData({ price: _price, date: _date })
    }

    const toggleClassActive = (idx) => {
        return (active.btns[idx] === active.activeBtn) ? 'active' : '';
    }

    const {date,price} = data;
    if(!date&&!price) return <img className="loader" src={loader} alt="loading" />
    return (
        <section>
            <div className="btns-graph">
                {active.btns.map((btn, idx) => (
                    <button key={idx} className={toggleClassActive(idx)} onClick={() => { getTime(idx)}}>{btn.id}</button>
                ))}
            </div>
           <LineGraph price={price} date={date} />
        </section>
    )
}