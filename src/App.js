import { useState, useEffect } from "react";
import Header from "./components/Header";
import PhoneForm from "./components/PhoneForm";
import PhoneList from "./components/PhoneList";
import Search from "./components/Search";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => setContacts([...contacts, newContact]);

  const deleteContact = (index) =>
    setContacts(contacts.filter((_, i) => i !== index));

  const editContact = (index) => {
    const name = prompt("Введите новое ФИО");
    if (name) {
      const updatedContacts = contacts.map((contact, i) =>
        i === index ? { ...contact, name } : contact
      );
      setContacts(updatedContacts);
    }
  };

  const filteredContacts = contacts.filter((contact) =>
    Object.values(contact).some((value) =>
      value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PhoneForm addContact={addContact} />
      <PhoneList
        contacts={filteredContacts}
        deleteContact={deleteContact}
        editContact={editContact}
      />
    </div>
  );
};

export default App;
