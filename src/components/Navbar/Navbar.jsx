import "./Navbar.scss";
import { images } from "../../constants";
import { links } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-link">
        {links.map((link) => {
          return (
            <li key={`link-${link}`} className="app__flex p-text">
              <div></div>
              <a href={`#${link}`}>{link}</a>
            </li>
          );
        })}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            onClick={() => setToggle(false)}
          >
            {<HiX onClick={() => setToggle(false)} /> }
            <ul> 
            {links.map((link) => {
              return (
                <li key={link} >
                  <a href={`#${link}`} onClick={() => setToggle(false)}>{link}</a>
                </li>
              );
            })}
            </ul>  
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
