import React from "react";


function Card({data , handle}) {
  // console.log(data);
  // console.log(data(menu));



  return (
    <>
      {data.map((item, i) => {
        // destructuring
        const { brand_name, phone_name, image_url } = item;

        return (
          <div
            key={i}
            className="p-5 bg-green-200 md:w8 lg:w-5/6 w-full rounded-xl md:m-1"
          >
            <h1
              style={{ fontFamily: "cursive", color: "green" }}
              className="font-bold text-2xl"
            >
              {brand_name}
            </h1>
            <h1 style={{ fontSize: 42 }}>{phone_name}</h1>
            <img src={image_url} alt="" />
            <p>{item.description}</p>
            <br />
             <button className="bg-green-500 rounded-xl w-full h-14 text-3xl" onClick={()=>handle(item)}>Add to Cart</button>
          </div>
        );
      })}
    </>
  );
}

export default Card;

