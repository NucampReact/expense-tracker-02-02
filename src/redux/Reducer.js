/* Reminder of Redux workflow

  Action -> Dispatcher -> Reducer -> View
*/
/*
  1st arg: state => object (aka. the state of your application)
  2nd arg: action => object (the action that the dispatcher sends)
*/

const inititalState = {
  expenses: [],
  accounts: []
}

function MyReducer(state = inititalState, action) {
  
  // Do the work of updating state as you need
  // The only job is to "return" the next (updated) state of your application
  
  // I'm either updating 'expenses array' or 'accounts array'
  if (action.type === 'ADDING_EXPENSE') {
    const expense = action.addedExpense;

    // Add it to the expense array
    return { ...state, expenses: [ ...state.expenses, expense ] };
  } else if (action.type === 'ADD_ACCOUNT') {
    const account = action.addedAccount;

    return { ...state, accounts: [ ...state.accounts, account ] };
  }
  else {
    return inititalState;
  }
}

export default MyReducer;

/*
  Array.reduce(accumulator, callbackFn)
*/