import React, { Component } from 'react'
import {ProductConsumer} from './Contaxt';

class Calculation extends Component {
    render() {
        return (
           <ProductConsumer>
               {
                   (value)=>{
                       
                   }
               }
           </ProductConsumer>
        )
    }
}
export default Calculation