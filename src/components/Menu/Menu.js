import {Link} from "react-router-dom"
const Menu = ({cartCount}) => {

  return ( 
  <div>
    <ul>
      <Link to='/'>Home</Link>
      <li>
        <Link to="/cart">
        cart(<span>{cartCount}</span>)
        </Link>
      </li>
    </ul>
  </div>
  )
};

export default Menu;
