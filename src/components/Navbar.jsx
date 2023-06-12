import { useState, useEffect, useRef } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [toggleOpen,setToggle] = useState(false);
  const refNav= useRef();
  useEffect(() => {
    const handler = (event) => {
      if ( toggleOpen && !refNav.current.contains(event.target))
      {
        setToggle(false);
      }
    } 
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    }
  },[toggleOpen]);
  return (
    <nav className="navbar" ref={refNav}>
      <button className="toggle" onClick={() => (setToggle(!toggleOpen)) }>
        {
          toggleOpen ? <MdClose /> : <FiMenu />
        }
      </button>
      <ul
        className={`menu-nav${toggleOpen ? ' show-menu' : ''}`}
      >
        <li onClick={() => setToggle(false)}>
          Home
        </li>
        <li onClick={() => setToggle(false)}>
          About
        </li>
        <li onClick={() => setToggle(false)}>
          Contact
        </li>
      </ul>
    </nav>
  );  
}

export default Navbar;