import { create } from "zustand";
import { mountStoreDevtool } from 'simple-zustand-devtools';

const useSampleStore = create<SampleStoreState>((set) => ({
  count: 0,
  actions: {
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
  }
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('SampleStore', useSampleStore);
}

export default useSampleStore;