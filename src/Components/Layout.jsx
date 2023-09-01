
import "../App.css";
import Homepage from "./Homepage";
import Greetings from "../Components/Greetings"
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";


const Layout = () => {
  const [open, setOpen] = useState(true);
    
    
  return (
    <div>
      <Sidebar open={open} setOpen={setOpen} />
      <section className={`${open ? "ml-72" : "ml-24"}`}>
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
