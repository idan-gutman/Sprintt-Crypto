import React, { useEffect, useState } from "react"
import { coinsService } from "../services/coinsService";
import { LineGraph } from "./LineGraph";

export const HistoryGraph = ({ id }) => {


    const [data, setData] = useState({price:[],date:[]});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getDayData = async () => {
            console.log(1);
            const _day = await coinsService.loadGraphData(0, id);
            let _date = _day.quotes_data.map(res => res.date_time)
            let _price = _day.quotes_data.map(res => res.price)
            setData({price:_price,date:_date})
            setIsLoading(true)
            setActive({ ...active, activeBtn: active.btns[0] });
        }
        getDayData()
    }, []);

    const getTime = async (clickedTime) => {
        const _dataTime = await coinsService.loadGraphData(clickedTime, id);
        let _date = _dataTime.quotes_data.map(res => res.date_time)
        let _price = _dataTime.quotes_data.map(res => res.price)
        setData({price:_price,date:_date})
        setIsLoading(true)
    }

    const [active, setActive] = useState({
        activeBtn: null,
        btns: [{ id: '1 Day' }, { id: '1 Month' }, { id: '1 Year' }]
    });

    const toggleActive = (idx) => {
        setIsLoading(false)
        setActive({ ...active, activeBtn: active.btns[idx] });
        getTime(idx)
    }
    const toggleClassActive = (idx) => {
        return (active.btns[idx] === active.activeBtn) ? 'active' : '';
    }
    // if (date.length === 0 && price.length === 0) return
    return (
        <section>
            {console.log("render")}
            <div className="btns-graph">
                {active.btns.map((btn, idx) => (
                    <button key={idx} className={toggleClassActive(idx)} onClick={() => { toggleActive(idx) }}>{btn.id}</button>
                ))}
            </div>
            {isLoading &&<LineGraph price={data.price} date={data.date} />}
        </section>
    )
}