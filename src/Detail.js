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
                
                        <h1  className=" col-xl-12 col-md-12 col-sm-12 col-md-12 text-center" style={{backgroundColor:"rgb(7, 96, 237)",color:"white",fontFamily: "Oswald, sans-serif"}}>model:{title}</h1></div>

                           <div className="row text-center"style={{marginTop:"4%"}}  >
                               
                       <div className="col-12 text-center">
                        <p  style={{fontSize:"43px",color:"rgb(7, 96, 237)",fontFamily: "Oswald, sans-serif"}}>Name :{company}</p>
                        </div>
                                        </div>
                      
                              <div className="row">
                                  <div className="col-12 text-center">
                                <img src={img} style={{borderRadius:"3%"}}/>
                                </div>
                                </div>
                                <div className="row" style={{marginTop:"2%"}}>
                                <div className="col-12" style={{height:"20%"}}>
                     <p style={{fontFamily: 'Pragati Narrow, sans-serif',fontSize:"170%" ,textAlign:"justify"}}><span style={{fontWeight:"bold"}}>Some Thing About Phone :</span>   {value.Detail.info}</p><br/><span style={{color:"rgb(7, 96, 237)",fontSize:"203%",fontFamily: "Oswald, sans-serif"}}>Price :{price}PKR</span>
                     </div>
                     </div>
                                 
                     

                    
                         <div className="row" style={{marginTop:"5%"}}>
                             <div className="col-12">
                             <Link to="/" >
                                 <Button  >back to store</Button></Link>
                             </div>
                             </div>
                             <div className="row" style={{marginTop:"3%"}}>
                             <div className="col-12" style={{marginBottom:"4%"}}>
                    <Button variant="success"  disabled={incart?true:false}  onClick={()=>{
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




