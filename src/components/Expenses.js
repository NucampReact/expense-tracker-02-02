import { Form, FormGroup, Input, Label, Table, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ACCOUNT_BALANCE = 1000;

function Expenses() {
  // useParams() returns an object of all of your parameterized route variables
  const { account, expense: expenseDetail } = useParams();

  // get dispatcher function
  const dispatcher = useDispatch();

  // get the data from redux via useSelector hook
  const expenseList = useSelector(function(state) {
    // return what you want out of state
    return state.expenses;
  });

  const [ expense, setExpense ] = useState({});
  const [ expenseTotal, setExpenseTotal ] = useState(0);
  const [ expenseStatus, setExpenseStatus ] = useState('success');

  const handleInput = (event) => {
    setExpense(prevExpense => ({ ...prevExpense, [event.target.name]: event.target.value }));
  }

  const handleSubmit = () => {
    // Save data into redux.
    // First, describe the action
    let action = {
      // required property called 'type'
      type: 'ADDING_EXPENSE', // unique identifier for the action
      addedExpense: expense,
    }

    // Toolkit organizes the object like this:
    /*
      action = {
        payload: {
          foo: 'bar',
          x: 1,
          y: 3,
          addedExpense: expense
        }
      }
    */

    dispatcher(action); // Sending the action through the dispatcher
  }

  // useEffect hook: Runs a "side effect" function when changes occur on some dependency
  /*
    Arguments:
      1) callback function: The custom code that you want to run once change finishes
      2) Dependency list: What will trigger the change
        a) [ data, data1, data2 ] = listen to changes on anything in your array
        b) [] = Only on the first render
        c) null/undefined = Every render of my component
  */
  useEffect(() => {
    // Add up the expense amounts
    let sum = 0;
    // Loop over the expenseList array and add up the amounts
    for(let index = 0; index < expenseList.length; index++) {
      sum += parseInt(expenseList[index].amount);
    }
    setExpenseTotal(sum);
  }, [expenseList]); // only run my effect when expenseList changes

  // Only run the effect when expenseTotal changes
  useEffect(() => {
    if (expenseTotal > ACCOUNT_BALANCE) {
      setExpenseStatus('danger');
      console.error('YOU HAVE EXCEEDED YOUR BALANCE! STOP SPENDING MONEY!');
    }
  }, [expenseTotal])
  
  return (
    <section>
    <Card className='mb-4'>
      <CardHeader>
        <h2>Enter in your expense</h2>
        <h3>Your starting balance is: {ACCOUNT_BALANCE}</h3>
        <h4>Your total expenses are: <span className={`text-${expenseStatus}`}>{expenseTotal}</span></h4>
      </CardHeader>
      <CardBody>
        <Form>
          <FormGroup>
            <Label>Name</Label>
            <Input onChange={handleInput} autoComplete='off' name='name' />
          </FormGroup>
          <FormGroup>
            <Label>Amount</Label>
            <Input onChange={handleInput} name='amount' type='number' />
          </FormGroup>
          <FormGroup>
            <Label>Date</Label>
            <Input onChange={handleInput} name='date' type='date' />
          </FormGroup>
        </Form>
      </CardBody>
      <CardFooter>
        <Button onClick={handleSubmit} color="success">Submit</Button>
      </CardFooter>
    </Card>
    <Card className="mb-2">
      <CardHeader>
        Expense List for {account?.toUpperCase()} Account
        <br />
        Viewing Details on Expense { expenseDetail }
      </CardHeader>
      <CardBody>
        <Table striped>
          <thead>
            <tr>
              <th>Expense Name</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            { expenseList.map(function(exp) {
              return <tr key={Math.random()}>
                <td><Link to={`/expenses/vacation/${exp.name}`}>{exp.name}</Link></td>
                <td>{exp.amount}</td>
                <td>{exp.date}</td>
              </tr>
            }) }
          </tbody>
        </Table>
      </CardBody>
    </Card>
    </section>
  );
}

export default Expenses;