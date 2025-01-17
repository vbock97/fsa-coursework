import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    async function fetchContactDetails() {
      if (!selectedContactId) return;
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/"
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error("Error fetching Contact details:", error);
      }
    }
    fetchContactDetails();
    console.log(contact);
  }, []);

  if (!contact) {
    return <p>Loading details about Contact</p>;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Website: {contact.website}</p>
      <button onClick={() => setSelectedContactId(null)}>Back to List</button>
      </div>
  );
}
