import { Table, Card, CardHeader, CardBody } from 'reactstrap';

function Accounts(data) {
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
            <tr>
              <td>{data.account.accountName}</td>
              <td>{data.account.accountDescription}</td>
              <td>{data.account.balance}</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
}

export default Accounts;