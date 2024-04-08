interface SampleStoreState {
  count: number;
  actions: {
    increment: () => void;
    decrement: () => void;
  };
}
