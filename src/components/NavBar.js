import './componentStyles.css';
import mainImage from "../assets/img/main_picture1.jpg"
import mainImage2 from "../assets/img/main_picture.jpg"
import mainImage3 from "../assets/img/main_picture3.jpg"

const NavBar =function() {

    return <div>
    <div className="foto">
        <img alt="" src={mainImage} />
        <img alt="" src={mainImage2} />
        <img alt="" src={mainImage3} />
    </div>    
    <div class="topnav" id="myTopnav">
    <a href="#home" class="active">Inicio</a>
    <a href="#news">Productos</a>
    <a href="#contact">Ofertas</a>
    <a href="#about">Ultimos</a>
    <a href="#about">
        <i class="fa fa-shopping-cart"></i></a>
    <a href="#about" onclick="">
      <i class="fa fa-bars"></i>
    </a>
  </div>
  </div>
};

export default NavBar;