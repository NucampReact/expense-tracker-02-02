import { useState } from 'react';
import {
  Card, CardBody, CardHeader, CardFooter,
  FormGroup, Input, Label, Button
} from 'reactstrap';
import Accounts from './Accounts';

// Event binding
// Choosing an event to listen to, and invoke some function when the event is triggered

/*
function Example() {
  const myVar = 2;
  const something = 'else';
  console.log('My Var is', myVar);
};

Example(); // myVar = 1
Example(); // myVar = 2
Example(); // see new results
*/


/*
  State Management:
    - Hook into the React Framework to forcefully React to "re-render" your component
    - State is LOCAL & PRIVATE only to this component
    - useState hook
      -> Function to track data and force re-renders when the data changes
      -> a function that returns an array of two elements
        -> 1st: A pointer to the data itself
        -> 2nd: A function to update the data
    - Data is immutable:
      - Original Data cannot be changed
      - Strings/numbers/booleans
        - var bool = true
          bool = false

  
  Every time state changes, React re-invokes function

  Props:
    - Read-only
    - Data given by another component (during renders -- <MyComponent data={1} /> )
*/

/*
  Objects/Arrays are all pass by reference

  let obj = { a: 1 }
  let newObj = obj;
  newObj.b = 2;

  // What happens..
  obj = { a: 1, b: 2 }

  // What we should do..
  // clone with a new ref pointer
  let newObj = { ...obj, b: 2 }
*/


function AccountSetup() {
  const [ accountName, setAccountName ] = useState('Default Account'); // default accountName = ''
  const [ budget, setBudget ] = useState(0); // default budget = 0
  const [ accountDescription, setAccountDescription ] = useState();
  const [ accountBalance, setAccountBalance ] = useState(0); // default balance = 0
  const [ wishList, setWishList ] = useState([]); // default wishList = []
  const [ category, setCategory ] = useState('Food'); // default category = 'Food'
  const [ account, setAccount ] = useState({});

  const handleAccountName = (event) => {
    let newAccountName = event.target.value;
    setAccountName(newAccountName); // Replace accountName with newAccountName's value
  }

  const handleBudget = (event) => {
    let newBudget = event.target.value;
    setBudget(newBudget);
  }

  const handleAccountBalance = (event) => {
    let newBalance = event.target.value;
    setAccountBalance(newBalance);
  }

  const handleDescription = (event) => {
    let newDescription = event.target.value;
    setAccountDescription(newDescription);
  }

  const handleAccountClick = () => {
    console.log('Creating account with below information');
    console.log(`Account Name: ${accountName}\nBudget: ${budget}\nBalance: ${accountBalance}\nDescription: ${accountDescription}`);
    
    setAccount({
      accountName: accountName,
      budget: budget,
      balance: accountBalance,
      accountDescription: accountDescription
    });


  }
  console.log('account is', account);
  // accountName is not being updated here
  // console.log('account name is', accountName);
  // console.log('budget is', budget);
  
  
  return (
    <Card>
      <CardHeader>Enter in some intial information</CardHeader>
      <CardBody>

        <Accounts account={account} />

        <FormGroup>
          <Label>Account Name</Label>
          <Input onChange={handleAccountName} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleRange">
            Weekly Budget
          </Label>
          <Input
            id="exampleRange"
            name="range"
            type="range"
            onChange={handleBudget}
          />
        </FormGroup>
        <FormGroup>
          <Label>Starting Account Balance</Label>
          <Input type='number' onChange={handleAccountBalance} />
        </FormGroup>
        <FormGroup>
          <Label>Account Description</Label>
          <Input type='textarea' onChange={handleDescription} />
        </FormGroup>
        <FormGroup>
          <Label>Wish List</Label>
          <Input />
        </FormGroup>
        <FormGroup>
          <Label>Category</Label>
          <Input type="select">
            <option>Shopping</option>
            <option>Food</option>
            <option>Entertainment</option>
            <option>Charity</option>
          </Input>
        </FormGroup>
      </CardBody>
      <CardFooter>
        <Button onClick={handleAccountClick} color="success" size="lg">Add Account</Button>
      </CardFooter>
    </Card>
  )
};

// AccountSetup() only invoked once
// We want AccountSetup() to be invoked every time data changes

export default AccountSetup;