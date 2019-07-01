import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Reader.module.css';

const Counter = ({ articleNumber, articlesLength }) => (
  <div>
    <p className={styles.counter}>
      {articleNumber}/{articlesLength}
    </p>
  </div>
);

Counter.defaultProps = {
  articleNumber: 1,
};

Counter.propTypes = {
  articleNumber: PropTypes.number,
  articlesLength: PropTypes.number.isRequired,
};

export default Counter;
