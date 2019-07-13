import React from 'react';
import axios from 'axios';

const makeRequest = () => {
  axios
    .get(
      "https://fantasysports.yahooapis.com/fantasy/v2/users;use_login=1/games;game_keys=nfl/teams"
    )
    .then(r => {
      console.log("r", r);
    });
};

const Index = () => {
  return (
    <div>
      <p>Hello Next.js</p>
    </div>
  );
};

export default Index;
