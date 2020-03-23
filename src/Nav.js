import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import './nav.css'
class Nav extends Component {
    render() {
        return (
           
           <div className="row" style={{backgroundColor:"rgb(7, 96, 237)"}}>
<div className="col-6">
                        <Link to="/">
                            
                            <span style={{color:"white",fontFamily: "Oswald, sans-serif",marginLeft:"9%",fontSize:"32px"}}>Store Products</span></Link>
</div>

<div className="col-6" >

<Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}  style={{color:"white",marginLeft:"55%",fontSize:"393%"}} /></Link>
</div>
               </div>
                         
        )
    }
}

export default Nav
