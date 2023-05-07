import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

import './App.css';
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Scope from "./Components/Scope/Scope.jsx";
import EditorialBoard from "./Components/EditorialBoard/EditorialBoard.jsx";
import Guidelines from "./Components/Guidelines/Guidelines.jsx";
import Current from "./Components/Current/Current.jsx"; 
import Archive from "./Components/Archive/Archive.jsx";
import Contact from "./Components/Contact/Contact.jsx"; 
import Submission from "./Components/Submission/Submission.jsx";
import Referee from "./Components/Referee/Referee.jsx";
import Charges from "./Components/Charges/Charges.jsx";
import News from "./Components/News/News.jsx";
function App() {
  return (
  <div className='container'>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/scope" element={<Scope/>}/>
        <Route path="/editorialboard" element={<EditorialBoard/>}/>
        <Route path="/author-guidelines" element={<Guidelines/>}/>
        <Route path="/current" element={<Current/>}/>
        <Route path="/archive" element={<Archive/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/submission" element={<Submission/>}/>
        <Route path="/apply-for-referee" element={<Referee/>}/>
        <Route path="/publication-charges" element={<Charges/>}/>
        <Route path="/news" element={<News/>}/>
      </Routes>
    <Footer/>
    </Router>
  </div>
  );
}    

export default App;
