import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: [],
  },
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload.contacts;
    },
    addContacts: (state, action) => {
      state.contacts = [action.payload.contact, ...state.contacts];
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload.contactId);
    },
  },
});

export const { removeContact, setContacts, addContacts } = contactSlice.actions;

export default contactSlice.reducer;
