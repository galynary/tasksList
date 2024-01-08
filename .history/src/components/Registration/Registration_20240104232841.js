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
    const isError = input === ''
    return (
        <div>
        <h2>Реєстрація</h2>
        {!isError ? (
          <FormControl>
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