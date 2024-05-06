import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store/store";

import type { SportProgram } from "@/types/index";

// Define the initial state using that type
const initialState: SportProgram = {
  data: {
    sportId: 0,
    events: [],
    groupName: "",
    marketHeader: "",
    mukList: "",
  },
  isSuccess: false,
  message: "",
  date: "",
  error: "",
  info: "",
};

export const sportProgramSlice = createSlice({
  name: "sportProgram",
  initialState,
  reducers: {
    initSportProgram: (state, action: PayloadAction<SportProgram>) => {
      state.data = action.payload.data;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.date = action.payload.date;
      state.error = action.payload.error;
      state.info = action.payload.info;
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;
export const { initSportProgram } = sportProgramSlice.actions;

export default sportProgramSlice.reducer;
