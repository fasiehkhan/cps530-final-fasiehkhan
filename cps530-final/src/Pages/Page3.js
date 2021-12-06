import React, { Component } from 'react';
import Tutorial1 from '../Tutorial1.jpg'
import Tutorial2 from '../Tutorial2.jpg'
import SpringImage from '../SpringImage.jpg'

export class Page3 extends Component {
    render() {
        return (
            <div style={{marginTop:"30px", marginLeft:"30px", color:"white", }}>
                <h4 style={{textDecoration:"underline"}}>  
                    How to create a React web page:
                </h4>
                <ul><h5>The web page we will be designing will display to the user pictures of the best boxers of all time.</h5></ul>
                <ul><h5>To start we will create a class "Page4" which extends the Component super class. This will allow us to use functions from the Component class.</h5></ul>
                <img src={Tutorial1}/>
                <br/>
                <br/>
                <ul><h5>We can make use of the img tag to incorporate pictures of the boxers.</h5></ul>
                <img src={Tutorial2}/>
                <ul><h5>So far we have discussed the front end and UI, we can utilize the Spring Boot framework as well.</h5></ul>
                <ul><h5>We can create a REST API using Spring Boot and then connect the front end to the API. This way we can fetch different data items from the API.</h5></ul>
                <img src={SpringImage} style={{height:"500px", width:"1200px"}}/>
                <br/>
                <br/>
                <ul><h5>The demo of this tutorial can be seen by navigating to Page4 from the nav bar.</h5></ul>



            </div>
        )
    }
}

export default Page3