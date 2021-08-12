
import mainImage from "../assets/img/main_picture1.jpg"
import mainImage2 from "../assets/img/main_picture.jpg"
import mainImage3 from "../assets/img/main_picture3.jpg";
import logo from "../assets/img/logo.PNG";
import CartWidget from './CartWidget.js';

const NavBar =function() {

    return <nav className="nav">
    <div className="foto">
        <img alt="" src={mainImage} />
        <img alt="" src={mainImage2} />
        <img alt="" src={mainImage3} />
    </div>    
    <div class="topnav" id="myTopnav">
    
      <ul>
      
      <li href="#home" >Inicio</li>
      <li href="#news">Productos</li>
      <li href="#contact">Ofertas</li>
      <li href="#about">Ultimos</li>
      <li href="#about">
       <CartWidget/> </li>
       </ul>
      
  </div>
  </nav>
};

export default NavBar;