import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
} from '@chakra-ui/react';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormControl
      as="form"
      display="flex"
      flexDirection="column"
      gap={8}
      p={4}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <FormLabel>
       Електронна пошта
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          boxShadow="xl"
          p="6"
          rounded="md"
        />
        <FormHelperText fontSize={14} color="blue.500" mt={1}>
          Незабудьте ввести символ @
        </FormHelperText>
      </FormLabel>

      <FormLabel>
         Password
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          boxShadow="xl"
          p="6"
          rounded="md"
        />
        <FormHelperText fontSize={14} color="blue.500" mt={1}>
          Password must be at least 8 signs
        </FormHelperText>
      </FormLabel>
      <Button
        type="submit"
        w={40}
        m={12}
        bg="blue.100"
        _hover={{ bg: 'yellow.100' }}
        boxShadow="dark-lg"
        size="lg"
        rounded="md"
      >
        Log In
      </Button>
    </FormControl>
  );
};