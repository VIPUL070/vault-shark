import { NavLink } from "react-router-dom"

const FooterLink = ({item}) => {
  return (
    <NavLink to={`/${item.toLowerCase()}`} className="footer-links" >{item}</NavLink>
  )
}

export default FooterLink;