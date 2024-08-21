import axios from 'axios';
import { removeContact } from 'store/contactSlice';
import { useDispatch } from 'react-redux';
import { STATUS_OK } from 'enum/SystemEnum';

const useDeleteContact = () => {
  const dispatch = useDispatch();

  const deleteContact = (contactId) => {
    axios
      .delete(`${process.env.REACT_APP_BASE_API_URL}/api/v1/contact/${contactId}`)
      .then((response) => {
        if (response.status === STATUS_OK) {
          dispatch(removeContact({ contactId }));
        }
      })
      .catch((err) => console.error(err));
  };

  return {
    deleteContact,
  };
};

export default useDeleteContact;
