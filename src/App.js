import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Section from './Components/Section';
import AddForm from './Components/AddForm';
import UserPhoneBook from './Components/UserPhonebook';
import Filter from './Components/Filter';

function App() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const onInputChange = value => {
        if (value.target.name === 'name') setName(value.target.value);
        if (value.target.name === 'number') setNumber(value.target.value);
    };

    const [contacts, setContact] = useState([]);

    useEffect(() => {
        const localContacts = localStorage.getItem('contacts');
        setContact(JSON.parse(localContacts));
    }, []);

    useEffect(() => {
        const localContacts = JSON.stringify(contacts);
        localStorage.setItem('contacts', localContacts);
    }, [contacts]);

    const onSubmit = () => {
        if (checkEnteredName(name)) {
            return alert(`${name} is already in contact`);
        }
        const contact = {
            id: uuidv4(),
            name,
            number,
        };
        setContact(prevState => [...prevState, { ...contact }]);
        resetForm();
    };

    const onDeleteContact = contactId => {
        setContact(contacts.filter(contact => contact.id !== contactId));
    };

    const checkEnteredName = () => {
        const normalizedName = name.toLowerCase();
        return contacts.some(
            ({ name }) => name.toLowerCase() === normalizedName,
        );
    };

    const [filter, setFilter] = useState('');

    const handlerFilterChange = data => {
        setFilter(data.currentTarget.value);
    };

    const handlerUserSearch = () => {
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    };

    const resetForm = () => {
        setName('');
        setNumber('');
    };

    return (
        <Section>
            <AddForm onSubmit={onSubmit} onInputChange={onInputChange} />

            {contacts.length > 0 ? (
                <>
                    <Filter onChange={handlerFilterChange} />
                    <UserPhoneBook
                        contact={handlerUserSearch()}
                        onDelete={onDeleteContact}
                    />
                </>
            ) : (
                <h2>There is no contacts</h2>
            )}
        </Section>
    );
}

export default App;
