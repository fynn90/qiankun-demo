import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      list: [],
    };
  },
  mutations: {
    add(state: IState, { value, id, from }) {
      state.list.push({ value, id, from });
    },
    rm(state: IState, { id }) {
      state.list = state.list.filter((v) => v.id !== id);
    },
  },
});
