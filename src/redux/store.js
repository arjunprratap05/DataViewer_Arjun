import {configureStore} from '@reduxjs/toolkit';
import storeReducer from './storeSlice';
import skuReducer from './skuSlice';

const store = configureStore({
  reducer: {
    store: storeReducer,
    sku: skuReducer,
  },
});

export default store;