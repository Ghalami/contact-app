import ContactItem from "./ContactItem.jsx";
import styles from "./ContactsList.module.css";
function ContactsList({ contacts, deleteHandeler }) {
  return (
    <div className={styles.container}>
      <h3>Contact List</h3>
      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.map((item) => (
            <ContactItem
              key={item.id}
              data={item}
              deleteHandeler={deleteHandeler}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No Contacts Yet!</p>
      )}
    </div>
  );
}

export default ContactsList;
