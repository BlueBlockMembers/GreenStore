import {configureStore} from '@reduxjs/toolkit'
import SupermarketPriceReducer from './reducers/supermarketPriceReducer'
import productsReducers from './reducers/productsReducers'
import toolsReducer from "./reducers/toolsReducer";
import seedReducer from "./reducers/seedReducer";



export const store = configureStore({
    reducer: {
        supermarketPrice: SupermarketPriceReducer,
        products: productsReducers,
        Tools: toolsReducer,
        Seeds: seedReducer,
    }
})
