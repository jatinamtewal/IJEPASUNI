import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
       <div className="main">
            <div>
                <h2>Indexing</h2>
                <p>Google Scholar,DRJI,SIS,Research Gate, Index Copernicus,...etc</p>
            </div>
            <div>
                <h2>Ouick Links</h2>
                <Link to="/archive">Archive</Link>
                <Link to="/apply-for-referee">Apply for Referee</Link>
                <Link to="/contact">Feedback</Link>
                <Link to="/publication-charges">Publication Charges</Link>
                <Link to="/">Copyright Form</Link>
            </div>
            <div>
                <h2>Contact Us</h2>
                <Link to="/contact">editorijepas@gmail.com</Link>
                <Link to="/contact">Google Maps</Link>
            </div>
        </div> 
        <div className='lowerFooter'>
          <div>
            <p>© 2023 IJEPAS info@ijepas.com, help@ijepas.com. All Rights Reserved.</p>
            <Link to="/">Top</Link>
          </div>
          <div>
              <p>Follow our services</p>
              <Link to="/">facebook</Link>
              <Link to="/">facebook</Link>
              <Link to="/">facebook</Link>
              <Link to="/">facebook</Link>
          </div>
        </div>
    </div>
  )
}

export default Footer