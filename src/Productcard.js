import React, { Component } from 'react'
import './productcard.css'
import {ProductConsumer} from './Contaxt';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
class Productcard extends Component {
    render() {

// const {id,title,img,price,incart}=this.props.itempass
        return (


        <ProductConsumer>
            
            {(value)=>(
            
            <Link  to="/detail">
            <div  onClick={
                    ()=>{
               console.log( value.handleproduct(this.props.itempass.id))}}    >                        
               
                    <div  >
                <img               
                 className="cardimg"  src={this.props.itempass.img} />
            
            </div>
    <Button  style={{width:"100%",marginTop:"3%",textAlign:"center"}} onClick={
        ()=>{console.log(value.addcart(this.props.itempass.id)),
              console.log(value.modal(this.props.itempass.id,"modall"))
        
    }}
    
    disabled={this.props.itempass.incart?true:false}>{this.props.itempass.incart?"in cart":<FontAwesomeIcon icon={faShoppingCart}/>}</Button>
 <br/>    <p style={{fontFamily: 'italice',color:"black",fontSize:"150%"}} ><span style={{fontWeight:"bold"}}>Name: </span>{this.props.itempass.title}</p>
 <p style={{color:"black",fontSize:"160%",fontWeight:"bold  "}}><span >$</span>{this.props.itempass.price}</p>

            </div></Link>)}
            </ProductConsumer>
      )
                }
            }
    
export default Productcard























{/* {console.log(this.props.productscard,"usssssssssssssssssssssama")}
<div className="container">
    <div style={{marginTop:"2%",backgroundColor:"rgb(240, 231, 231)"}} className="row">
        
           
    {
        this.props.productscard.map( (item)=>{
            console.log(item.cart,"itemmmmmmmmmmmmmm")
            return(
                
            <div style={{overflow:"hidden",border:"2px solid",marginTop:"3%",backgroundColor:"white",marginLeft:"5%"}}  className="col-sm-6 col-lg-3 maincard">                        
                {console.log(item.img)}
                <Link to="/detail">
                    <div  >
                <img className="cardimg"  src={item.img} />
            
            </div></Link>
<button style={{marginLeft:"90%"}} ><FontAwesomeIcon icon={faShoppingCart}/></button>
 <br/>       <p style={{display:"inline",fontFamily: 'Lacquer',fontSize:"203%"}} >{item.title}</p><span style={{marginLeft:"64%"}}>{item.price}$</span>

            </div>)
        })
    }
    
            

    

    </div>
   
</div> */}{/* {console.log(this.props.productscard,"usssssssssssssssssssssama")}
<div className="container">
    <div style={{marginTop:"2%",backgroundColor:"rgb(240, 231, 231)"}} className="row">
        
           
    {
        this.props.productscard.map( (item)=>{
            console.log(item.cart,"itemmmmmmmmmmmmmm")
            return(
                
            <div style={{overflow:"hidden",border:"2px solid",marginTop:"3%",backgroundColor:"white",marginLeft:"5%"}}  className="col-sm-6 col-lg-3 maincard">                        
                {console.log(item.img)}
                <Link to="/detail">
                    <div  >
                <img className="cardimg"  src={item.img} />
            
            </div></Link>
<button style={{marginLeft:"90%"}} ><FontAwesomeIcon icon={faShoppingCart}/></button>
 <br/>       <p style={{display:"inline",fontFamily: 'Lacquer',fontSize:"203%"}} >{item.title}</p><span style={{marginLeft:"64%"}}>{item.price}$</span>

            </div>)
        })
    }
    
            

    

    </div>
   
</div> */}