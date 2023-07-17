import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import React, { useState } from "react";
import Card from "./components/Card";
import Data from "./components/data";
import Navbar from "./components/Navbar";
import { add } from "./Redux/CartSlice";
import { useDispatch } from "react-redux";

function App() {
  const uniqueList = [
    ...new Set(
      Data.map((item) => {
        return item.brand_name;
      })
    ),
  ];

  // console.log(uniqueList);
  const [menu, setMenu] = useState(Data);
  const [menuList, setMenuList] = useState(uniqueList);
  // console.log(menuList)
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(add(menu));
  };

  // console.log(menu)

  const filter = (brand_name) => {
    const updatedList = Data.filter((item) => {
      return item.brand_name === brand_name;
    });
    setMenu(updatedList);
    // console.log(updatedList)
  };

  // console.log(Data);

  return (
    <div className="App overflow-x-hidden">
      <div>
        <Navbar filter={filter} menuList={menuList} />

        <Routes>
          <Route
            exact="true"
            path="/"
            element={
              <>
                <div className=" pe-10  w-screen">
                  <div className="border-2 m-3 p-4 bg-black sm:w-full w-[256] justify-center grid  items-center  shadow-md shadow-slate-800 gri gap-4 md:grid-cols-2  lg:grid-cols-3  rounded-3xl">
                    <Card data={menu} handle={handleAdd} />
                  </div>
                </div>
              </>
            }
          />
          {/* <Route exact="true" path="/cart" element={<Cart />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
