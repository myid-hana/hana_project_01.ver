import React from 'react';
import Button from './Button';
import './Header.scss';

export default function Header({ ...rest }) {
  return (
    <>
      <div className="Header">
        <div className="container">
          <div className="logo_box">logo</div>
          <div className="login_box">
            <span className="user_name">
              <b>박하나</b>님 환영합니다!
            </span>
            <Button>LOGIN</Button>
          </div>
        </div>
      </div>
    </>
  );
}
