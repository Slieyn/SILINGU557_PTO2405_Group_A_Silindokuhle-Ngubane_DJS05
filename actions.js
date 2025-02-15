/**
 * Action Types
 * Payloads of information that send data from your application to your store.
 * These constants represent the types of actions that can be dispatched.
 */
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const RESET = "RESET";

/**
 * Action Creator for ADD action.
 * @returns {Object} The action object for adding 1 to the count.
 * Action Creator that returns an action object.
 */
const addAction = () => ({ type: ADD });

/**
 * Action Creator for SUBTRACT action.
 * @returns {Object} The action object for subtracting 1 from the count.
 * Action creater that returns an action object.
 */
const subtractAction = () => ({ type: SUBTRACT });

/**
 * Action Creator for RESET action.
 * @returns {Object} The action object to reset the count to 0.
 * Action creator that returns an action object.
 */
const resetAction = () => ({ type: RESET });

export { ADD, SUBTRACT, RESET, addAction, subtractAction, resetAction };
