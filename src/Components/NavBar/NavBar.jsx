

import { RiMenu2Line,RiCloseFill  } from "react-icons/ri";
import Link from "../Link/Link";
import { useState } from "react";



const NavBar = () => {
  const [open, setOpen]=useState(false)
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav className="bg-slate-700 p-5">
     <div className="md:hidden text-2xl ml-4" onClick={()=>setOpen(!open)}>
      {
        open === true ? <RiCloseFill /> : <RiMenu2Line />
        // open === true ? : 
      }
    
     
     </div>
      <ul className={`md:flex absolute px-5 duration-1000
      ${open? 'top-16': '-top-60'}
       gap-5 md:static bg-stone-600 px-6 text-red-400`}>{
        routes.map(route=><Link key={route.id} route={route}></Link>)
        }
        </ul>
    </nav>
  );
};

export default NavBar;
