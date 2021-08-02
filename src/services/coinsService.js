import { axiosService } from "./axiosService";

export const coinsService = {
    loadGraphData,
    priceFormat
}


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

