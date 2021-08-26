import PropTypes from 'prop-types';

import NewContact from '../NewContact';
import styles from './UserPhoneBook.module.css';

const UserPhoneBook = ({ contact, onDelete }) => {
    return (
        <div className={styles.wrapper}>
            <h2>Your contacts</h2>
            <ul className={styles.list}>
                {contact.map(({ id, name, number }) => (
                    <NewContact
                        key={id}
                        name={name}
                        number={number}
                        onDelete={onDelete}
                        id={id}
                    />
                ))}
            </ul>
        </div>
    );
};

UserPhoneBook.propTypes = {
    contact: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    onDelete: PropTypes.func,
};

export default UserPhoneBook;
