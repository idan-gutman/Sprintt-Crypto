import {axiosService} from "./axiosService";

export const coinsService= {
    query
}

async function query(){
    const gCoins = await axiosService.axiosCoins();
    return Promise.resolve(gCoins);
}

