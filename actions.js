/**
 * Action Types
 * These constants represent the types of actions that can be dispatched.
 */
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const RESET = "RESET";

/**
 * Action Creator for ADD action.
 * @returns {Object} The action object for adding 1 to the count.
 */
const addAction = () => ({ type: ADD });

/**
 * Action Creator for SUBTRACT action.
 * @returns {Object} The action object for subtracting 1 from the count.
 */
const subtractAction = () => ({ type: SUBTRACT });

/**
 * Action Creator for RESET action.
 * @returns {Object} The action object to reset the count to 0.
 */
const resetAction = () => ({ type: RESET });

export { ADD, SUBTRACT, RESET, addAction, subtractAction, resetAction };
