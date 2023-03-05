import {configureStore} from "@reduxjs/toolkit";
import { QuerySlice } from "./QuerySlice";
import { DataSlice } from "./DataSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer:{
        SearchTunes: QuerySlice.reducer,
        iTuneDataReducer: DataSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;