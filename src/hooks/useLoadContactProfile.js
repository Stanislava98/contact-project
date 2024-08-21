import axios from 'axios';
import { transformContactResourse } from 'utils/transform';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useLoadContactProfile = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  const loadContactProfile = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_API_URL}/api/v1/contact/${id}`)
      .then((response) => {
        if (response && response.data && Array.isArray(response.data.resources)) {
          if (response.data.resources.length > 0) {
            const transformContact = transformContactResourse(response.data.resources[0]);
            setContact(transformContact);
          }
        }
      })
      .catch((err) => {
        console.error('Error fetching contact:', err);
      });
  };

  const updateContact = (tags) => {
    setContact((prevContact) => ({
      ...prevContact,
      tags: [...prevContact.tags, ...tags],
    }));
  };

  useEffect(() => {
    loadContactProfile();
  }, []);

  return {
    contact,
    updateContact,
  };
};

export default useLoadContactProfile;
