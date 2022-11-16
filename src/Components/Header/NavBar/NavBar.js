import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import Cart from "./Cart/Cart";



function NavBar() {
  return (
    <nav style={styles.container}>
      <ul style={styles.ul} className="header__nav__menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Nosotros</a>
        </li>
        <li>
            <NavDropdown
              title="Productos"
              id="basic-nav-dropdown"
              style={styles.navdropdown}
            >
              <NavDropdown.Item className='navlinks' href="#">
                  <p>Almohadones</p>
              </NavDropdown.Item>
              <NavDropdown.Item className='navlinks' href="#">
                  <p>Bolsos</p>
              </NavDropdown.Item>
              <NavDropdown.Item className='navlinks' href="#">
                  <p>Ropa de cama</p>
              </NavDropdown.Item>
            </NavDropdown>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
        <li>
          <Cart />
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    textAlign: "right",
    padding: "5px 0 5px 0",
    marginLeft: "15px",
    marginRight: "15px",
  },
  ul: {
    width: "auto",
    height: "40px",
    padding: "7px",
    display: "flex",
    backgroundColor: "rgba(255, 255, 255, 0.645)",
    borderRadius: "20px",
  },
  navdropdown: {
    borderRadius: "20px",
  },
};

export default NavBar;
