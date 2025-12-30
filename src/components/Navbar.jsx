import { NavLink } from "react-router-dom";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if(currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y : isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      border : isNavVisible ? "solid-black-0.1px" : 'none',
      duration: 0.2,
    });
  }, [isNavVisible ,currentScrollY]);

  return (
    <nav ref={navContainerRef} id="navbar" className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 flex items-center justify-between px-10 py-3 bg-transparent">
       <Logo />

       <div id="navlinks" className="pr-15">
         <ul className="flex gap-7 font-circular text-[1.1rem]">
          <NavLink to="/expertise" className="header-links" >Expertise</NavLink>
          <NavLink to="/clients" className="header-links">Clients</NavLink>
          <NavLink to="/studio" className="header-links">Studio</NavLink>
          <NavLink to="/news" className="header-links">News</NavLink>
         </ul>
       </div>

       <Button>
        Contact
       </Button>
    </nav>
  )
}

export default Navbar;
