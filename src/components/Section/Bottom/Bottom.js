import React from 'react';
import PropTypes from 'prop-types';
import style from './Bottom.module.css';

const Top = ({ title, children }) => {
  return (
    <section className={style.bottom}>
      <h2 className={style.title}>{title}</h2>
      {children}
    </section>
  );
};

Top.defaultProps = {
  title: 'New section',
};

Top.propTypes = {
  title: PropTypes.string,
};

export default Top;
