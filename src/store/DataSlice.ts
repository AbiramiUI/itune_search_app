import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface MyKnownError {
    errorMessage: string
  }

export interface TuneData{
    data: []
}

interface TuneDataState{
    iTuneData: TuneData[]
}

const initialState: TuneDataState = {
    iTuneData: []
}

export const fetchData = createAsyncThunk(
    "iTunes/fetch",
    async (query: string, thunkAPI) => {
      const response = await fetch(`https://itunes.apple.com/search?term=${(query).split(' ').join('+')}`);
      const data = await response.json();
      if (response.status === 400) {
        // Return the known error for future handling
        return thunkAPI.rejectWithValue((await response.json()) as MyKnownError)
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
        alert(action.error);
        state.iTuneData = []
      })
    }
})
export default DataSlice.reducer;
