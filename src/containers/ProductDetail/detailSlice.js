import { createSlice } from '@reduxjs/toolkit';

export const detailSlice = createSlice({
    name: 'details',
    initialState: {
      
    },
    reducers: {
      dataProduct: (state, action) => {
        console.log("Holaaa",action);
        return {
          ...state,
          ...action.payload
        }
      }
    },
});

export const keepProduct = (producto) => async (dispatch) => {
    console.log(producto);
    dispatch(dataProduct(producto));
};


//Exporto las funciones que en si realizan la accion
export const { dataProduct } = detailSlice.actions;


export const takeData = (state) => state.dataProduct;

export default detailSlice.reducer;