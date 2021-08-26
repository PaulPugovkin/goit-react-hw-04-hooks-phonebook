import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
    return (
        <div className={styles.wrapper}>
            <label>
                <span className={styles['label-text']}>Find contact:</span>
                <input
                    placeholder="Search contact"
                    className={styles.input}
                    type="text"
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    );
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Filter;
