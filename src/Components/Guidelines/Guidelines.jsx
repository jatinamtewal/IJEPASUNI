import React from 'react';
import "./Guidelines.css";
import { Link } from 'react-router-dom';

const Guidelines = () => {
  return (
    <div className='guidelinesContainer'>
        <h2 className='heading'>Author Guidelines</h2>
        <h4><Link className="link" to="/"> IJEPAS </Link>&gt;  Author Guidelines</h4>
        <h3>Paper Submission</h3>
          <h4>Submission Preparation Checklist</h4> 
        <div>
          <p>As part of the submission process, authors are required to check off their submission?™s compliance with all of the following items, and submissions may be returned to authors that do not adhere to these guidelines.</p>
          <ol>
              <li>Our guidelines aim to make authors submissions as easy as possible.</li>
              <li>The Paper should be typed in Times New Roman style, with font size 10.</li>
              <li>Single line spaces between lines and the 70 point margin on all sides.</li>
              <li>Headings (up to 3 levels) should be clearly marked and numbered (like 1, 1.1, 1.1.1).</li>
              <li>If there tables and diagrams included, these should be placed within the body of the paper near the text that refers to them.</li>
              <li>References should follow the American Psychological Association (APA) 5th edition style. For more information please visit: http://www.apastyle.org.</li>
              <li>The submission has not been previously published, nor is it before another journal for consideration.</li>
              <li>The submission file is in Microsoft Word/ PDF document file format.</li>
          </ol>
        </div>
        <Link to="/">Check here for IJEPAS Template</Link>
        <Link to="/">Check here for IJEPAS Template</Link>
        <p>All the Authors Have To Submit their Research Article / Paper Directly Email to editorijepas@gmail.com or From Submission Menu.</p>
        <h3>Publication Charges</h3>
        <div>
          <p><span>Manuscript Handling Charges :</span><span>150 USD </span>International Authors / 8500 Rs Indian Authors and Special concession for Research Scholars in Publication fee . (Fast processing fee 50 USD/Rs 2000 extra from Publication Fee)</p>
          <p><span>If author wants to hard copy of Journal, they required to pay extra charges : 25 USD/1000 Rs.</span></p>
          <p><span>Certification Charges: 500Rs/10USD</span></p>
          <p>Above fees includes all review, publication and indexing charges. There are no any other hidden extra charges.</p>
          <p>Author can deposit its publication fee directly by near PNB bank branch or by Net Banking in the below account:</p>

          <p><span>Beneficiary Account Name:</span>Ashish Kumar Sharma</p>
          <p><span>Beneficiary Account No.:</span> 6791000100039202</p>
          <p><span>Bank Name:</span>Punjab National Bank</p>
          <p><span>Branch:</span>Sunder Bani (J&K), INDIA</p>
          <p><span>IFSC Code:</span>PUNB0679100 (5TH CHARACTER IS ZERO)</p>
          <p><span>Account Type:</span>SAVING</p>
          <p><span>MICR Code:</span>185024002</p>
        </div>
    </div>
  )
}

export default Guidelines