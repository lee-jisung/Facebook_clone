import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
  const [state, dispatch] = useStateValue();

  // google login을 위한 popup 창이 나오고
  // login 결과로 result를 받아서
  // dispatch를 통해서 actionType과 user에 result.user를 넣고 reducer를 실행시킴
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        dispatch({ type: actionTypes.SET_USER, user: result.user });
      })
      .catch(error => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>

      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
