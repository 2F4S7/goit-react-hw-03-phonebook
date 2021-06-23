import Btn from './header/btn';
import './header/btn.module.css';

import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import Top from './components/Section/Top';
import Bottom from './components/Section/Bottom';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = contact => {
    const { contacts } = this.state;
    const { name } = contact;
    const names = contacts.map(item => item.name);

    names.includes(name)
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
  };

  onChangeFilter = event => {
    const filterValue = event.target.value;

    this.setState({ filter: filterValue });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const { formSubmitHandler, onChangeFilter, deleteContact, filterContacts } =
      this;
    const filteredContacts = filterContacts();

    return (
      <>
        <Btn title="React Home Work Phonebook 03" />
        <Top title="Phonebook">
          <ContactForm onSubmit={formSubmitHandler} />
        </Top>

        <Bottom title="Contacts">
          <Filter value={filter} onChange={onChangeFilter} />
          <ContactList contacts={filteredContacts} onClick={deleteContact} />
        </Bottom>
      </>
    );
  }
}

export default App;
