import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    // <div className='container'>
        <div className='header'>
            <div className="upper">
                <div>
                    <img src="https://ijepas.com/wp-content/themes/blue/images/IJEPAS-LOGO.png" alt="" />
                    <h3>INTERNATIONAL JOURNAL OF ENGINEERING,
                    PURE AND APPLIED SCIENCES </h3>
                </div>
                <div>
                    <div>
                        <Link to="/news">News</Link> |
                        <Link to="/apply-for-referee">Apply for Referee</Link> |
                        <Link to="/contact">Contact Us</Link>
                    </div>
                    <div>
                        <p>ISSN NO.2456-3129</p>
                        <p>IF:0.267 (PEER REVIEWED AND REFERRED GENERAL)</p>
                    </div>
                </div>
            </div>
            <div className="lower">
                     <Link to='/'> Home</Link>
                     <Link to='/about'>About</Link>
                     <Link to='/scope'> Scope</Link>
                     <Link to='/editorialboard'> Editorial Board</Link>
                     <Link to='/author-guidelines'>Author Guidelines</Link>
                     <Link to='/current'> Current</Link>
                     <Link to='/archive'> Archive</Link>
                     <Link to='/submission'> Submission</Link>
                     <Link to='/contact'> Contact</Link>
            </div>
        </div>
    // </div>
  )
}

export default Header