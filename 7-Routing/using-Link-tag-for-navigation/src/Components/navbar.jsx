import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/' >Home Page</Link>
        </li>
        <li>
          <Link to='/about'>About Page</Link>
        </li>
        <li>
        <Link to='/skill'>Skill Page</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;