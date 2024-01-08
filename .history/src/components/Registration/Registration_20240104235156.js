import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button
  } from '@chakra-ui/react'

const Registration = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleChange = ({ target: { name, value } }) => {
      switch (name) {
        case 'name':
          return setName(value);
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
      dispatch(register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
    };
    const isError = input === ''
    return (
        <div>
        <h2>Реєстрація</h2>
        {!isError ? (
          <FormControl  onSubmit={handleSubmit}
      >  autoComplete="off"
            <FormLabel>Ім'я</FormLabel>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              boxShadow="xl"
              p="6"
              rounded="md"
            />
            <FormHelperText>Ведіть ім'я</FormHelperText>
      
            <FormLabel>Електронна адреса</FormLabel>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              boxShadow="xl"
              p="6"
              rounded="md"
            />
            <FormHelperText>Ведіть електронну пошту.</FormHelperText>
            <FormLabel>Пароль</FormLabel>
            <Input
              type="password"
            name="password"
            value={password}
              onChange={handleChange}
              boxShadow="xl"
              p="6"
              rounded="md"
            />
            <FormHelperText>Ведіть електронну пошту.</FormHelperText>
            <Button  type="submit"
              variant='solid'
            w={40}
            m={12}
            bg="gray.100"
            _hover={{ bg: 'blue.100' }}
            boxShadow="dark-lg"
            size="lg"
            rounded="md"
            >
            Зареєструватись
            </Button>
            </FormControl>
            ) : (
                <FormErrorMessage>Будь-ласка, заповніть поле!</FormErrorMessage>
            
            )}
        </div>
    );
};

export default Registration;