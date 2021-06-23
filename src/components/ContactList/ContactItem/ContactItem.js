import React from 'react';
import PropTypes from 'prop-types';
import style from '../ContactList.module.css';

const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <li className={style.item}>
      <p className={style.name} title="Имя контакта">
        {name}:
      </p>
      <p className={style.number} title="Номер телефона контакта">
        {number}
      </p>
      <button
        className={style.button}
        type="button"
        title="Нажмите (Delete) что бы удалить контакт"
        onClick={() => onClick(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ContactItem;
