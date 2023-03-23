import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../../configuration/config";
import { MyKnownError } from "../../types/types";
import { TuneDataState } from "../../types/types";

const initialState: TuneDataState = {
    iTuneData: []
}

export const fetchData = createAsyncThunk(
  "iTunes/fetch",
  async (query: string, thunkAPI) => {
    const response = await fetch(config.apiURL+`${(query).split(' ').join('+')}`);
    const data = await response.json();
    if (response.status === 400) {
      // Return the known error for future handling
      return thunkAPI.rejectWithValue((await response.json()) as MyKnownError)
      console.log(thunkAPI.rejectWithValue((await response.json()) as MyKnownError));
    }
    return await data.results;
  },
);

export const DataSlice = createSlice({
  name: "FetchiTuneData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.iTuneData = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      alert(action.error.message);
      state.iTuneData = []
    })
  }
})
export default DataSlice.reducer;
