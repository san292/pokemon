import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from './linkItems';
import styled from 'styled-components';

const Header = () => {
  return (
    <>
      <Wrapper>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">Logo</Link>
          </div>
          <ul className="nav-links">
            {navItems.map((navLink, idx) => {
              const { name, path } = navLink;
              return (
                <li key={idx}>
                  <Link to={path}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  height: 5rem;
  background-color: blue;
  width: 100%;
  .nav-center {
    flex: 1;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    background-color: #85929e;
  }
  .nav-header {
    flex: 1;
    color: white;
    align-self: center;
  }
  .nav-links {
    flex: 3;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
  }
`;

export default Header;
