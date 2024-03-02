import { Row, Col, Card, CardHeader, CardBody, Progress } from 'reactstrap';
import Title from '../common/Title';
import AccountSetup from '../components/AccountSetup';
import Expenses from '../components/Expenses';
import Accounts from '../components/Accounts';

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

function Home() {
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
        <Col xs={12} sm={6}>
          <Accounts />
          <Expenses />
        </Col>
        <Col xs={12} sm={6}>
          <AccountSetup />
        </Col>
      </Row>
    </section>
  );
}

export default Home;
