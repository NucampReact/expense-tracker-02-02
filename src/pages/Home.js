import { Row, Col, Card, CardHeader, CardBody, Progress } from 'reactstrap';
import Title from '../common/Title';
import { useSelector } from 'react-redux';

// JSX = JavaScript XML (extensible markup language)
/*
  class is a reserved word in JS
  
  Every JSX is converted to HTML using this process:
  reactEl = React.createElement('div', {
    className: 'App',
    id: 'my-id
  });

  XML -> JS -> HTML

  if (myTag is a function?)
    Invoke my function: Title();

  if (myTag has attributes?)
    creates an object with all your attributes
    Invoke my function w/ Parameters: Title(object of attributes)

  document.createElement(reactEl); // This is the final step that generates the HTML for the web page
*/

function selectAccounts(state) {
  return state.accounts
}

function Home() {
  const accountsList = useSelector(selectAccounts);

  const expenseList = useSelector(function(state) {
    return state.expenses;
  })

  return (
    <section>
      <Row className="mb-2 text-center">
        <Col>
          <Card>
            <CardHeader><Title message="Welcome to my expense tracking app!" /></CardHeader>
            <CardBody>
              Your Progress for completing your account setup
              <Progress multi>
                <Progress bar color="success" value={20}>Profile Setup</Progress>
                <Progress bar color="info" value={50}>Add Your First Expense</Progress>
                <Progress bar color="warning" value={10}>Complete Tutorial</Progress>
                <Progress bar value={30}>Fill Budget Sheet</Progress>
              </Progress>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card>
            <CardHeader><Title message="Totals" /></CardHeader>
            <CardBody>
              <p>Expenses Recorded: {expenseList.length}</p>
              <p>Accounts Recorded: {accountsList.length}</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default Home;
