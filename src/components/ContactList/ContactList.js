import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import style from './ContactList.module.css';

const ContactList = ({ contacts, onClick }) => {
  return (
    <ul className={style.form}>
      {contacts.map(contact => {
        const { id, name, number } = contact;

        return (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onClick={onClick}
            id={id}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ContactList;
