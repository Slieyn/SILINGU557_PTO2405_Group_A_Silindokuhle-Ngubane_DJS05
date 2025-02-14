import { store } from "./store.js";
import { addAction, subtractAction, resetAction } from "./actions.js";

/**
 * Subscribes to store state changes and logs the updated state to the console.
 */
const unsubscribe = store.subscribe((newState) => {
  console.log("State Updated:", newState);
});

// Logging the initial state of the store (should be { count: 0 })
console.log("Initial State:", store.getState());

// Dispatching actions to update the state:
store.dispatch(addAction()); // { count: 1 }
store.dispatch(addAction()); // { count: 2 }
store.dispatch(subtractAction()); // { count: 1 }
store.dispatch(resetAction()); // { count: 0 }

// Unsubscribing from state changes (optional)
unsubscribe();
