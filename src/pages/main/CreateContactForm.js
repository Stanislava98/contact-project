import { styled } from '@mui/material';
import OutlinedTextField from 'components/OutlinedTextField';
import useAddContact from 'hooks/useAddContact';
import { useForm } from 'react-hook-form';
import OutlinedButton from 'components/OutlinedButton';

const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const Title = styled('div')({
  fontWeight: 500,
  fontSize: 20,
});

const FieldsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Poppins, sans-serif',
  marginTop: 6,
  gap: 10,
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CreateContactForm = () => {
  const { addContact } = useAddContact();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      surname: '',
      email: '',
    },
  });

  const addNewContact = (data) => {
    const { name, surname } = data;
    if ((name && !surname) || (!name && surname) || (name && surname)) {
      addContact(data);
      reset();
    } else {
      alert('Need to fill one of the field');
    }
  };

  return (
    <Root>
      <Title>Create Contact</Title>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <FieldsContainer>
          <OutlinedTextField {...register('name')} label="Name" />
          <OutlinedTextField {...register('surname')} label="Surname" />
          <OutlinedTextField
            {...register('email', {
              required: true,
              minLength: 5,
              maxLength: 20,
              pattern: emailRegex,
            })}
            label="Email"
          />
        </FieldsContainer>
        <OutlinedButton text="Add contact" onClick={handleSubmit(addNewContact)} />
      </div>
    </Root>
  );
};

export default CreateContactForm;
