import { NavLink } from 'react-router-dom';
import {SocialIcon} from 'react-social-icons'

const NavBar = () => {
  return (
    <header className="bg-blue-900">
      <div className="container mx-auto flex justify-between">
        <nav className='flex'>
          <NavLink to="/" 
            exact 
            className="inflex-flex items-center -py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold tracking-widest"
            activeClassName="text-white">
            Home
          </NavLink>
          <NavLink 
            to="/about"
            className="inflex-flex items-center -py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold roboto tracking-widest"
            activeClassName="text-white"> 
            About
          </NavLink>
          <NavLink 
            to="/project"
            className="inflex-flex items-center -py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold roboto tracking-widest"
            activeClassName="text-white">
              Projects
          </NavLink>
         
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon 
            url="https://www.linkedin.com/in/stephen-timphony" 
            className="mr-4" 
            target="_blank" 
            fgColor="#fff" 
            style={{height: 35, width: 35}} />
          <SocialIcon 
            url="https://github.com/StephenTimphony" 
            className="mr-4" 
            target="_blank" 
            fgColor="#fff" 
            style={{height: 35, width: 35}} />
        </div>
      </div>
    </header>
  )

}
export default NavBar;