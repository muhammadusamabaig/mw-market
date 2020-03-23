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
                                     <Link to="/"> <Button variant="primary" onClick={()=>{
                                          console.log(value.modalclosebutton())
                                      }}>Close</Button></Link>

<div className="container">
                      <div className="row" style={{}}>

                   <div className="col-xl-12 col-lg-12 colmd-12 col-sm-12">

                    <h1 className="text-center" style={{fontFamily:'Trade Winds',fontSize:"303%",color:"rgb(49, 92, 232)"}}>{value.modalproduct.title}</h1>
                       </div>
                       </div>
                       <div className="row">
                           <div className="col-12 text-center">
                     <img src={value.modalproduct.img} />
                       </div>
                       </div>
                       
                       
                       <div className="row" style={{marginTop:"3%"}}>
    <div className="col-12 text-center">
                
                    <Link to="/"><Button onClick={value.modalclose} style={{width:"50%"}}   variant="outline-primary">continoue</Button></Link>

</div>
                    </div>
            <div className="row" style={{marginTop:"3%"}}>
                <div className="col-12 text-center">
                        <Link to="/cart"><Button variant="outline-primary" style={{width:"50%"}}  onClick={()=>{console.log(value.modalclose()),console.log(value.gtotal())}}>go to cart</Button></Link>
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