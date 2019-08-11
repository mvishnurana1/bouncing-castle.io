import React, { Component } from 'react'; 
import './Contactus.css'; 

class Contactus extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "", 
            lastName: "", 
            emailID: "", 
            phoneNumber:"", 
            query:""
        };  
        this.handleChange = this.handleChange.bind(this); 
    }

    handleChange = (evt) =>{
        this.setState({username: evt.target.value})
    }

    handleLastName = (evt) => {
        this.setState({lastName: evt.target.value}); 
    }

    handleEmailID = (evt) => {
        this.setState({emailID: evt.target.value}); 
    }

    handleQuery = (evt) => {
        this.setState({query: evt.target.value}); 
    }

    render() {
        return (
        <div className="contact-form label App">
            <h1>Please contact Us</h1>
          <form action="https://formspree.io/mvishnurana@gmail.com" method="POST">
            <div className="row">
                <div className="six columns">
                    <label htmlFor="firstName"> First Name </label>
                    <input 
                        className="u-full-width" 
                        type="text" 
                        placeholder="John"
                        name="name"
                        >
                    </input>
                </div>

                <div className="six columns">
                    <label htmlFor="lastName"> Last Name </label>
                    <input 
                        className="u-full-width" 
                        type="text" 
                        placeholder="Doe"
                        name="lastName"
                        >
                    </input>
                </div>
            </div>

            <div className="row">
                <div className="six columns">
                    <label htmlFor="email Address"> Email Address </label>
                    <input 
                        className="u-full-width" 
                        type="text" 
                        placeholder="JohnDoe@gmail.com"
                        name="replyto"
                        >
                    </input>
                </div>

                <div className="six columns">
                    <label htmlFor="lastName" name="reason for contact"> Reason for contacting </label>
                    <select className="u-full-width">
                        <option value="General-query">General inquiry</option>
                        <option value="custom-order">Custom Order</option>
                        <option value="time-waster">Time waster</option>
                    </select>
                </div>

                <label htmlFor="message"> Message </label>
                <textarea 
                    className="u-full-width"
                    placeholder="Please write your message here"
                    name="message"
                    >
                </textarea>

                <label htmlFor="Send a copy to yourself">
                    <input type="checkbox" />
                    <span className="#"> Send a copy to yourself </span>
                </label>

                <button 
                    className="button-primary"
                    value="submit"
                    type="submit">
                    Contact Us
                </button>
            </div>
          </form>
        </div>
        )
    }
}

export default Contactus; 