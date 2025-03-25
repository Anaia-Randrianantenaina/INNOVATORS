import React from 'react';
import NavBar from './NavBar';
import Menu from '../menu/Menu';

const Navigation = () => {
  return (
    <div className='bg-gray-100 w-[250px] h-screen flex flex-col relative'> 
      <NavBar />
      <Menu />
    </div>
  );
}

export default Navigation;
