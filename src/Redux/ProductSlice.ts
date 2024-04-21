import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
    colors: [],
    company: string;
    quantity?: number;
    shipping: boolean;
}

interface ProductState {
    products: Product[];
    loading: boolean;
    error: string | null;
    product: Product | null;
    shipping: boolean;
}

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null,
    product: null,
    shipping: false,
}

const productSlice = createSlice({
    name: "loopStore",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const { id, quantity } = action.payload;
            const existingProduct = state.products.find((product) => product.id === id);

            if (existingProduct) {
                existingProduct.quantity = (existingProduct.quantity || 0) + (quantity || 1);
            } else {
                state.products.push({ ...action.payload, quantity: quantity || 1 });
            }
            toast.success("Product added to cart");
        },

        deleteItem: (state, action: PayloadAction<Product>) => {
            state.products = state.products.filter((product) => product.id !== action.payload.id);
        },

        resetCart: (state) => {
            state.products = [];
            toast.success("OMG! No more products.")
        },

        updateQuantity: (state, action: PayloadAction<{ id: number; quantityChange: number }>) => {
            const { id, quantityChange } = action.payload;
            const existingProduct = state.products.find((product) => product.id === id);

            if (existingProduct) {
                const newQuantity = (existingProduct.quantity || 1) + quantityChange;
                existingProduct.quantity = Math.max(newQuantity, 1);
            }
        },

    }
})

export const { addToCart, resetCart, updateQuantity, deleteItem } = productSlice.actions;
export default productSlice.reducer;
