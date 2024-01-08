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
    return (
        <div>
            <h2>Реєстрація</h2>
            <FormControl>
            <FormLabel>Імя</FormLabel>
            <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            boxShadow="xl"
            p="6"
            rounded="md"
          />
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
           : (
        <FormErrorMessage>Будь-ласка,заповніть поле!</FormErrorMessage>)
       </FormControl>
       </div>
    );
};

export default Registration;