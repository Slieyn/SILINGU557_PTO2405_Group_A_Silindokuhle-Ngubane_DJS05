import { reducer, initialState } from "./reducer.js";

/**
 * Creates a Redux-inspired store with state management functions.
 * @param {Function} reducer The reducer function to manage state updates.
 * @param {Object} initialState The initial state of the application.
 * @returns {Object} The store with getState, dispatch, and subscribe methods.
 */
const createStore = (reducer, initialState) => {
  let state = initialState; // Store's current state
  let listeners = []; // Array to hold all subscribed listeners

  /**
   * Returns the current state of the store.
   * @returns {Object} The current state.
   */
  const getState = () => state;

  /**
   * Dispatches an action to update the store's state.
   * @param {Object} action The action object that describes the change.
   */
  const dispatch = (action) => {
    state = reducer(state, action); // Update state based on the reducer
    listeners.forEach((listener) => listener(state)); // Notify all listeners
  };

  /**
   * Subscribes to state changes, executing a callback function when the state is updated.
   * @param {Function} listener The function to call when the state changes.
   * @returns {Function} A function to unsubscribe from state changes.
   */
  const subscribe = (listener) => {
    listeners.push(listener); // Add listener to the list
    return () => {
      // Function to remove listener when unsubscribing
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  return { getState, dispatch, subscribe };
};

// Create an instance of the store
const store = createStore(reducer, initialState);

export { store };
