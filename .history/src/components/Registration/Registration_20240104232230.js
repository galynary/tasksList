import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
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
          </FormControl>
        ) : (
          <FormControl isInvalid>
            <FormErrorMessage>Будь-ласка, заповніть поле!</FormErrorMessage>
          </FormControl>
        )}
      </div>
    );
};

export default Registration;