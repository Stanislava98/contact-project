import { styled } from '@mui/material';
import CreateContactForm from 'pages/main/CreateContactForm';
import ContactList from 'pages/main/ContactList';

const Root = styled('div')({
  display: 'flex',
  gap: 30,
  justifyContent: 'center',
  minWidth: 400,
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: 22,
  '@media(min-width: 900px)': {
    gap: 50,
    paddingTop: 32,
    flexDirection: 'row',
    alignItems: 'flex-start',
    maxWidth: 1280,
  },
});

const MainPage = () => {
  return (
    <Root>
      <CreateContactForm />
      <ContactList />
    </Root>
  );
};

export default MainPage;
