import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],  //value is key
   
}

  export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
     
      addtocart: (state,action) => {
       console.log("addto cart called");
       console.log(action);
       var record=[...state.value,action.payload];
       state.value = record
        
      },
      removefromcart: (state) => {
       console.log("removefrom cart called");
      },
      
    },
  })

  export const { addtocart, removefromcart } = cartSlice.actions

export default cartSlice.reducer //.reducers bez file name is not in camel cas