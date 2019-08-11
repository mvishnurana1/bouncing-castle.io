import React, { Component } from 'react'
import './Footer.css'; 

export default 
class Footer extends Component{
    render(){
        return(
            <div className="Footer">
                    <h2>All Copyrights reserved 2019 &#169;</h2>
                    <p> ABN Number : 25358964203 </p>
                    <p> Phone Number: (08)-2562012 / 0420344226</p>
                    <p>Address : 34 Kings Avenue, Victoria Park, Western Australia, 6100</p>                
                <div className="text-footer">    
                    <a href="https://www.facebook.com/" 
                        target="_blank"
                        className="fa fa-facebook">
                    </a>

                    <a href="https://twitter.com/?lang=en" 
                        target="_blank"
                        className="fa fa-twitter">
                    </a>

                    <a href="https://www.instagram.com/accounts/login/?hl=en" 
                        target="_blank"
                        className="fa fa-instagram">
                    </a>
                </div>
            </div>
        )
    }
}