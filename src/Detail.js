import React, { Component, version } from 'react'
import {ProductConsumer} from './Contaxt';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Productcard from './Productcard';
import './detail.css'
import styled from "styled-components";
class Detail extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                {







                    (value)=>{
                        const {id,company,incart,price,img,info,title}=value.Detail
                        return(
                            <div className="container maindetail" style={{boxShadow: "5px 2px 20px 5px #9E9E9E",marginTop:"2%"}}>
                                <div className="row" >
                
                        <h1 className="text-left" className=" col-xl-12 col-md-12 col-sm-12 col-md-12" style={{backgroundColor:"rgb(7, 96, 237)",color:"white",fontFamily: "Oswald, sans-serif"}}>model:{title}</h1></div>

                           <div className="row"style={{marginTop:"4%"}}  >
                               
                       
                        <p  style={{fontSize:"43px",marginLeft:"45%",color:"rgb(7, 96, 237)",fontFamily: "Oswald, sans-serif"}}>Compnay Name :{company}</p>
                    
                                        </div>
                      
                              <div className="row">
                                  <div className="col-4">
                                <img src={img} style={{width:"100%",height:"70%"}}/></div>
                                <div className="col-8">
                     <p style={{fontFamily: 'Pragati Narrow, sans-serif',fontSize:"170%"}}>Some Thing About Phone :   {value.Detail.info}</p><br/><br/><span style={{color:"rgb(7, 96, 237)",fontSize:"203%",fontFamily: "Oswald, sans-serif"}}>Price :{price}PKR</span>
                     </div>
                           </div>      
                     

                    
                         <div className="row text-right" >
                             <div className="col-12">
                             <Link to="/" style={{marginLeft:"4%"}}>
                                 <Button style={{width:"20%",height:"90%",fontWeight:"bold",fontSize:"140%",marginRight:"3%"}} >back to store</Button></Link>
                             
                    <Button variant="success" style={{width:"30%",height:"90%",fontWeight:"bold",fontSize:"140%"}} disabled={incart?true:false}  onClick={()=>{
                        console.log(value.modal(id)),console.log(value.addcart(id))
                    }}>{incart?"already purchased":"add to cart"}</Button>
                             </div>
                         </div>
                     
                                      
</div>
                                    
                            
                        
                        )
                   }
                }
                </ProductConsumer>

            </div>
        )
    }
}
export default Detail




