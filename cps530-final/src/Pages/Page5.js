import React, { Component } from 'react';


export class Page5 extends Component {
    render() {
        return (
            <div style={{marginTop:"30px", marginLeft:"30px", color:"white", }}>
                <h3 style={{textDecoration:"underline"}}>  
                    Final Words:
                </h3>
                <br/>
                <h3>React</h3>
                <ul>
                    Using React for the frontend of this project allowed for me to learn how the framework works. The hard part about using React is having to brush up on your Javascirpt skills. 
                </ul>
                <ul>
                    I am more familiar with backend technologies and languages therefore using Javascript as the main language for the frontend was a challenge. However, React was very easy to configure and get running. For me the learning curve was not very steap.
                </ul>
   
                <ul>
                    Performance wise React is very efficient and this aids in the development process as changes to the design of the uI can be implemented without too much technical debt.
                </ul>
   
                <br/>
                <h3>Spring Boot</h3>
                <ul>
                    Using Spring Boot for the backend of this project allowed for me to learn how the framework works. I have been developing using Java for 2-3 years so it was very straightforward getting started. 
                </ul>
   
                <ul>
                    I believe for this project there was no absolute need for using a backend framework. Most of the tasks required could have been done using a frontend framework, therefore I felt like the backend was underused. Even then I found it very useful to build a REST API and have the frontend consume it.
                </ul>


            </div>
        )
    }
}

export default Page5