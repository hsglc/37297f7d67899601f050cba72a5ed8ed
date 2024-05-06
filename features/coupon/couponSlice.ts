import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { CouponEvent } from "@/types/index";

type CouponState = {
  events: CouponEvent[];
  totalOdds: number;
  numberOfEvents: number;
};

const initialState: CouponState = {
  events: [],
  totalOdds: 0,
  numberOfEvents: 0,
};

export const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    addOrUpdateEvent: (state, action: PayloadAction<CouponEvent>) => {
      const index = state.events.findIndex(
        (event) => event.bid === action.payload.bid
      );
      if (index === -1) {
        state.numberOfEvents += 1;
        state.events.push(action.payload);
      } else {
        state.events[index] = action.payload;
      }

      state.totalOdds = state.events.reduce(
        (acc, event) => acc * event.m.odd,
        1
      );
    },
    removeEvent: (state, action: PayloadAction<CouponEvent>) => {
      const index = state.events.findIndex(
        (event) => event.bid === action.payload.bid
      );
      if (index !== -1) {
        state.events.splice(index, 1);
        state.numberOfEvents -= 1;
      }
      if (state.events.length === 0) {
        state.totalOdds = 0;
      } else {
        state.totalOdds /= action.payload.m.odd;
      }
    },
  },
});

export const { addOrUpdateEvent, removeEvent } = couponSlice.actions;

export default couponSlice.reducer;
