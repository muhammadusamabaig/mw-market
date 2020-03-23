import React, { Component } from 'react'
import {ProductConsumer} from './Contaxt';

export default class Structurcart extends Component {
    render() {
        return (
            <div>
                {
                    value.cart.map(
                        (item)=>{
                            return(

                                <div className="container">
                                <div className="row text-center" style={{border:"2px solid"}} >
                        <img src={item.img} className=" img-fluid col-10 col-lg-2"/>
                            <h4 style={{marginTop:"3%"}} className="col-10 col-lg-2"><span className="d-lg-none">name :</span>{item.title}</h4>
                            <h4  style={{marginTop:"3%"}} className=" col-10 col-lg-2"><span className="d-lg-none ">Price :</span>{item.price}</h4>
                      <h4 style={{marginTop:"2%"}} className="col-10 col-lg-2"><button style={{background:"transparent",border:"2px solid"}}>-</button></h4>  
                            <h4  style={{marginTop:"3%"}} className="col-10 col-lg-2"><FontAwesomeIcon icon={faTrashAlt}/></h4>

                            <h4  style={{marginTop:"3%"}} className="col-10 col-lg-2">{item.total}</h4>


                            </div></div>
                            )
                        }
                  )
                }
            </div>
        )
    }
}
