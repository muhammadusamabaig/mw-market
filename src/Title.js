import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



class Title extends Component {
    render() {
        return (
            <div className="container text-center" style={{backgroundColor:"rgb(7, 96, 237)",marginTop:"2%",color:"white",fontFamily: "Oswald, sans-serif"}}>
                <div className="row" >
                    <div className="col-sm-12">
    <h1 >{this.props.head1} {this.props.head2}</h1>
    </div>
    </div>
            </div>  
        )
    }
}


export default Title