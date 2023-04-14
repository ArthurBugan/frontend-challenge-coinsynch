import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { Schema } from "@components/dialogs/AddCrypto";

interface TradeStore {
  data: any;
  updatedAt: number;
  addItem: (data: Schema) => void;
}

const useTradeStore = create(
  immer<TradeStore>((set) => ({
    data: [],
    updatedAt: 0,
    addItem: (data: Schema) =>
      set((state) => {
        state.updatedAt = new Date().getTime();
        state.data.push(data);
      }),
  }))
);

export default useTradeStore;
