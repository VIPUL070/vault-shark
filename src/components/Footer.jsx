import {NavLink } from "react-router-dom";
import FooterLink from "./FooterLink";

const Footer = () => {
  const footerMidLinks = ["Expertise", "Clients", "Studio", "News"];
  const footerLowerLinks = ['Linkedin' , 'Twitter' , 'Instagram' , 'Spotify'];

  return (
    <footer
      id="footer"
      className="relative bg-black-100 h-dvh w-screen text-white-100 px-10 flex flex-col py-10"
    >
      <div className=" relative footer-top">
        <h1 className="font-zentry text-center text-[20rem] font-extralight -tracking-normal leading-tight scale-y-[1.3]">
          Vault Shark
          <span className="text-white text-[3rem] font-bold">&copy;</span>
        </h1>
      </div>

      <div className="relative footer-mid font-circular flex items-center justify-between mb-auto">
        <ul className="flex gap-7">
          {footerMidLinks.map((link) => {
            return <FooterLink item={link} key={link} />
          })}
        </ul>
        <NavLink to="/contact" className="underline cursor-pointer">
          New business enquires click here
        </NavLink>
      </div>

      <div className="relative footer-lower font-circular flex items-center justify-between mt-auto">
        <ul className="flex gap-7">
          {footerLowerLinks.map((link) => {
            return <FooterLink item={link} key={link} />
          })}
        </ul>
        <div>
          <p>©2025 Vault Shark. All rights reserved. All wrongs reversed</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
