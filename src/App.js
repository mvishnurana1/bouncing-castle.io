import React from 'react';
import HeaderFooter from './HeaderFooter'; 
import DocumentBody from './DocumentBody'; 
import Contactus from './Contactus'; 
import Offercard from './Offercard'; 
import Footer from './Footer'; 
import './Footer.css'; 
import Value from './images/value.jpg'; 
import midRange from './images/mid-range.jpg'; 
import premium from './images/premium.jpg'; 
import './DocumentBody.css'; 
import './HeaderFooter.css'; 
import './Contactus.css'; 

function App() {
  return (
    <div>
      <HeaderFooter
        Tag = "p"
        text="Jo Jo Bouncy Castles"
        about="We're a part of your celebration!"
      />

      <DocumentBody/>

        <Offercard 
          title="One day/night"
          img = {Value}
          desc = "this is the value text description of the image."
          price="$50"
        />

        <Offercard 
          title="Value pack"
          img = {midRange}
          desc = "this is a value pack!"
          price="$100"
        />

        <Offercard 
          title="Premium"
          img = {premium}
          desc = "this is a premium pack."
          price="$195"
        />

        <Contactus />

        <Footer />

    </div>
  );
}

export default App;
