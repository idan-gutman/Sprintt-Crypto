import axios from "axios";

export const axiosService = {
    axiosCoins,
    coinsSummary
}

async function axiosCoins() {
    const token = '3b9dcd58-ea1e-415d-af30-c29f95f1ec4f';
    const options = {
        headers: { 'user-access-token': token }
    };
    try {
        const res = await axios.get('https://api.sprintt.co/crypto/currencies/market_change?n_coins=100', options)
        return res.data;
    }
    catch (err) {
        console.log(err);
    }
}

async function coinsSummary() {
    const mockData = [{
        "change_24h": "+5.7%",
        "coin_id": 14,
        "image_url": "http://api.sprintt.co/crypto/currencies/icon_images/bitcoin.jpg",
        "name": "Bitcoin",
        "price": 56847.24,
        "symbol": "BTC",
        "volume_24h_mil": 175999.6
    }]
    return Promise.resolve(mockData);
}
