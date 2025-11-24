import { create } from "zustand";

interface StatusFilterInterface {
    statusValue: string;
    setStatusValue: (value: string) => void;
}

export const useStatusFilter = create<StatusFilterInterface>((set) => ({
  statusValue: "all",
  setStatusValue: (statusValue) => set({ statusValue }),
}));
