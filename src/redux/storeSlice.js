import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    store: [],
    };

const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        addStore: (state, action) => {
            state.store = action.payload;
        },
        removeStore: (state,action) => {
            state.store = state.store.filter((store) => store.id !== action.payload);
        },
        updateStore: (state, action) => {
            state.store = state.store.map((store) => {
                if (store.id === action.payload.id) {
                    return {
                        ...store,
                        ...action.payload,
                    };
                }
                return store;
            });
        },
    },
});

export const {addStore, removeStore, updateStore} = storeSlice.actions;
export default storeSlice.reducer;