import { Link ,NavLink} from "react-router-dom"
import Styles from './navbar.module.css'

export const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" className={({isActive}) => isActive ? Styles['active'] : ''} >Home Page</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive}) => isActive ? Styles['active'] : ''}>About Page</NavLink>
        </li>
        <li>
          <NavLink to="/department" className={({isActive}) => isActive ? Styles['active'] : ''}>Department Page</NavLink>
        </li>
      </ul>
    </div>
  )
}