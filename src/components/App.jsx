import React from "react";
import Card from "./Card.jsx";
import contacts from "../contacts";

function createCard(contacts) {
  return (
    <Card
      name={contacts.name}
      img={contacts.img}
      contact={contacts.contact}
      email={contacts.email}
    />
  );
}

export default function App() {
  return (
    <div>
      <h1>My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}
