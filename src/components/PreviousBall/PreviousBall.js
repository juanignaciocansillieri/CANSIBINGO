/* eslint-disable react/prop-types */
import React from 'react';
import bola123 from '../../assets/img/bolas120.png';
import './PreviousBall.css';

const PreviousBall = (props) => {
  const { numero } = props;
  return (
    <div className="bolasPasadas">
      <div className="bolaAnterior">
        <img src={ bola123 } alt=""/>
        <h1>{numero}</h1>
      </div>

    </div>

  );
};

export default PreviousBall;
