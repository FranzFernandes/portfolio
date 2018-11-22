/* eslint-disable react/prop-types */
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

const Header = () => (
  <div>
    <div
      id="background"
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div id="headerText" style={{ margin: '0', color: '#fdfffc'}}>
        <h1 style={{ margin: '0'  }}>
          Hallo, ik ben <span style={{ color: '#e71d36' }}>Francois</span>
        </h1>{' '}
        <h2 style={{marginTop: '15px'}}>+ Een laatstejaars student aan de HvA </h2>
        <h2 style={{marginTop: "-20px"}}>+ Een developer </h2>
        <h2 style={{marginTop: "-20px"}}>
          + Een fan van koffie{' '}
          <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
            ☕
          </span>{' '}
        </h2>
      </div>
    </div>
  </div>
);

export default Header;
