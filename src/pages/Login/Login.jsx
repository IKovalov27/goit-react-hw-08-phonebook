import { Input, Label, Button } from "./Login.styled";

const { useState } = require('react');
const { Container, Form } = require('react-bootstrap');
const { useDispatch } = require('react-redux');
const { loginThunk } = require('redux/user/userThunk');

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        throw new Error();
    }
  };

  const handleOnSubmit = event => {
    event.preventDefault();

    dispatch(loginThunk({ email, password }))
      .unwrap()
      .then(() => {
        setEmail('');
        setPassword('');
      })
      .catch(() => alert('Sorry, there is some trouble, try again later'));
  };

  return (
    <Container>
      <Container className="align-items-center d-flex flex-column justify-content-center mt-4">
          <h1>Welcome please login</h1>
      </Container>

      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Label>Email</Label>
          <Input
            onChange={handleChange}
            name="email"
            value={email}
            type="email"
            placeholder="Enter email"
            autoComplete="Username email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Label>Password</Label>
          <Input
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            autoComplete="current-password"
          />
        </Form.Group>
        <Button type="submit">
          Log in
        </Button>
      </Form>
    </Container>
  );
};

export default Login;