import React, { Component } from 'react'

class Cartcolumn extends Component {
    render() {
        return (
            <div className="container d-none d-lg-block">
                <div className="row text-center"  >

                                <div className="co-xl-2 col-sm-2 col-lg-2 col-md-2">
                                <h4 style={{marginTop:"3%"}} >Product</h4>

                                </div>
                                <div className="co-xl-2 col-sm-2 col-lg-2 col-md-2">
                                <h4 style={{marginTop:"3%"}} >Name: </h4>

                                </div>

                                <div className="co-xl-2 col-sm-2 col-lg-2 col-md-2">
                                <h4 style={{marginTop:"3%"}} >Price</h4>

                                </div>
                                <div className="co-xl-2 col-sm-2 col-lg-2 col-md-2">
                                <h4 style={{marginTop:"3%"}} >Quantity</h4>

                                </div>
                                <div className="co-xl-2 col-sm-2 col-lg-2 col-md-2">
                                <h4 style={{marginTop:"3%"}} >Remove</h4>

                                </div>
                                <div className="co-xl-2 col-sm-2 col-lg-2 col-md-2">
                                <h4 style={{marginTop:"3%"}} >Total</h4>

                                </div>
                                

                                </div>
                
            </div>
        )
    }
}
export default Cartcolumn