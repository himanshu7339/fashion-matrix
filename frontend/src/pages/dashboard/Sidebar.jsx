import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUsers, FaBorderAll, FaProductHunt } from "react-icons/fa";
import { IoCreateSharp } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";

const sidebarLinks = [
  { name: "Dashboard", icon: <FaHome />, to: "/admin/dashboard" },
  { name: "Users", icon: <FaUsers />, to: "/admin/dashboard/users" },
  { name: "Orders", icon: <FaBorderAll />, to: "/admin/dashboard/Orders" },
  {
    name: "Create Product",
    icon: <IoCreateSharp />,
    to: "/admin/dashboard/createproduct",
  },
  {
    name: "Categories",
    icon: <BiCategory />,
    to: "/admin/dashboard/categories",
  },
  {
    name: "Products",
    icon: <FaProductHunt />,
    to: "/admin/dashboard/products",
  },
];
const Sidebar = () => {
  return (
    <div className="sidebar border h-[100vh] ">
      <div className="heading text-bold p-3 text-center">FASHION MATRIX</div>
      <div className="navigation m-2">
        <p className="text-xs">NAVIGATION</p>
      </div>
      <div className="sidebarLinks m-4 flex flex-col gap-6">
        {sidebarLinks.map((item, index) => (
          <NavLink
          className={`flex items-center gap-3`}
            key={index}
            to={item.to}
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                color: isActive ? "red" : "black",
                fontWeight: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            <span
              className={`flex items-center gap-2 ${({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red" : "text-white"}`}
            >
              {" "}
              {item.icon}
            </span>{" "}
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
