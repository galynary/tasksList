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
  <FormLabel>Email address</FormLabel>
  <Input type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
        </div>
    );
};

export default Registration;