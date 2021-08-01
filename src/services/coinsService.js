import { axiosService } from "./axiosService";

export const coinsService = {
    // query,
    // trackedCoins,
    // loadAllCoins
    // getById
    loadGraphData,
    priceFormat
}

// const gCars = _loadCoins()

// function getById(id) {
//     const coins = gCoins.find(coins => coins._id === id)
//     return Promise.resolve(coins)
// }

// function _loadCoins() {
//     let cars = storageService.loadFromStorage(STORAGE_KEY)
//     if (!cars || !cars.length) cars = gDefaultCars
//     storageService.saveToStorage(STORAGE_KEY, cars)
//     return cars
// }
// async function query(){
//     const gCoins = await axiosService.axiosCoins();
//     return Promise.resolve(gCoins);
// }

// async function trackedCoins(){
//     const gCoinsSummery = await axiosService.trackedCurrencies();
//     return Promise.resolve(gCoinsSummery);
// }

function priceFormat(num){
    if (parseInt(num) >= 1000) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else return num
}

async function loadGraphData(idx, id) {

    const timeFormat = () => {
        switch (idx) {
            case 0:
                return idx = "1D&time_zone=Asia/Jerusalem"
            case 1:
                return idx = "1M"
            case 2:
                return idx = "1Y"
            default:
        }
    }
    const data = await axiosService.getGraphData(timeFormat(), id);
    return Promise.resolve(data);
}

