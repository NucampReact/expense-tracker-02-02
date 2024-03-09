import { Table, Card, CardHeader, CardBody } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Expenses() {
  // useParams() returns an object of all of your parameterized route variables
  const { account, expense } = useParams();
  
  return (
    <Card className="mb-2">
      <CardHeader>
        Expense List for {account?.toUpperCase()} Account
        <br />
        Viewing Details on Expense { expense }
      </CardHeader>
      <CardBody>
        <Table striped>
          <thead>
            <tr>
              <th>Expense Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/expenses/vacation/six-flags">Six Flag Tickets</Link></td>
              <td>$340</td>
            </tr>
            <tr>
              <td><Link to="/expenses/vacation/lunch">Lunch</Link></td>
              <td>$100</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
}

export default Expenses;