import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { selectIsLoading } from 'redux/contacts/selectors';
import { selectContacts } from 'redux/contacts/selectors';

export default function PhoneBookPage() {


  return (
    <Wrapper>
     
      <h1>Hello Nazar</h1>
      
    </Wrapper>
  );
}
