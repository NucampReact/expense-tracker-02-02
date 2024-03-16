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
            { data.accounts.map(account => {
              return (
                <tr key={Math.random()}>
                  <td>{account.accountName}</td>
                  <td>{account.accountDescription}</td>
                  <td>{account.balance}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
}

export default Accounts;