import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchTunesState } from "../types/types";

const initialState: SearchTunesState = {
    SearchTunes: []
}

export const QuerySlice = createSlice({
    name: "SearchTunes",
    initialState,
    reducers: {
        handleChange: (state, action: PayloadAction<{ query: string} >) => {
            state.SearchTunes.push({
                query: action.payload.query
            })
        }
    }
})

export default QuerySlice.reducer;
export const { handleChange } = QuerySlice.actions;
