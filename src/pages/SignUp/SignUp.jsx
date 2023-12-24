import { Label, Input, Button } from "./SignUp.styled";

import { Container, Form } from 'react-bootstrap';
import { signUpThunk } from 'redux/user/userThunk';

const { useDispatch } = require('react-redux');
const { useState } = require('react');

const SignUp = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
  const handleOnSubmit = evt => {
    evt.preventDefault();
    dispatch(signUpThunk({ email, password, name }))
      .unwrap()
      .then(() => {
        setEmail('');
        setPassword('');
      })
      .catch(() => alert('Please enter all input'));
  };
  return (
    <Container>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Label>Name</Label>
          <Input
            onChange={handleChange}
            name="name"
            value={name}
            type="text"
            placeholder="Your name"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Label>Email</Label>
          <Input
            onChange={handleChange}
            name="email"
            value={email}
            type="email"
            placeholder="Enter email"
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
          />
        </Form.Group>
        <Button type="submit">
          Sign up
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
