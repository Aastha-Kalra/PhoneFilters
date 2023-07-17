import React from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { remove } from "../Redux/CartSlice";


function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);
  const handleremove = (id) => {
    dispatch(remove(id));
  
  };
  // console.log(handleremove)

  // console.log(cartItems)
  return (
    <>
      <div>
        <h2>Cart</h2>
        <div>
          {cartItems.map((index) => {
                // const { brand_name, phone_name, image_url } = item;
                // console.log(item)
            return(   
           <>

            <div className="cartCard flex   text-black m-6">
              <img src={
                index.image_url} />
              <h5>{index.phone_name}</h5>
              <h5>{index.brand_name}</h5>
              <button
                className="btn bg-green-400"
                onClick={() => handleremove(index.id)}
              >
                Remove
              </button>
            </div>
            </>)
})}
        </div>
      </div>
    </>
  );
}
export default Cart;

