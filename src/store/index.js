import { configureStore } from "@reduxjs/toolkit";
import SupermarketPriceReducer from "./reducers/supermarketPriceReducer";
import toolsReducer from "./reducers/toolsReducer";
import seedReducer from "./reducers/seedReducer";

export const store = configureStore({
  reducer: {
    supermarketPrice: SupermarketPriceReducer,
    Tools: toolsReducer,
    Seeds: seedReducer,
  },
});
