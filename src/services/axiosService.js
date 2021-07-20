import axios from "axios";

export const axiosService = {
    axiosCoins
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
