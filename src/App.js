import "./App.css";
import React, { Component } from "react";
import shortid from "shortid";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import Form from "./components/Form/Form";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (data) => {
    console.log(data);
    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div className="container">
        {/* <h1>Phonebook</h1> */}
        <Form onSubmit={this.addContact} />
        {/* <h2>Contacts</h2> */}
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} />
      </div>
    );
  }
}
export default App;
