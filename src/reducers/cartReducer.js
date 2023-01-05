import {createSlice} from "@reduxjs/toolkit";

//1. Initial data.
// Initially there are no items in the cart.
const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
}

//2. Create the reducer.
// Use createSlice fucntion.

const cartSlice = createSlice({
    name: "cartItems",
    initialState,
    reducers: {
        //Define all the actions
        add: (state, action)=>{
            //To avoid duplicate entry
            //Increment quantity each time by 1 if same product is getting added to cart, else add the product to cart with quantity as 1
            const itemIndex = state.items.findIndex((item)=>item.id === action.payload.id);
            if(itemIndex >=0){
                state.items[itemIndex].quantity += 1;
            }
            else{
                const tempProduct = {...action.payload, quantity: 1};
                state.items.push(tempProduct); 
            }
                       
        },

        decreaseCart: (state,action)=>{
            //If item's quantity is >1, then decrement the quantity
            //If Item's quantity is =1, then remove that item from list.
            const itemIndex = state.items.findIndex((item)=>item.id === action.payload.id);
            if(state.items[itemIndex].quantity > 1){
                state.items[itemIndex].quantity -= 1;
            }else if(state.items[itemIndex].quantity === 1){
                state.items = state.items.filter((item)=>item.id !== action.payload.id);
            }
        },

        removeItem: (state, action)=>{
            const itemId = action.payload;
            // console.log("Deleting Item at id ", itemId);
            state.items = state.items.filter((item)=> item.id !== itemId);
        },

        clearCart: (state)=>{
            state.items = [];
        },

        getTotal: (state)=>{

            const {price, quantity} = state.items.reduce((cartTotal,currentItem)=>{
               const {price,quantity} = currentItem;
               const itemTotal = price * quantity;

               cartTotal.price += itemTotal;
               cartTotal.quantity += quantity;

               return cartTotal;
            },
            {
                price: 0,
                quantity: 0
            });

            state.totalQuantity = quantity;
            state.totalPrice = parseFloat(price.toFixed(2));;
        }
    }
});

//Exporting actions for compoments to call.
export const {add, decreaseCart, removeItem, clearCart, getTotal} = cartSlice.actions;

//selector to select cart data
export const cartSelector = (state)=> state.cartItems;

export default cartSlice.reducer;