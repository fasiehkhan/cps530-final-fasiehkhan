import React, { useState, useEffect, Component, Fragment } from 'react';
import reactpage1 from '../react-page1.jpg';
import SpringIntro from '../SpringIntro.jpg';
class Page1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }
    
    componentDidMount() {
        fetch('http://localhost:8080/pageone')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded)
        {
            return <div>Loading...</div>
        }
        else{
        
        return (
            <div style={{color:"white", marginTop:"50px", marginLeft:"50px", marginRight:"50px"}}> 
            <h2>
                What is React?
            </h2>
            {items.map(item => (
                    <div>{item.pageData}</div>
                ))};
                <img src={reactpage1} style={{marginTop:"20px"}}/>
            <br/>
            <h3>
                Strengths of React
            </h3>
                <li>React is easy to learn and use as there is a plethora of documentation and resources.</li>
                <li>Reusable components are another strength of React, as you develop components for your app you can save time by resusing those compoents in other parts of the app.</li>
                <li>React improves performance due to virtual DOM. When the DOM was updated it slowed down the performance of the application. React solved this problem by introducing virtual DOM.</li>
                <br/>
            <h3>
                Weaknesses of React
            </h3>
                <li>React is constantly changing and this means React developers need to be comfortable relearning concepts every few months.</li>
                <li>ReactJS Covers only the UI Layers of the app and nothing else, therefore you need a server side framework to build a complete app.</li>
            <br/>
            <br/>
            <h2>
                What is Spring Boot?

            </h2>
            <div>
             Spring Boot is a tool that makes developing web application and microservices with Spring Framework faster and easier through three core capabilities: Autoconfiguration, An opinionated approach to configuration, The ability to create standalone applications.
            </div>
            <img src={SpringIntro} style={{marginTop:"20px", height:"400px", width:"1200px"}}/>
            <br/>
            <br/>
            <h3>
                Strengths of Spring Boot
            </h3>
                <li>Reduces the time spent on development and increases the overall efficiency of the development team.</li>
                <li>Helps to autoconfigure all components for a production-grade Spring app.</li>
                <li>Comes with embedded HTTP servers like Jetty and Tomcat to test web applications.</li>
                <br/>
            <h3>
                Weaknesses of Spring Boot
            </h3>
                <li>You really have to understand a lot of the underlying Spring systems.</li>
                <li>If you are not familiar with other projects of the Spring ecosystem like Spring Security, Spring AMQP, Spring Integration, etc), using them with Spring Boot will make you miss many concepts that you would grasp if you had started using them independently.</li>
            <br/>
            <br/>
            </div>
          
        );
        }
    }
}


export default Page1;
