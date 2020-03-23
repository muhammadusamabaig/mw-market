import React, { Component } from 'react'
import {Products} from './Data';
import {Detail} from './Data';

const ProductContaxt=React.createContext();
export default class ProductProvider extends Component {


    state={
        product:[],
        Detail:Detail,
        cart:[],
        modalproduct:Detail,
        modalcondition:false,
        total:0,
        gtotal:0,

    }
componentDidMount(){
    this.setproduct()
    this.gtotal()

}

cartcalincre=(id)=>{
let tempcart=[...this.state.cart]

let productindex = tempcart.indexOf(this.grtcartitem(id))
let product =tempcart[productindex]
product.count=product.count+1
 product.total=product.count*product.price

 
console.log("increeeeeee",id)

this.setState({
    cart:tempcart,
   
})

}


cartcaldecrem=(id)=>{
    let tempcart=[...this.state.cart]
    
    let productindex = tempcart.indexOf(this.grtcartitem(id))
    let product =tempcart[productindex]
    if(product.count>=1){
    product.count=product.count-1
    }
     product.total=product.count*product.price
    
     
    console.log("increeeeeee",id)
    
    this.setState({
        cart:tempcart,
       
    })
    
    }
    



gtotal=()=>{
    
      let tempcart=[...this.state.cart]

      tempcart.map((item)=>{
        total=total+item.total
          return(
           
              this.setState({
                total:total
              })
              
          )
      })



      let total=0
      tempcart.map((item)=>{
        total=total+item.total
          return(
           
              this.setState({
                total:total
              })
              
          )
      })

      
     
      
  }

  cartdelettotupdate=(id)=>{
     let tempcart=[...this.state.cart]
    let deletproductindex=tempcart.indexOf(this.grtcartitem(id))
    let deletproduct=tempcart[deletproductindex]
    let delproducttot=this.state.total-deletproduct.total



    this.setState({
total:delproducttot
    })

    }

  

delproduct=(id)=>{
    let tempcart=[...this.state.cart]
    
    let productindex = tempcart.indexOf(this.grtcartitem(id))
    let delproduct =tempcart[productindex]

let carttotupdate=0
    



    let arr = tempcart.filter(function(item) {

        
        return item !== delproduct
    })
  
    let tempproductarray=[...this.state.product]
    let deletproductindex =tempproductarray.indexOf(this.grtitem(id))
    let deletproduct=tempproductarray[deletproductindex]
deletproduct.incart=false

    this.setState({
        cart:arr,
        product:tempproductarray,
        
        
    })
    
}



    setproduct=()=>{
      let temparray=[]
      Products.forEach((item)=>{
         
          temparray=[...temparray,item]
      })
      this.setState({
          product:temparray
      }
      )
    }
    grtitem=(id)=>{
        const productget=this.state.product.find(item=>item.id===id)
        return productget

    }
    grtcartitem=(id)=>{
        const productgetcart_item=this.state.cart.find(item=>item.id==id)
        return productgetcart_item

    }
    
handleproduct=(id)=>{
      const searchproduct=this.grtitem(id);
       this.setState(()=>{
          return{ Detail:searchproduct}
       }) 
}
addcart=(id)=>{
    
//    let temparray=[...this.state.Product]
// console.log(temparray)
//    const inbexproductinarray= temparray.indexOf(this.grtitem(id))
//   const product=temparray[inbexproductinarray]
//   product.incart=true
//   product.count=1
//   const price=product.price
//   product.total=price

   
//    this.setState(
//        ()=>{
//            return{ product:temparray,cart:[...this.state.cart,product]}
//        },
//        console.log(this.state.product,"mmmmmmmmm")
//    )

let temparry=[...this.state.product]
const index=temparry.indexOf(this.grtitem(id))
 console.log(index,"iiiiiiiiiiiiiiii")
 const product=temparry[index]
 product.incart=true
 product.count=1
 const price=product.price
 product.total=price
 let addpro=[...this.state.cart,product]
 
return(
    this.setState({
        product:temparry,
      
        cart:addpro}
)

)
  
}
modal=(id)=>{
 let product=this.grtitem(id)

 this.setState({
modalproduct:product,modalcondition:true
 }
     
 )


}

modalclose=()=>{
this.setState({
    modalcondition:false
})
}
    render() {
                                                                                                                                                                                                                        
        return(
            <ProductContaxt.Provider value={{...this.state,handleproduct:this.handleproduct,addcart:this.addcart,modal:this.modal,modalclose:this.modalclose,cartcalincre:this.cartcalincre,delproduct:this.delproduct,gtotal:this.gtotal,cartdelettotupdate:this.cartdelettotupdate,cartcaldecrem:this.cartcaldecrem}}>
                {this.props.children}
                {console.log(this.state.cart,"mooooooooooooooooooooooodal")}

            </ProductContaxt.Provider>
        )
    }
}
const ProductConsumer=ProductContaxt.Consumer;


export {ProductProvider,ProductConsumer};