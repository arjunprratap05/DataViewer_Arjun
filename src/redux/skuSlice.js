import  {createSlice} from '@reduxjs/toolkit';

const initialState = {
    sku: [],
};

const skuSlice = createSlice({
    name: 'sku',
    initialState,
    reducers: {
        setSku: (state, action) => {
            state.sku = action.payload;
        },
        removeSKU : (state, action) => {
            state.sku = state.sku.filter((sku) => sku.id !== action.payload);
        },
        updateSKU: (state, action) => {
            const { id, name, price } = action.payload;
           const index = state.sku.findIndex((sku) => sku.id === action.payload.id);
           if (index !== -1) {
               state.sku[index] = action.payload;
            }
        },
    },
});

export const { setSku, removeSKU, updateSKU } = skuSlice.actions;
export default skuSlice.reducer;