import React, { Component } from 'react'
import './productcard.css'
import {ProductConsumer} from './Contaxt';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
class Productcard extends Component {
    render() {

        return (


        <ProductConsumer>
            
            {(value)=>(
            
            <Link  to="/detail">
            <div  onClick={
                    ()=>{
               console.log( value.handleproduct(this.props.itempass.id))}}    >                        
               
                    <div  >
                <img alt="picture"              
                 className="cardimg"  src={this.props.itempass.img} />
            
            </div>
    <Button  style={{width:"100%",marginTop:"3%",textAlign:"center"}} onClick={
        ()=>{console.log(value.addcart(this.props.itempass.id)),
              console.log(value.modal(this.props.itempass.id,"modall"))
        
    }}
    
    disabled={this.props.itempass.incart?true:false}>{this.props.itempass.incart?"in cart":<FontAwesomeIcon icon={faShoppingCart}/>}</Button>
 
            </div></Link>)}
            </ProductConsumer>
      )
                }
            }
    
export default Productcard























