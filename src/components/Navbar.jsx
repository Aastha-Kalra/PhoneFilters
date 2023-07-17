import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "..//index.css";

function Navbar({ filter, menuList }) {
  const items = useSelector((state) => state.cart);

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="px-3 pt-4">
        <nav className=" bg-green-200 p-4 w-full rounded-2xl  lg:flex-row md:justify-around flex justify-between  md:flex  items-baseline gap-5 text-2xl">
          <NavLink exact="true" to="/" className="font-bold text-4xl">
            @Kalra's
          </NavLink>

          <ul
            className={` lg:flex-row w-10/12 md:flex lg:left-3 bg-inherit z-[20]  lg:z-0  absolute top-32 md:top-0   left-6.5 rounded-lg  overflow-hidden  md:overflow-visible md:relative  duration-900 md:left-0 transition-opacity ease-in md:w-fit ${
              open ? "h-fit" : "h-0"
            }`}
          >
            {menuList.map((curItem) => {
              return (
                <>
                  <div>
                    <li className="list-none my-6 ">
                      <button
                        className="mx-4  w-full text-green-500 hover:bg-green-900 hover:rounded-xl"
                        onClick={() => filter(curItem)}
                      >
                        {curItem}
                      </button>
                    </li>
                  </div>
                </>
              );
            })}
          </ul>

          <NavLink
            to=""
            className="text-green-900 font-semibold nav-Link text-4xl"
          >
            Cart:{items.length}
          </NavLink>

          <div className="lg:hidden md:hidden flex items-center text-4xl">
            <button onClick={() => setOpen(!open)}>
              <ion-icon name="menu"></ion-icon>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
