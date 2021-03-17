import React from 'react';

import './navbar-styles.css';

interface Props {
  page: string;
  togglePage: (p: string) => void;
}

const Navbar: React.FC<Props> = (props) => {
  const togglePage = (p: string) => {
    props.togglePage(p);
  };

  return (
    <nav className='nav'>
      <div className='nav-item'>
        {props.page === 'video' && <div className='nav-casper'>VIDEO</div>}
        <div className='nav-title' onClick={() => togglePage('video')}>
          VIDEO GAMES
        </div>
      </div>
      <div className='nav-item'>
        {props.page === 'contact' && <div className='nav-casper'>Contact</div>}
        <div
          className='nav-title contact'
          onClick={() => togglePage('contact')}
        >
          CONTACT
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
