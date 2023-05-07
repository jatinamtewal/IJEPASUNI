import React from 'react';
import { Link } from 'react-router-dom';
import "./Charges.css";

const Charges = () => {
  return (
    <div className='chargesContainer'>
      <h2 className='heading'>Publication Charges</h2>
      <h4><Link className='link' to="/"> IJEPAS </Link>&gt; Publication Charges</h4>
      <h3>Publication Charges</h3>
      <div>
        <p><span>Manuscript Handling Charges :</span><span>150 USD </span>International Authors / 8500 Rs Indian Authors and Special concession for Research Scholars in Publication fee . (Fast processing fee 50 USD/Rs 2000 extra from Publication Fee)</p>
        <p><span>If author wants to hard copy of Journal, they required to pay extra charges : 25 USD/1000 Rs.</span></p>
        <p><span>Certification Charges: 500Rs/10USD</span></p>
        <p>Above fees includes all review, publication and indexing charges. There are no any other hidden extra charges.</p>
      </div>  
    </div>
  )
}

export default Charges