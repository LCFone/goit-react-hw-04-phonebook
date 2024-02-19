import React, { useState } from 'react';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const onFilterChange = event => {
    const inputValue = event.target.value;
    setFilter(inputValue);
  };

  const onDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const handleFormSubmit = data => {
    const { name, number } = data;
    if (
      contacts.some(
        contact => contact.name === name && contact.number === number
      )
    ) {
      alert(`"${name}" is already in contacts!`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, { ...data, id: nanoid() }]);
  };

  const filteredContactsByName = contacts.filter(contact => {
    return (
      contact.name.toLowerCase().includes(filter.trim().toLowerCase()) ||
      contact.number.includes(filter)
    );
  });

  return (
    <div className="container">
      <ContactsForm onSubmit={handleFormSubmit} />

      <Filter
        label="Name"
        type="text"
        onChange={onFilterChange}
      />
      <ContactList
        contacts={filteredContactsByName}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}
