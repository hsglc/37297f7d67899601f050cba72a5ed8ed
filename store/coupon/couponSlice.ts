import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { CouponEvent } from "@/types/index";

type CouponState = {
  events: CouponEvent[];
  totalOdds: number;
  numberOfEvents: number;
  isVisible: boolean;
  betTimes: number;
};

const initialState: CouponState = {
  events: [],
  totalOdds: 0,
  numberOfEvents: 0,
  isVisible: true,
  betTimes: 20,
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
        const isSameOdd = state.events[index].m.odd === action.payload.m.odd;
        if (!isSameOdd) {
          state.events[index] = action.payload;
        } else {
          state.events.splice(index, 1);
          state.numberOfEvents -= 1;
        }
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
        state.isVisible = false;
      } else {
        state.totalOdds /= action.payload.m.odd;
      }
    },

    setBetTimes: (state, action: PayloadAction<number>) => {
      state.betTimes = action.payload;
    },

    toggleCouponVisibility: (state) => {
      state.isVisible = !state.isVisible;
    },
    resetCoupon: (state) => {
      state.events = [];
      state.totalOdds = 0;
      state.numberOfEvents = 0;
      state.isVisible = false;
    }
  },
});

export const {
  addOrUpdateEvent,
  removeEvent,
  toggleCouponVisibility,
  setBetTimes,
  resetCoupon,
} = couponSlice.actions;

export default couponSlice.reducer;
