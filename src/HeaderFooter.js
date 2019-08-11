import React, { Component } from 'react'; 
import  MojoJoJo from './images/mojo-jojo-villain.png'; 
import './HeaderFooter.css';

class Headerfooter extends Component{
    render() {
        //const Tag = `h${this.props.priority}`; 
        return(
            <div className="animated slideInDown">
                <div className="Header">
                    <img src={MojoJoJo} alt="Mojo-Img" />
                    <h1 className="animated slideInLeft"> {this.props.text} </h1>
                    <h2 className="animated slideInRight"> {this.props.about}</h2>
                </div>
            </div>
        )
    }
}

export default Headerfooter; 