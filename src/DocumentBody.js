import React, { Component } from 'react'; 
import './DocumentBody.css'; 


class Document extends Component {
    render() {
        const cls = this.props.className;  
        return (
            <div className="animated fadeInUp Document">
                <h2>
                    Bouncy Castles in Perth
                </h2>

                <h3>
                    Hours of fun for kids and the young at heart, complement your party with 
                    Perth’s best bouncy castles
                </h3>

                <p>
                    At the Big Bounce, we specialise in jumping castle hire across Perth. 
                    Whether it’s for kids birthday parties, school carnivals or a community 
                    event, you can rest assured that our entire range of bouncy castle are 
                    of commercial grade and Australian standard – we put your safety first!

                    Available for all day bookings at budget-friendly prices, a bouncy castle 
                    will put the life back in any party. All you need to do is choose a time 
                    for us to drop it off and pick it up and simply wait for confirmation – it’s 
                    that easy! Perfect as surprise for your child’s event, we’ve even got inflatable 
                    water slides for hire, a guaranteed refreshing winner during those hot summer 
                    months in Perth.
                    
                    From pink princess through to Spiderman and Teenage Mutant Ninja Turtles, 
                    the Big Bounce has bouncy castle to suit any party theme. We can even provide 
                    supervision while the kids are busy bouncing around, ensuring utmost safety and caution.
                    
                    Earn some parenting brownie points and book a bouncy castle for your
                    child’s next party in Perth – contact us on 0450 259 023 for more 
                    information today!
                </p>

                <h2>
                    Providing the best range of bouncy castles for kids across Perth
                </h2>
            </div>
        )
    }
}

export default Document; 