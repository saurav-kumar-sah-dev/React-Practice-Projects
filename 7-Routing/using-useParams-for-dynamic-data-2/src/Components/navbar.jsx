import {Link, NavLink} from 'react-router-dom'
import Styles from './navbar.module.css'
function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to='/' className={({isActive}) => isActive ? Styles['active'] : ''} >Home Page</NavLink>
        </li>
        <li>
          <NavLink to='/about'className={({isActive}) => isActive ? Styles['active']  : ''} >About Page</NavLink>
        </li>
        <li>
        <NavLink to='/skill' className={({isActive}) => isActive ? Styles['active']  : ''}>Skill Page</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;