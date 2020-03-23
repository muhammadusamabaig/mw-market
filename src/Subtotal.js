import React, { Component } from 'react'
import {ProductConsumer} from './Contaxt';

 class Subtotal extends Component {
    render() {
        return (
            <ProductConsumer>
           {
               (value)=>{
                <div className="container">
                <div className="row">

                {
                    value.cart.map((item)=>{
                        let gtotal=+item.total
                        this.setState({
                            
                        })
                        return(
                            <button></button>
                        )
                    })
                }



                
                </div>
            </div>
               }
           }
            </ProductConsumer>
        )
    }
}
export default Subtotal