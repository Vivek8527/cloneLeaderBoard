/* eslint-disable no-unused-vars */
import { create } from "zustand";

const userStore = create((set) => ({
  user: {},
  setUser: (data) => {
    set({ user: data });
  },
}));

export default userStore;
