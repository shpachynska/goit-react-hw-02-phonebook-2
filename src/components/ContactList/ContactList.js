import React from "react";
import styles from "./ContactList.module.css";

function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li className={styles.ContactList__item} key={contact.id}>
          <span>{contact.name}:&nbsp;</span>
          <span>{contact.number}</span>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
