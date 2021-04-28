import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <div>
        <nav>
          <NavLink to="/" exact>
            Myself
          </NavLink>
          <NavLink to="/post">
            BLog Posts
          </NavLink>
          <NavLink to="/project">
            Projects
          </NavLink>
          <NavLink to="/about"> 
            About me
          </NavLink>
        </nav>
      </div>
    </header>
  )

}
export default NavBar;