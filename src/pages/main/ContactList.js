import ContactListItem from './ContactListItem';
import { styled } from '@mui/material';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import useGetContactList from 'hooks/useGetContactList';

const Title = styled('div')({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 500,
  fontSize: 20,
});

const ContactListContainer = styled('div')({
  marginTop: 5,
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  overflowY: 'auto',
  maxHeight: 370,
  minWidth: 328,
  '@media(min-width: 900px)': {
    maxHeight: 700,
    minWidth: 558,
  },
});

const ContactList = () => {
  const { getContactList } = useGetContactList();
  const { contacts } = useSelector(({ contact }) => contact);

  useEffect(() => {
    getContactList();
  }, []);

  return (
    <div>
      <Title>Contacts</Title>
      <ContactListContainer>
        {contacts.map((contact) => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </ContactListContainer>
    </div>
  );
};

export default ContactList;
