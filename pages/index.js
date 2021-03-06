import React, {useEffect} from 'react';
import axios from 'axios';

const config = {
  app_id:"1axqyK6k",
  client_id:"dj0yJmk9MTZOd01CZGpHZzJRJmQ9WVdrOU1XRjRjWGxMTm1zbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWEw",
  client_secret:"b71a20e0637029c71762e9b475dbeb86f387f34f",
  redirect_uri:"https%3A%2F%2Fblahffblah.herokuapp.com",
  code:"5eq8qv8"
}

// const getAuthorization = () => {
//   const {app_id, client_id, client_secret} = config;
//   return (
//     axios
//       .put(
//         `https://api.login.yahoo.com/oauth2/request_auth?client_id=${client_id}&redirect_uri=oob&response_type=code&language=en-us`
//       , { headers: {"Access-Control-Allow-Origin": "*"}})
//       .then(r => {
//         console.log("should have a code", r);
//         return r;
//       })
//   )
// }

const getToken = (r) => {
  const {app_id, client_id, client_secret, code, redirect_uri} = config;

  return (
    axios.post(`https://api.login.yahoo.com/oauth2/get_token?grant_type=authorization_code&client_secret=${client_secret}&redirect_uri=${redirect_uri}&code=${code}`)
  )
}

const makeRequest = () => {
  getToken().then(r => console.log("response", r));
};

const Index = () => {
  useEffect(makeRequest);
  return (
    <div>
      <p>Hello Next.js</p>
    </div>
  );
};

export default Index;
