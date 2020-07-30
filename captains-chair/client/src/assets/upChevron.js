import React from 'react';
import PropTypes from 'prop-types';


const UpChevron = ({ className, fill}) => {
  return (
    <svg viewBox="0 0 444.819 444.819" className={className}>
      <path fill={fill} d="M433.968,278.657L248.387,92.79c-7.419-7.044-16.08-10.566-25.977-10.566c-10.088,0-18.652,3.521-25.697,10.566
		L10.848,278.657C3.615,285.887,0,294.549,0,304.637c0,10.28,3.619,18.843,10.848,25.693l21.411,21.413
		c6.854,7.23,15.42,10.852,25.697,10.852c10.278,0,18.842-3.621,25.697-10.852L222.41,213.271L361.168,351.74
		c6.848,7.228,15.413,10.852,25.7,10.852c10.082,0,18.747-3.624,25.975-10.852l21.409-21.412
		c7.043-7.043,10.567-15.608,10.567-25.693C444.819,294.545,441.205,285.884,433.968,278.657z"/>
    </svg>  
  );
}

UpChevron.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

UpChevron.defaultProps = {
  className: undefined,
  fill: 'green',
};

export default UpChevron;