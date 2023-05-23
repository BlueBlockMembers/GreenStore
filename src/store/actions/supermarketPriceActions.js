import axios from "axios";

export const add = async (state, action) => {
    await axios.post('http://localhost:8000/api/marketPlace', action.payload).then((response) => {
        state.supermarketPrices = response.data.data;
    });
}

export const update = async (state, action) => {
    await axios.put('http://localhost:8000/api/marketPlace/' + action.payload.id, action.payload).then((response) => {
        state.supermarketPrices = response.data.data;
    });
}

export const deleteDetails = async (state, action) => {
    await axios.delete('http://localhost:8000/api/marketPlace/' + action.payload).then((response) => {
        state.supermarketPrices = response.data.data;
    });
}

export const search = async (state, action) => {
    await axios.get('http://localhost:8000/api/marketPlace/' + action.payload).then((response) => {
        state.supermarketPrices = response.data.data;
    });
}
