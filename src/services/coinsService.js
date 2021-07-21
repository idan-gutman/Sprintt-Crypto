import {axiosService} from "./axiosService";

export const coinsService= {
    query,
    loadCoinsSummery
}

async function query(){
    const gCoins = await axiosService.axiosCoins();
    return Promise.resolve(gCoins);
}

async function loadCoinsSummery(){
    const gCoinsSummery = await axiosService.coinsSummary();
    return Promise.resolve(gCoinsSummery);
}

