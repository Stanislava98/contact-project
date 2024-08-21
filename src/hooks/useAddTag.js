import axios from 'axios';

const useAddTag = (contactId) => {
  const addTag = (tags) => {
    return axios.put(`${process.env.REACT_APP_BASE_API_URL}/api/v1/contacts/${contactId}/tags`, {
      tags,
    });
  };

  return {
    addTag,
  };
};

export default useAddTag;
