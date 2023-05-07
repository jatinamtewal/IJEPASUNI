import React from 'react';
import { Link } from 'react-router-dom';
import "./Contact.css";
const Contact = () => {
  return (
    <div className='contactContainer'>
        <h2 className='heading'>Contact</h2>
        <h4><Link className="link" to="/"> IJEPAS </Link>&gt; Contact</h4>
        <h3>Cheif-Editor:</h3>
        <div>
            <p>Prof. Subodh Kumar Sharma</p>
            <p>Adama Science and Technology University, Adama, Ethiopia.</p>
            <span>Email:- editorijepas@gmail.com, info@ijepas.com, help@ijepas.com</span>
        </div>
        <h3>Editor:</h3>
        <div>
            <p>Prof. Subodh Kumar Sharma</p>
            <p>VPO: Sunder Bani, Teh: Sunder Bani, Distt: Rajouri, J&K, 185153</p>
            <span>Email:- editorijepas@gmail.com, info@ijepas.com, help@ijepas.com</span>
        </div>

    </div>

  )
}

export default Contact