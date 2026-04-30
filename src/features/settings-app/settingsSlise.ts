import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { StoreSettings } from "../../types";

interface StoreSettingsState {
  data: StoreSettings | null;
  loading: boolean;
  error: string | null;
}

const initialState: StoreSettingsState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchStore = createAsyncThunk<StoreSettings, number>(
  "storeSettings/fetchStore",
  async (storeId) => {
    const response = await fetch(`http://localhost:3000/stores/${storeId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch store settings");
    }
    return response.json();
  });

  export const updateStore = createAsyncThunk<StoreSettings, StoreSettings>(
    "storeSettings/updateStore",
    async (store) => {
        const response = await fetch(`http://localhost:3000/stores/${store.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(store)
        });
        if (!response.ok) {
            throw new Error("Failed to update store settings");
        }
        const data = await response.json();

        console.log("UPDATE RESPONSE:", data);

        return data;
    }
);

const settingsSlice = createSlice({
  name: "storeSettings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchStore.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchStore.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchStore.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Ошибка загрузки настроек магазина";
        })
        .addCase(updateStore.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
  },
    
});

export default settingsSlice.reducer;