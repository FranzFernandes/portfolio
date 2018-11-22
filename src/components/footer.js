import React, { Component } from 'react';
import Media from 'react-media';

import './footer.css';

export default class footer extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: '#e6e8e6',
          height: '40vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 id="footerText">
          Je kan mijn werk op <a href="https://github.com/FranzFernandes">mijn github</a> vinden. Voor mijn CV kan je op{' '}
          <a href="https://www.linkedin.com/in/francois-bisschop-18821148/">mijn LinkedIn</a> terecht, of je kan{' '}
          <a
            href="https://drive.google.com/uc?export=download&id=1lf5AQOe1E2JUurTu1p7oD4y1BOq-10Ig"
            // href="https://drive.google.com/file/d/1lf5AQOe1E2JUurTu1p7oD4y1BOq-10Ig/view?usp=sharing"
          >
            mijn CV
          </a>{' '}
          direct downloaden. Als dit niet genoeg is,{' '}
          <a href="mailto:francoisbisschop@gmail.com">stuur me dan een mailtje</a>
        </h1>
      </div>
    );
  }
}
