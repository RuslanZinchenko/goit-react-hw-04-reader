import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Reader.module.css';

const Publication = ({ id, title, text }) => (
  <section className={styles.publication} key={id}>
    <h2>{title}</h2>
    <p>{text}</p>
  </section>
);

Publication.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Publication;
