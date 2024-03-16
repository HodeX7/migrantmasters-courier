"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  senderData: {
    name: null,
    email: null,
    phone: null,
    location: null,
  },
  receiverData: {
    name: null,
    email: null,
    phone: null,
    location: null,
  },
  distance: null,
  packageType: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setSenderData(state, action) {
      state.senderData = action.payload;
    },
    setReceiverData(state, action) {
      state.receiverData = action.payload;
    },
    setDistance(state, action) {
      state.distance = action.payload;
    },
    setPackageType(state, action) {
      state.packageType = action.payload;
    },
  },
});

export const { setSenderData, setReceiverData, setDistance, setPackageType } =
  dataSlice.actions;
export default dataSlice.reducer;
