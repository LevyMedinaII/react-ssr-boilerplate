import React from 'react';
import './FourOhFourPage.css';

const shittyQuotes = [
  <p>
    Two routes diverged in a yellow wood, and I—
    <br />
    I took the one less travelled by.
  </p>,
  <p>
    These are not the routes you are looking for.
    <br />
    *Jedi mind tricks*
  </p>,
  <p>
    Dread it. Run from it. Destiny still arrives.
    <br />
    <small>***Destiny = Some person accessing a missing page***</small>
  </p>,
  <p>
    What do we say to the Lord of <del>Death</del> Non-existent Pages?
    <br />
    <br />
    Not today.
  </p>,
];

const getShittyQuote = () => (
  shittyQuotes[Math.floor(
    Math.random()*shittyQuotes.length
  )]
);

const FourOhFourPage = () => (
  <div className="four-oh-four-page">
    <div className="is-40">
      <h1> 404: Page not found </h1>
      <blockquote>
        { getShittyQuote() }
        <p>— Sir Ver</p>
      </blockquote>
    </div>
  </div>
);

export default FourOhFourPage;