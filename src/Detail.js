import React, { Component } from 'react'
import {ProductConsumer} from './Contaxt';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import './detail.css'


class Detail extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                {







                    (value)=>{
                        const {id,company,incart,price,img,title}=value.Detail
                        return(
                            <div className="container maindetail" style={{boxShadow: "5px 2px 20px 5px #9E9E9E",marginTop:"2%"}}>
                                <div className="row"  style={{marginBottom:"2%"}}>
                
                        <h3  className=" col-xl-12 col-md-12 col-sm-12 col-md-12 text-center" style={{backgroundColor:"rgb(7, 96, 237)",color:"white",fontFamily: "Oswald, sans-serif"}}>{title}</h3></div>

                           <div className="row text-center"style={{marginTop:"4%"}}  >
                               
                       <div className="col-12 text-center">
                        <p  style={{fontSize:"30px",color:"rgb(7, 96, 237)",fontFamily: "Oswald, sans-serif"}}>Name :{company}</p>
                        </div>
                                        </div>
                      
                              <div className="row">
                                  <div className="col-lg-3 col-8 text-center">
                                <img alt="/////" src={img} style={{borderRadius:"3%"}}/>
                                </div>
                            
                                
                                <div className="col-lg-5" style={{height:"20%"}}>
                     <p style={{fontFamily: "Oswald, sans-serif",textAlign:"justify"}}><span style={{fontWeight:"bold"}}>Some Thing About Phone :</span>   {value.Detail.info}</p>
                     <span style={{color:"rgb(7, 96, 237)",fontSize:"203%",fontFamily: "Oswald, sans-serif"}}>Price :{price}PKR</span>
                     <br/>
                     <Link to="/" style={{marginLeft:"0%"}}>
                                 <Button  >back to store</Button></Link>
                             
                            
                             
                    <Button style={{marginLeft:"1%"}} variant="success"  disabled={incart?true:false}  onClick={()=>{value.modal(id)
                        value.addcart(id)}}>{incart?"already purchased":"add to cart"}</Button>
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




