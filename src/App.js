import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import contacts from "./contacts.json";
// console.log(uuidv4());

class Phonebook extends Component {
  state = {
    contacts: contacts,
    filter: "",
  };
  randomId = uuidv4();

  formSubmitHandler = (data) => {
    console.log(data);
  };

  handleBtnClick = ({ name, number }) => {
    if (
      this.state.contacts.find(
        (item) => item.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts!`);
    } else {
      const contact = {
        id: this.randomId,
        name: name,
        number: number,
      };
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
    console.log(e);
  };

  getFilteredItems = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const filtrd = this.getFilteredItems();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onClick={this.handleBtnClick}
          onSubmit={this.formSubmitHandler}
        />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />

        <ContactList id={this.randomId} contacts={filtrd} />
      </div>
    );
  }
}

export default Phonebook;
