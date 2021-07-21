import React from 'react'

export const MarketChange = ({value,id}) => {
    const marketChange = () => {
        if (!value) return;
        return parseFloat(value) > 0;
    }

    const arrowImg = () => {
        if (!value) return;
        return (marketChange()) ? "./imgs/green_arrow.png" : "./imgs/red_arrow.png";
    }
    return (
        <div className={`percentage-container`}>
            <img className={id ? "arrow-img-small" : 'arrow-img-big'} src={arrowImg()} alt="" />
            <p className={`percentage ${marketChange() ? "green" : "red"} ${id ? " percentage-small" : ''}`}>{value}</p>
        </div>
    )
}