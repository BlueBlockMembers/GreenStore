import {configureStore} from '@reduxjs/toolkit'
import SupermarketPriceReducer from './reducers/supermarketPriceReducer'


export const store = configureStore({
    reducer: {
        supermarketPrice: SupermarketPriceReducer,
    }
})