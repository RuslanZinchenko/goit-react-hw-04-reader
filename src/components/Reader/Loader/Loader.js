import React from 'react';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';

const spinnerStyles = {
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
};

const Loading = ({ error, timedOut, pastDelay, retry }) => {
  if (error) {
    return (
      <div>
        Error!
        <br />
        <button type="button" onClick={retry}>
          Retry
        </button>
      </div>
    );
  }

  if (timedOut) {
    return (
      <div>
        Taking a long time...
        <button type="button" onClick={retry}>
          Retry
        </button>
      </div>
    );
  }

  if (pastDelay) {
    return (
      <div>
        <Spinner
          name="line-spin-fade-loader"
          color="steelblue"
          fadeIn="none"
          style={spinnerStyles}
        />
      </div>
    );
  }

  return null;
};

Loading.defaultProps = {
  error: 'error',
  timedOut: 'timedOut',
  pastDelay: 'pastDelay',
  retry: 'retry',
};

Loading.propTypes = {
  error: PropTypes.func,
  timedOut: PropTypes.bool,
  pastDelay: PropTypes.bool,
  retry: PropTypes.func,
};

export default Loading;
