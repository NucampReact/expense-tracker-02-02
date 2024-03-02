import {
  Card, CardBody, CardHeader, CardFooter,
  FormGroup, Input, Label, Button
} from 'reactstrap';

function AccountSetup() {
  return (
    <Card>
      <CardHeader>Enter in some intial information</CardHeader>
      <CardBody>
        <FormGroup>
          <Label>Account Name</Label>
          <Input />
        </FormGroup>
        <FormGroup>
          <Label for="exampleRange">
            Weekly Budget
          </Label>
          <Input
            id="exampleRange"
            name="range"
            type="range"
          />
        </FormGroup>
        <FormGroup>
          <Label>Starting Account Balance</Label>
          <Input type='number' />
        </FormGroup>
        <FormGroup>
          <Label>Account Description</Label>
          <Input type='textarea' />
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
        <Button color="success" size="lg">Add Account</Button>
      </CardFooter>
    </Card>
  )
};

export default AccountSetup;