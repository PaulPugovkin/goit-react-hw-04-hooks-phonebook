import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './AddForm.module.css';

function AddForm(props) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const onInputChange = value => {
        props.onInputChange(value);
        if (value.target.name === 'name') setName(value.target.value);
        if (value.target.name === 'number') setNumber(value.target.value);
    };

    const onUserSubmit = e => {
        e.preventDefault();
        props.onSubmit();
        setName('');
        setNumber('');
    };

    return (
        <form className={styles['form-wrapper']} onSubmit={onUserSubmit}>
            <label>
                <span className={styles['label-text']}>First name:</span>
                <input
                    onChange={onInputChange}
                    className={styles.input}
                    placeholder="Ivanov Ivan"
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
            </label>
            <label>
                <span className={styles['label-text']}>Phone number:</span>
                <input
                    className={styles.input}
                    placeholder="+7-999-999-99-99"
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    onChange={onInputChange}
                />
            </label>
            <button type="submit" className={styles.button}>
                Add contact
            </button>
        </form>
    );
}

AddForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    onInputChange: PropTypes.func,
    onUserSubmit: PropTypes.func,
};

export default AddForm;
