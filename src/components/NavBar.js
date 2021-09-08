
import mainImage from "../assets/img/main_picture1.jpg"
import mainImage2 from "../assets/img/main_picture.jpg"
import mainImage3 from "../assets/img/main_picture3.jpg";
import CartWidget from './CartWidget.js';
import {Link} from "react-router-dom";

const NavBar =function() {

    return <nav className="nav">
    <div className="foto">

        <img alt="" src={mainImage} />
        <img alt="" src={mainImage2} />
        <img alt="" src={mainImage3} />

    </div>    
    <div class="topnav" id="myTopnav">
    
      <ul>
      
      <Link to="/"><li>Inicio</li></Link>
      <Link to="/category/0"><li>Productos</li></Link>
      <Link to="/category/25"><li>Ofertas</li></Link>
      <Link to="/category/37"><li>Ultimos</li></Link>
      
      <Link to="/cart"><li><CartWidget/> </li></Link>
       </ul>
      
  </div>
  </nav>
};

export default NavBar;