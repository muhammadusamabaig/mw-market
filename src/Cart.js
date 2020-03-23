import React, { Component } from 'react'
import Title from './Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart,faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import {ProductConsumer} from './Contaxt';
import Cartcolumn from './Cartcolumn'
import Cartstructure from './Cartstructure'

class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
               
                {
                    (value)=>{
                        if (value.cart.length>=1) {
                            

                        return(
                            <div >

                               <Title head1={"your"} head2={"Cart"}/>                                    <Cartcolumn/>

                                {
                        value.cart.map(
                            (item)=>{
                                console.log(item)
                                return(

                                    <div key={item.id} className="container">
                                    <div  className="row text-center"  >






























                                    <img src={item.img} className=" img-fluid col-10 col-lg-2"/>
                                <h4 style={{marginTop:"3%"}} className="col-10 col-lg-2"><span className="d-lg-none">name :</span>{item.title}</h4>
                                <h4  style={{marginTop:"3%"}} className=" col-10 col-lg-2">
                                    <span className="d-lg-none ">Price :</span>{item.price}</h4>
                       <div  className="col-10 col-lg-2">
                                <button onClick={()=>{
                                    console.log(value.cartcalincre(item.id), console.log(value.gtotal()))
                                }} style={{height:"50px",background:"transparent",border:"2px  solid"}}>+</button><span style={{fontSize:"200%",marginTop:"70%"}}>{item.count}</span>
                       
                       <button onClick={()=>{
                                    console.log(value.cartcaldecrem(item.id), console.log(value.gtotal()))
                                }}  style={{height:"50px",background:"transparent",border:"2px  solid"}}>-</button>

                       </div>
                           
                       <FontAwesomeIcon className="col-10 col-lg-2" icon={faTrashAlt} onClick={()=>{console.log(value.delproduct(item.id)),console.log(value.cartdelettotupdate(item.id))}}
                              
                     style={{height:"50px",background:"transparent"}}/>

                                <h4  style={{marginTop:"3%"}} className="col-10 col-lg-2">{item.total}</h4>
















                                        
                           </div>
                           </div>
                        


                                )
                                }
                      )}
                      
                    }
                    <div className="row text-right" style={{border:"2px solid" ,backgroundColor:"rgb(7, 96, 237)"}}>
                        
                    <h1 className="col-11" style={{fontWeight:"bold",color:"white"}}>Total Bill:{value.total}</h1> 
                    </div>
                  </div> 
                    )  
                }

                else{
                    return(
                        <Title head1={"Cart"} head2={"is Empty"} />
                    )
                }    
                    }
                }
            </ProductConsumer>


        )
    }
}
export default Cart