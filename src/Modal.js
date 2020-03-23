import React, { Component } from 'react'
import Modal from 'react-modal';
import { Link } from 'react-router-dom'

import {ProductConsumer} from './Contaxt';
import Button from 'react-bootstrap/Button';

class Nodal extends Component {

    customStyle={
        overlay:{
            backgroundColor:"black",
            color:"red"
        },
        content:{
            backgroundColor:"black",
            color:"red"
        }
    }
       
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    return(
                          
               <Modal style={this.customStyle.content} isOpen={value.modalcondition}>
                   <div className="container ">
                      <div className="row" style={{}}>
                   <div className="col-xl-12 col-lg-12 colmd-12 col-sm-12">
                    <h1 className="text-center" style={{fontFamily:'Trade Winds',fontSize:"303%",color:"rgb(49, 92, 232)"}}>{value.modalproduct.title}</h1>
                       
                       <div style={{marginTop:"5%"}}> <img src={value.modalproduct.img} style={{float:"left",paddingRight:"3%"}}/>
                    <p style={{color:"rgb(7, 96, 237)",fontSize:"203%",fontFamily: "Oswald, sans-serif"}}><span >Product Info</span>{value.modalproduct.info}</p>
                        <br/>
                            <Link to="/"><Button  onClick={value.modalclose} style={{marginLeft:"38%"}}  variant="outline-primary">continoue</Button></Link>

                            
                        
                                <Link to="/cart"><Button variant="outline-primary"  style={{marginLeft:"1%"}}  onClick={()=>{console.log(value.modalclose()),console.log(value.gtotal())}}>go to cart</Button></Link>
</div>
                         

                         
                         </div>
                         </div>
                         </div>
                   </Modal> 
                         
        

            )
                }
    }
            </ProductConsumer>
        
        )
    }

customStyle={
    overlay:{
bgColore:"black",
color:"red"
    },
    content:{

    }
}
    
}




 
export default Nodal