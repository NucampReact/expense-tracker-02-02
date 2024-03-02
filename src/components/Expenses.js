import { Table, Card, CardHeader, CardBody } from 'reactstrap';
import Title from '../common/Title';

function Expenses() {
  return (
    <Card className="mb-2">
      <CardHeader>Expense List</CardHeader>
      <CardBody>
        <Table striped>
          <thead>
            <tr>
              <th>Expense Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
}

export default Expenses;