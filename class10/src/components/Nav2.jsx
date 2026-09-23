import React from 'react';
import { useContext } from 'react';
import { PostDataContext } from '../context/ThemeContext';

const Nav2 = (props) => {
   const theme = useContext(PostDataContext)
  console.log(props);

  return (
    <>
      <h3 className="m-3">Home</h3>
      <h3 className="m-3">About Us</h3>
      <h3 className="m-3">Contact Us</h3>
      <h3 className="m-3">{props.theme}</h3>
      <h3 className="m-3">{theme[2]}</h3>
    </>
  );
};

export default Nav2;
