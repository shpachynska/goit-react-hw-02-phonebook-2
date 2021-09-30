import "./App.css";
import React, { Component } from "react";
import shortid from "shortid";
import ContactList from "./components/ContactList/ContactList";
// import Filter from "./components/Filter/Filter";
import Form from "./components/Form/Form";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
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

  render() {
    return (
      <div className="container">
        <Form onSubmit={this.addContact} />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
export default App;
