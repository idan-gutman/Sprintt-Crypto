import {axiosService} from "./axiosService";

export const coinsService= {
    query,
    trackedCoins,
    loadAllCoins
}

async function query(){
    const gCoins = await axiosService.axiosCoins();
    return Promise.resolve(gCoins);
}

async function trackedCoins(){
    const gCoinsSummery = await axiosService.trackedCurrencies();
    return Promise.resolve(gCoinsSummery);
}

async function loadAllCoins(){
    const gCoinsSummery = await axiosService.allCoins();
    return Promise.resolve(gCoinsSummery);
}

