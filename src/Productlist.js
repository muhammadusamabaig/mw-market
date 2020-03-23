import React, { Component } from 'react'
import {ProductConsumer} from './Contaxt';
import Title from './Title';
import './productcard.css'

import Productcard from './Productcard';
 class Productlist extends Component {

    info={
        name:"usama",
        fname:"irfan"
    }
    render() {
        return (
            <div style={{backgroundColor:"lightGray"}}>
            {/* <Title head1="Our" head2="Products" /> */}
            <Title head1={"STAR"} head2={"SUPER MARKET"}/>

                <ProductConsumer>
                    {
                        (value)=>
                            {
                            return(
                                <div className="container" >
                                    <div className="row">
                                    {
                                        value.product.map((item)=>{
                                            return(
                                                <div key={item.id} style={{overflow:"hidden",border:"2px solid green",marginTop:"3%",backgroundColor:"white",marginLeft:"5%"}}   className="col-lg-3 col-xl-2 col-sm-5 col-md-3 maincard" >
                                                    {

<Productcard itempass={item}/>                                                    }
                                                    </div>
                                            )
                                        })
                                    }
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
export default Productlist