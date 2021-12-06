import React, { Component } from 'react'
import heroku1 from '../heroku1.jpg';
import heroku2 from '../heroku2.jpg';
import heroku3 from '../heroku3.jpg';
import heroku4 from '../heroku4.jpg';

export class Page2 extends Component {
    render() {
        return (
            <div style={{color:"white", marginTop:"50px", marginLeft:"50px", marginRight:"50px"}}> 
                <h3>How to deploy Spring Boot application to Heroku:</h3>
                <h6>(This tutorial will assume you have already developed your Spring Boot application)</h6>
                <br/>
                <h5>Log in to Heroku. You can skip this step if it was done previously:</h5>
                <img src={heroku1}/>
                <br/>
                <h5>Then, create a new app</h5>
                <img src={heroku2}/>
                <br/>
                <h5>Then commit your changes:</h5>
                <img src={heroku3}/>
                <br/>
                <h5>Then, deploy to Heroku:</h5>
                <img src={heroku4}/>
                <br/>
                <h5>Heroku will build from source once your code is pushed.</h5>
            </div>
        )
    }
}

export default Page2
