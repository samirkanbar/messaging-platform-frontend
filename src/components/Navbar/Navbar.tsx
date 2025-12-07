import { Link, useMatch, useResolvedPath, type LinkProps } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        SayGoodbyes.com
      </Link>
      <ul>
        <CustomLink to="/hiw">How it works</CustomLink>
        <CustomLink to="/faq">FAQ</CustomLink>
        <CustomLink to="/About">About</CustomLink>
        <CustomLink to="/account/LogIn">Account</CustomLink>
        {/* <li className="dropdown">
          <Link to="/account" className="dropdown-trigger">Account</Link>
          <ul className="dropdown-menu">
            <CustomLink to="/account/LogIn">Log in</CustomLink>
            <CustomLink to="/account/SignUp">Sign up</CustomLink>
          </ul>
        </li> */}
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }: LinkProps) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}