import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setContacts } from 'store/contactSlice';
import { transformContactResourse } from 'utils/transform';

const useGetContactList = () => {
  const dispatch = useDispatch();

  const getContactList = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_API_URL}/api/v1/contacts`, {
        params: {
          sort: 'created:desc',
        },
      })
      .then((response) => {
        if (response && response.data && Array.isArray(response.data.resources)) {
          const contacts = [];
          response.data.resources.forEach((resourse) => {
            contacts.push(transformContactResourse(resourse));
          });
          dispatch(setContacts({ contacts }));
        }
      })
      .catch((err) => {
        console.error('Error fetching contact list:', err);
      });
  };

  return {
    getContactList,
  };
};

export default useGetContactList;
