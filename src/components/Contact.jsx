import { useState } from "react";
import { v4 } from "uuid";

import ContactsList from "./ContactsList.jsx";
import inputs from "./constants/inputs.js";
import styles from "./Contact.module.css";

function Contact() {
  const [alert, setAlert] = useState("");
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };
  const addHandler = () => {
    if (
      !contact.name ||
      !contact.email ||
      !contact.lastName ||
      !contact.phone
    ) {
      setAlert("Please enter valid data!");
      return;
    }
    setAlert("");
    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
    console.log(contacts);
    setContact({
      id: "",
      name: "",
      lastName: "",
      email: "",
      phone: " ",
    });
  };
  const deleteHandeler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputs.map((item, index) => (
          <input
            key={index}
            type={item.type}
            placeholder={item.placeholder}
            name={item.name}
            value={contact[item.name]}
            onChange={changeHandler}
          />
        ))}

        <button onClick={addHandler}>Add Contact</button>
      </div>
      <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
      <ContactsList contacts={contacts} deleteHandeler={deleteHandeler} />
    </div>
  );
}

export default Contact;
