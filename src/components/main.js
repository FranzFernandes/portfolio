import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Youtube from 'react-youtube';
import Media from "react-media";
import {FaGithub} from 'react-icons/fa';

import './main.css';

const Main = () => (
  <StaticQuery
    query={graphql`
      query ImageQuery {
        alf: file(relativePath: { eq: "Alf.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        },       
         alexa: file(relativePath: { eq: "alexareact.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          website: file(relativePath: { eq: "website.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
    `}
    render={data => (
      <div id="projects" style={{ marginTop: '10vh' }}>
        <div id="projectContainer" style={{ display: 'flex', alignItems: 'center' }}>
          <div id="projectText">
            <div id="projectTitle">
              <h2>Amsterdam Light Festival</h2>
            </div>
            <div id="projectDescription">
              {' '}
              <h3 style={{  minWidth: '20vw', marginRight: '2em', lineHeight: "1.4" }}>
                Voor het Amsterdam Light Festival heb ik meegewerkt aan een kunstwerk die op dit moment nog op het
                meester vissersplein staat in Amsterdam. Hierbij heb ik samen met een andere developer en een groep
                kunstenaars aan dit kunstwerk gewerkt.
              </h3>
              <h4>
                <b>Tech Stack:</b> Raspberry Pi, Java / Processing{' '}
              </h4>
              <h4>
                <b>Team: </b> Drie kunstenaars en één developer
              </h4>
              <h4>
                <b>Rol: </b> Developer & ontwerper
              </h4>
            </div>
          </div>
        <Media query="(min-width: 599px)"
            render={() => 
                <div id="projectPhotos" style={{ minWidth: '50vw' }}>
                    <Img fluid={data.alf.childImageSharp.fluid} />
                </div> 
            }/>
        </div>

        <div id="projectContainer" style={{ display: 'flex', alignItems: 'center' }}>
          <div id="projectText">
            <div id="projectTitle">
              <h2>Inverse Kinematica</h2>
            </div>
            <div id="projectDescription">
              {' '}
              <h3 style={{  minWidth: '20vw', marginRight: '2em', lineHeight: "1.4" }}>
                Een klein projectje, waarbij het de bedoeling is om een robotarm te simuleren. Je kan overal in het
                scherm klikken en de robotarm zal proberen naar de geklikte locatie toe te gaan. De algoritme die
                toegepast wordt, is CCD (Cyclic Coordinate Descent) Als een demo, kan je op de volgende link drukken, of
                bekijk het op mijn github!
              </h3>
              <h4 style={{lineHeight: "1.4" }}>
                <b>Tech Stack:</b> C++, Qt/ Qt Creator{' '}
              </h4>
              <h4 style={{ lineHeight: "1.4"}}>
                <b>Team: </b> Alleen ik
              </h4>
              <h4 style={{ lineHeight: "1.4"}}>
                <b>Rol: </b> Developer
              </h4>
            </div>
            <a href="https://github.com/FranzFernandes/InverseKinematicsQt" id="button"><FaGithub /> Bekijk het op Github</a>
          </div>
          <Media query="(min-width: 1100px)"
          render={() => 
            <div id="projectPhotos" style={{minWidth: '50vw'}}>
            <Youtube 
                videoId="KuxVx_k5m1g"
            />
          </div>
          }/>

        </div>
        <div id="projectContainer" style={{ display: 'flex', alignItems: 'center' }}>
          <div id="projectText">
            <div id="projectTitle">
              <h2>Webstrip</h2>
            </div>
            <div id="projectDescription">
              {' '}
              <h3 style={{ minWidth: '20vw', marginRight: '2em',  lineHeight: "1.4" }}>
                Een applicatie die aan de hand van een website of IFTTT een ledstrip aan kan zetten of van kleur te
                laten veranderen. Het was mijn eerste project in React, dus het is niet mijn mooiste werk. Dit werkje
                inspireerde me wel om meer tijd in React en Frontend development te stoppen.
              </h3>
              <h4>
                <b>Tech Stack:</b> React.js, ExpressJS, SCSS, Heroku, MongoDB{' '}
              </h4>
              <h4>
                <b>Team: </b> Alleen ik
              </h4>
              <h4>
                <b>Rol: </b> Developer
              </h4>
            </div>
            <a href="https://github.com/FranzFernandes/alexa-react" id="button"><FaGithub /> Bekijk het op Github</a>
          </div>

          <Media query="(min-width: 599px)"
          render={() => 
              <div id="projectPhotos" style={{ minWidth: '50vw' }}>
                  <Img fluid={data.alexa.childImageSharp.fluid} />
              </div> 
          }/>
        </div>

        <div id="projectContainer" style={{ display: 'flex', alignItems: 'center' }}>
          <div id="projectText">
            <div id="projectTitle">
              <h2>Deze website!</h2>
            </div>
            <div id="projectDescription">
              {' '}
              <h3 style={{  minWidth: '20vw', marginRight: '2em', lineHeight: "1.4" }}>
                Een website om mijn portfolio te laten zien. Hierbij wat nieuwe dingen toegepast, zoals het hosten op
                Surge en toepassen van Gatsby. Ik wilde ervoor zorgen dat de pagina zo minimaal en simpel mogelijk is.
              </h3>
              <h4>
                <b>Tech Stack:</b> React.js, Gatsby, Surge, GraphQl{' '}
              </h4>
              <h4>
                <b>Team: </b> Alleen ik
              </h4>
              <h4>
                <b>Rol: </b> Developer
              </h4>
            </div>
            <a href="https://github.com/FranzFernandes/portfolioReact" id="button"><FaGithub /> Bekijk het op Github</a>
          </div>

          <Media query="(min-width: 599px)"
          render={() => 
              <div id="projectPhotos" style={{ minWidth: '50vw' }}>
                  <Img fluid={data.website.childImageSharp.fluid} />
              </div> 
          }/>
        </div>
      </div>
    )}
  />
);

export default Main;
