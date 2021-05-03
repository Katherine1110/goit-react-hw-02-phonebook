import React from "react";
import { v4 as uuidv4 } from "uuid";

const ContactList = ({ contacts }) => {
  console.log(contacts);

  const randomId = uuidv4();

  return (
    <ul>
      {contacts.map(({ id = { randomId }, name, number }) => (
        <li id={id} name={name} number={number}>
          {name}
          {number}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
