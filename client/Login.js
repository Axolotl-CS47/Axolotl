import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

const LogIn = (props) => {
  // define state variable and dispatch methods
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // useEffect(() => {

  // })
  // handle submit request to create a new user profile
  // const onLogin = () => {

  //   console.log(username, password);
  //   // async fetch method to send post request to server @ api/ endpoint and parse response
  //   fetch('/api/loadMap')
  //     .then((response) => window.location.href = response.url)
  //     .catch(err => console.log(err));
  // };

  // html/react structure of elements on page with eventListeners as attributes
  return (
    <div className='SignInForm'>
      <h1> Oh, the Places You'll Go</h1>
      <br />
      <label>Username:</label>
      <br />
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <br />
      <label>Password:</label>
      <br />
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <div className='router'>
        <Link to={'./Map.js'} className='mapLink'>
          <button onClick={() => onLogin()}>LOG IN</button>
        </Link>
      </div>

    </div>
  );
};

export default LogIn;






//   return(
//     <div className="login-wrapper">
//       <h1>Please Log In</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <p>Username</p>
//           <input type="text" onChange={e => setUserName(e.target.value)} />
//         </label>
//         <label>
//           <p>Password</p>
//           <input type="password" onChange={e => setPassword(e.target.value)} />
//         </label>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   )