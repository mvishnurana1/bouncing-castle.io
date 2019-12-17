import React, { Component } from 'react'; 
import './Offercard.css'; 

class Offercard extends Component{
    render() {
        return(
            <div className="Offercards">
                <div className="Offercard">
                    <h1>{this.props.title}</h1>
                    <img className="animated flipInY cardImg" src={this.props.img} alt="Bouncy-castle-img"/>
                    <div className="animated flipInX description"> {this.props.desc}</div>
                    <div className="animated flipInY Offercard-data">Price: { this.props.price } </div>
                </div>            
            </div>
        ); 
    }
}
export default Offercard; 