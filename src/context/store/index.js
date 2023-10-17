import { configureStore , createSlice } from "@reduxjs/toolkit";
import { CATEGORIES } from "../../data/categories";


const categoriesSlice = createSlice({
    name: "Categories",
    initialState: CATEGORIES,
    reducers: {
        addItem(state , action) {
            state.push(action.payload)
        },
        removeItem(state , action) {
            const index = state.indexOf(action.payload);
            state.splice(index,1);
        }
    }
})

const store = configureStore({
    reducer: {
        items: categoriesSlice.reducer
    }
})

export {store};

export const {addItem , removeItem} = categoriesSlice.actions;