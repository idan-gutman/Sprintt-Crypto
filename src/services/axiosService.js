import axios from "axios";

export const axiosService = {
    // axiosCoins,
    // trackedCurrencies,
    axiosIsTracked,
    getGraphData
}


async function axiosIsTracked(isTracked, id) {
    const token = '3b9dcd58-ea1e-415d-af30-c29f95f1ec4f';
    const options = {
        headers: { 'user-access-token': token }
    };
    try {
        const res = await axios.post(`https://api.sprintt.co/crypto/currencies/tracked_currencies/${id}?status=${isTracked}`, {}, options)
        return res.data;
    }
    catch (err) {
        console.log(err);
    }
}

async function getGraphData(time,id) {
    // console.log(time);
    const token = '3b9dcd58-ea1e-415d-af30-c29f95f1ec4f';
    const options = {
        headers: { 'user-access-token': token }
    };
    try {
        const res = await axios.get(`https://api.sprintt.co/crypto/currencies/history/${id}?time_scope=${time}`, options)
        return res.data;
    }
    catch (err) {
        console.log(err);
    }
}

