import React, { useEffect, useState } from "react";
import { HandleFetch } from "./Api"; // Import HandleFetch from your API file
import "./App.css";

function Product({toshow}) {

const [product, setPro] = React.useState([]); // Define 'pro' state
const [cart, addToCart] = React.useState([]);
const [value, setValue] = useState('')
const [filtered, setFiltered] = useState([])


  React.useEffect(() => {
    const getList = async () => {
      try {
        await HandleFetch().then((data) => {
            setPro(data);
            setFiltered(data);
        });
        // const data = await HandleFetch(); // Use 'await' directly on HandleFetch
        // setPro(data);
      } catch (err) {
        console.log(err);
      }
    };
    getList();


    
  }, []);

//   const handleSearchResults = async() => {
//     if (value !== "") {
//       return product.filter((item) =>
//         item.name.toLowerCase().includes(value.toLowerCase())
//       );
//     } else if (value === "" && product.length > 0) {
//       return product;
//     }
//   };

//   React.useEffect(() => {
//     // Search for food
//     let filtered = handleSearchResults();
//     setFiltered(filtered);
//     console.log("value:", value);
//     console.log("product:", product);
//     console.log("filtered:", filtered);

//   }, [value]);

  return (
    <div className="pizza">
        <div className="">
    <input
     type="text"
     value={value}
     onChange={(e) => {
       setValue(e.target.value);
     }}
   />
   </div>
   <div className="food-grid">
        {filtered &&
          filtered.map((item) => {
            return(

            <div
            style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
              }}
              className="pizza1"
              key={item.id}
            >
              <h3>{item.name}</h3>
              <p style={{ color: 'black', fontWeight: 'bold' }}>{item.description}</p>
              <p>{item.price}$</p>
              <button className="btn"
                 onClick={() => {
                    // added a function to add the pizza to the cart
                    alert(`${item.name} has been added to cart`);
                    // spread previous values and append new one
                    addToCart([...cart, item]);
                  }}
              
              
              
              >
                Add to basket</button>
            </div>
          );
        })}
        </div>





    {toshow ? (
   <div className=" cart-cont">
     <div className="cart-list">
       <h1>Cart</h1>
       {/* cart items */}
       {cart && cart.map((item, index) => {
         return (
           <div
             style={{ backgroundImage: `url(${item.image})` }}
             className="cart"
             key ={index}
           >
             <h3>{item.name}</h3>
             <p>{item.price}$</p>
             <button onClick={(e)=>{
         // remove item from cart
         cart.splice(index, 1);
         let x = cart;
         addToCart([...x]);
       }} >Remove Item</button>
           </div>
         );
       })}
     </div>
     <div className="total">
       <h1>Total</h1>
       <p>{cart.reduce((a, b) => a + b.price, 0)}$</p>
       <button>Check out</button>
     </div>
   </div>
 ) : null}  






    </div>





  );
}

export default Product;
