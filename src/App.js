import Header from "./component/Header/head"
import AddContact from "./component/AddContact/add"
import ContactList from "./component/ContactList/list"
import { useEffect, useState } from 'react';

function App() {
  const localStorageData = "contacts"
  const [contacts, setContact] = useState([]);

  const addContact = (contact) => {
    console.log(contact)
    setContact([...contacts, contact])
  }


  useEffect(() => {
    const retriveData = JSON.parse(localStorage.getItem(localStorageData))
    if (retriveData) setContact(retriveData)
  }, [])

  useEffect(() => {
    localStorage.setItem(localStorageData, JSON.stringify(contacts))
  }, [contacts])
  return (
    <div className="container">
      <Header />
      <AddContact heading="Add Contact" myContact={addContact} />
      <ContactList title="Contact List" contact={contacts} />
    </div>
  );
}

export default App;
