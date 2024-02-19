import React from 'react';
import { nanoid } from 'nanoid';
import './ContactList.css';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <div>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={nanoid()}>
          {name} : {number}
          <button
            id={nanoid(id)}
            className="contactListBtn"
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);
