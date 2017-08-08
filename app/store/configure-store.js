import { createStore } from 'redux';
import { loadState, saveState } from 'services/local-storage';
import todoAppStore from 'reducers';

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    todoAppStore,
    persistedState
  );

  store.subscribe(() => {
    saveState({
      todos: store.getState().todos,
    });
  });

  return store;
};

export default configureStore;
