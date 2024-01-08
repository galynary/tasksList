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
            <FormLabel>Name</FormLabel>
            <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            boxShadow="xl"
            p="6"
            rounded="md"
          />
            <FormLabel>Email</FormLabel>
            <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            boxShadow="xl"
            p="6"
            rounded="md"
          />
            <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
        </div>
    );
};

export default Registration;