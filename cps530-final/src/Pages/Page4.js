import React, { Component } from 'react'
import MikeTyson from '../MikeTyson.jpg';
import MAli from '../MAli.jpg'
import FM from '../FM.jpg'

export class Page3 extends Component {
    render() {
        return (
            <div style={{backgroundColor:"beige"}}>
                <div style={{textAlign:"center", marginTop:"30px", fontFamily:"monospace"}}>
                <h1>The Best Boxers Of All Time</h1>
                <div style={{padding:"26px"}}>
                    
                <img src={MikeTyson} style={{height:"400px", width:"400px"}}/>
                <h4>Mike Tyson</h4>

                <img src={MAli} style={{height:"400px", width:"400px"}}/>
                <h4>Muhammad Ali</h4>

                <img src={FM} style={{height:"400px", width:"400px"}}/>
                <h4>Floyd Mayweather</h4>

                </div>
                </div>
            </div>
        )
    }
}

export default Page3