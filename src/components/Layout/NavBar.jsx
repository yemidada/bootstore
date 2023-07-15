import { NavLink } from 'react-router-dom';
import '../../styles/navbar.css';
import PersonIcon from '@mui/icons-material/Person';

const NavBar = () => (
  <header className="navbar-brand">
    <div className="logo">Bookstore CMS</div>
    <nav className="nav-links">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          BOOKS
        </NavLink>

      </li>
      <li>
        <NavLink
          to="categories"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          CATEGORIES
        </NavLink>

      </li>
    </nav>
    <div className="my-account">
      <PersonIcon />
    </div>

  </header>

);
export default NavBar;
