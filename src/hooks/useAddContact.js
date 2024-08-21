import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addContacts } from 'store/contactSlice';
import { transformContactResourse } from 'utils/transform';

const useAddContact = () => {
  const dispatch = useDispatch();

  const addContact = (data) => {
    axios
      .post(`${process.env.REACT_APP_BASE_API_URL}/api/v1/contact`, {
        avatar_url: 'string',
        fields: {
          email: [{ value: data.email }],
          'first name': [{ value: data.name || ' ' }],
          'last name': [{ value: data.surname || ' ' }],
        },
        owner_id: null,
        privacy: {
          edit: null,
          read: null,
        },
        record_type: 'person',
        tags: [],
        type: 'person',
      })
      .then((response) => {
        const contact = transformContactResourse(response.data);
        dispatch(addContacts({ contact }));
      })
      .catch((err) => {
        console.error('Error adding contact:', err);
      });
  };
  return {
    addContact,
  };
};

export default useAddContact;
