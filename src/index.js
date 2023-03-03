import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Helmet } from 'react-helmet'
import CV from './CV'
import Nav from './Nav';
import Home from './Home';
import Certificates from './Certificates';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Helmet>
      <title>Andrea Sestito</title>
    </Helmet>
    <React.Fragment>
    <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/maxdefinition" element={<Home />} />
          <Route path="/maxdefinition/cv" element={<CV />} />
          <Route path="/maxdefinition/certificates" element={<Certificates />} />

        </Routes>
      </BrowserRouter>
    </React.Fragment>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
