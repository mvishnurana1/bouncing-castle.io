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

        <div className="offer-card-style">
          <Offercard 
            title="One day/night"
            img = {Value}
            desc = "The price is inclusive of the insurance. However, security charges may apply (refundable on return)."
            price="$50"
          />

          <Offercard 
            title="Lasts 3 days"
            img = {midRange}
            desc = "The price is inclusive of the insurance. However, security charges may apply (refundable on return)."
            price="$100"
          />

          <Offercard 
            title="Lasts a Week"
            img = {premium}
            desc = "The price is inclusive of the insurance. However, security charges may apply (refundable on return)."
            price="$195"
          />
        </div>

        <Contactus />

        <Footer />

    </div>
  );
}

export default App;
