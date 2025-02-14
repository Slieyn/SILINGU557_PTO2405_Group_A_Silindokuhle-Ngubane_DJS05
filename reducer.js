import { ADD, SUBTRACT, RESET } from "./actions.js";

/**
 * The initial state of the counter application.
 * This state is immutable (cannot be modified directly).
 * @type {Object}
 */
const initialState = Object.freeze({ count: 0 });

/**
 * Reducer function to handle state updates based on dispatched actions.
 * @param {Object} state The current state of the application.
 * @param {Object} action The action object that describes the change.
 * @returns {Object} The new state after applying the action.
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      // Increments the count by 1
      return { ...state, count: state.count + 1 };
    case SUBTRACT:
      // Decrements the count by 1
      return { ...state, count: state.count - 1 };
    case RESET:
      // Resets the count to the initial state
      return initialState;
    default:
      // Returns the state unchanged if the action is not recognized
      return state;
  }
};

export { reducer, initialState };
