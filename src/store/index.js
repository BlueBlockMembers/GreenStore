import {configureStore} from '@reduxjs/toolkit'
import SupermarketPriceReducer from './reducers/supermarketPriceReducer'
import productsReducers from './reducers/productsReducers'


export const store = configureStore({
    reducer: {
        supermarketPrice: SupermarketPriceReducer,
        products: productsReducers
    }
})