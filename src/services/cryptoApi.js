import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '2692af34a7msha6ab3b9b3dfcd98p126144jsn46bfa2c31e6b'
}

//move key to env

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
          query: (count) => createRequest(`/coins?limit=${count}`),
        }),
    
        getCryptoDetails: builder.query({
          query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
    
        // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
        getCryptoHistory: builder.query({
          query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
        }),
    
       
      }),
    });
    
    export const {
      useGetCryptosQuery,
      useGetCryptoDetailsQuery,
      useGetCryptoHistoryQuery,
    } = cryptoApi;