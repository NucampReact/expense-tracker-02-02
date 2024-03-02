import { Table, Card, CardHeader, CardBody } from 'reactstrap';

function Accounts() {
  return (
    <Card className="mb-2">
      <CardHeader>Accounts List</CardHeader>
      <CardBody>
        <Table striped>
          <thead>
            <tr>
              <th>Account Name</th>
              <th>Description</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
}

export default Accounts;