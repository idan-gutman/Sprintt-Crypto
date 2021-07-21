import axios from "axios";

export const axiosService = {
    axiosCoins,
    trackedCurrencies,
    allCoins
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

async function trackedCurrencies() {
    const token = '3b9dcd58-ea1e-415d-af30-c29f95f1ec4f';
    const options = {
        headers: { 'user-access-token': token }
    };
    try {
        const res = await axios.get('https://api.sprintt.co/crypto/currencies/list?tracked_only=true',options)
        console.log(res.data);
        return res.data;
    }
    catch (err) {
        console.log(err);
    }
}

async function allCoins() {
    const token = '3b9dcd58-ea1e-415d-af30-c29f95f1ec4f';
    const options = {
        headers: { 'user-access-token': token }
    };
    try {
        const res = await axios.get('https://api.sprintt.co/crypto/currencies/list',options)
        console.log(res.data);
        return res.data;
    }
    catch (err) {
        console.log(err);
    }
    // const mockData = [
    //       {
    //         "change_24h": "-0.03%",
    //         "currency_id": 84,
    //         "image_url": "http://api.sprintt.co/crypto/currencies/icon_images/tether.jpg",
    //         "is_tracked": 0,
    //         "name": "Tether",
    //         "price": 1,
    //         "symbol": "USDT",
    //         "volume_24h_mil": 59477.32
    //       },
    //       {
    //         "change_24h": "-4.02%",
    //         "currency_id": 14,
    //         "image_url": "http://api.sprintt.co/crypto/currencies/icon_images/bitcoin.jpg",
    //         "is_tracked": 1,
    //         "name": "Bitcoin",
    //         "price": 33653,
    //         "symbol": "BTC",
    //         "volume_24h_mil": 29085.27
    //       },
    //       {
    //         "change_24h": "-6.71%",
    //         "currency_id": 40,
    //         "image_url": "http://api.sprintt.co/crypto/currencies/icon_images/ethereum.jpg",
    //         "is_tracked": 0,
    //         "name": "Ethereum",
    //         "price": 2120.9,
    //         "symbol": "ETH",
    //         "volume_24h_mil": 25826.44
    //       },
    //       {
    //         "change_24h": "-7.59%",
    //         "currency_id": 39,
    //         "image_url": "http://api.sprintt.co/crypto/currencies/icon_images/ethereum-classic.jpg",
    //         "is_tracked": 0,
    //         "name": "Ethereum Classic",
    //         "price": 53.45,
    //         "symbol": "ETC",
    //         "volume_24h_mil": 4834.06
    //       },
    //       {
    //         "change_24h": "-5.03%",
    //         "currency_id": 10,
    //         "image_url": "http://api.sprintt.co/crypto/currencies/icon_images/bitcoin-cash.jpg",
    //         "is_tracked": 0,
    //         "name": "Bitcoin Cash",
    //         "price": 500.12,
    //         "symbol": "BCH",
    //         "volume_24h_mil": 3898.19
    //       },
    //       {
    //         "change_24h": "+0.32%",
    //         "currency_id": 18,
    //         "image_url": "http://api.sprintt.co/crypto/currencies/icon_images/binance-usd.jpg",
    //         "is_tracked": 0,
    //         "name": "Binance USD",
    //         "price": 1.01,
    //         "symbol": "BUSD",
    //         "volume_24h_mil": 3736.54
    //       },
    //       {
    //         "change_24h": "-3.29%",
    //         "currency_id": 34,
    //         "image_url": "http://api.sprintt.co/crypto/currencies/icon_images/dogecoin.jpg",
    //         "is_tracked": 0,
    //         "name": "Dogecoin",
    //         "price": 0.2457,
    //         "symbol": "DOGE",
    //         "volume_24h_mil": 3266.93
    //       },
    //       {
    //         "change_24h": "-3.10%",
    //         "currency_id": 2,
    //         "image_url": "http://api.sprintt.co/crypto/currencies/icon_images/cardano.jpg",
    //         "is_tracked": 0,
    //         "name": "Cardano",
    //         "price": 1.34,
    //         "symbol": "ADA",
    //         "volume_24h_mil": 3079.58
    //       },
    //       {
    //         "change_24h": "-5.70%",
    //         "currency_id": 93,
    //         "image_url": "http://api.sprintt.co/crypto/currencies/icon_images/xrp.jpg",
    //         "is_tracked": 0,
    //         "name": "XRP",
    //         "price": 0.6636,
    //         "symbol": "XRP",
    //         "volume_24h_mil": 2682.95
    //       },
    //       {
    //         "change_24h": "-4.58%",
    //         "currency_id": 56,
    //         "image_url": "http://api.sprintt.co/crypto/currencies/icon_images/litecoin.jpg",
    //         "is_tracked": 0,
    //         "name": "Litecoin",
    //         "price": 138.11,
    //         "symbol": "LTC",
    //         "volume_24h_mil": 2324
    //       },
    //       {
    //         "change_24h": "+0.20%",
    //         "currency_id": 83,
    //         "image_url": "http://api.sprintt.co/crypto/currencies/icon_images/usd-coin.jpg",
    //         "is_tracked": 0,
    //         "name": "USD Coin",
    //         "price": 1,
    //         "symbol": "USDC",
    //         "volume_24h_mil": 2073.5
    //       },
    //       {
    //         "change_24h": "-4.16%",
    //         "currency_id": 38,
    //         "image_url": "http://api.sprintt.co/crypto/currencies/icon_images/eos.jpg",
    //         "is_tracked": 0,
    //         "name": "EOS",
    //         "price": 3.96,
    //         "symbol": "EOS",
    //         "volume_24h_mil": 1412.27
    //       },
    //       {
    //         "change_24h": "-4.59%",
    //         "currency_id": 80,
    //         "image_url": "http://api.sprintt.co/crypto/currencies/icon_images/tron.jpg",
    //         "is_tracked": 0,
    //         "name": "TRON",
    //         "price": 0.065,
    //         "symbol": "TRX",
    //         "volume_24h_mil": 1337.44
    //       },
    //       {
    //         "change_24h": "-4.62%",
    //         "currency_id": 11,
    //         "image_url": "http://api.sprintt.co/crypto/currencies/icon_images/binance-coin.jpg",
    //         "is_tracked": 0,
    //         "name": "Binance Coin",
    //         "price": 289.06,
    //         "symbol": "BNB",
    //         "volume_24h_mil": 1326.75
    //       },
    //       {
    //         "change_24h": "-2.63%",
    //         "currency_id": 48,
    //         "image_url": "http://api.sprintt.co/crypto/currencies/icon_images/huobi-token.jpg",
    //         "is_tracked": 0,
    //         "name": "Huobi Token",
    //         "price": 10.5,
    //         "symbol": "HT",
    //         "volume_24h_mil": 997.3
    //       },
    //       {
    //         "change_24h": "-6.66%",
    //         "currency_id": 97,
    //         "image_url": "http://api.sprintt.co/crypto/currencies/icon_images/zcash.jpg",
    //         "is_tracked": 0,
    //         "name": "Zcash",
    //         "price": 121.75,
    //         "symbol": "ZEC",
    //         "volume_24h_mil": 867.88
    //       },
    //       {
    //         "change_24h": "-5.89%",
    //         "currency_id": 54,
    //         "image_url": "http://api.sprintt.co/crypto/currencies/icon_images/chainlink.jpg",
    //         "is_tracked": 0,
    //         "name": "Chainlink",
    //         "price": 18.32,
    //         "symbol": "LINK",
    //         "volume_24h_mil": 839.15
    //       },
    //       {
    //         "change_24h": "-6.20%",
    //         "currency_id": 85,
    //         "image_url": "http://api.sprintt.co/crypto/currencies/icon_images/vechain-thor.jpg",
    //         "is_tracked": 0,
    //         "name": "VeChain Thor",
    //         "price": 0.0851,
    //         "symbol": "VET",
    //         "volume_24h_mil": 745.28
    //       },
    //       {
    //         "change_24h": "-0.46%",
    //         "currency_id": 13,
    //         "image_url": "http://api.sprintt.co/crypto/currencies/icon_images/bitcoin-sv.jpg",
    //         "is_tracked": 0,
    //         "name": "Bitcoin SV",
    //         "price": 146.14,
    //         "symbol": "BSV",
    //         "volume_24h_mil": 675.06
    //       },
    //       {
    //         "change_24h": "-5.93%",
    //         "currency_id": 76,
    //         "image_url": "http://api.sprintt.co/crypto/currencies/icon_images/solana.jpg",
    //         "is_tracked": 0,
    //         "name": "Solana",
    //         "price": 33.48,
    //         "symbol": "SOL",
    //         "volume_24h_mil": 660.48
    //       }
    //     ]
      
    // return Promise.resolve(mockData);
}
