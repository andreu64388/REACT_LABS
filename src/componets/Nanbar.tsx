import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "./../store/state";
const Navbar: FC = () => {
  const [menu, setMenu] = useState<boolean>(true);

  const { basket } = useAppSelector((state) => state.data);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  
  return (
    <div>
      <div className={menu ? "nav-hidden what" : "nav-hidden"}>
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => {
                setMenu(true);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              onClick={() => {
                setMenu(true);
              }}
            >
              Product
            </Link>
          </li>
          <li>
            <span>{basket.length}</span>
            <Link
              to="/basket"
              onClick={() => {
                setMenu(true);
              }}
            >
              Basket
            </Link>
          </li>
        </ul>

        <div className="form">
          <Link
            to="/register"
            onClick={() => {
              setMenu(true);
            }}
          >
            Register
          </Link>
          <Link
            to="/login"
            onClick={() => {
              setMenu(true);
            }}
          >
            Login
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="wrapper">
          <div className="navbar">
            <div className="logo">
              <Link to="/">LOGO</Link>
            </div>

            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/product">Product</Link>
                </li>
                <li className="basket_logo">
                  <span>{basket.length}</span>
                  <Link to="/basket">Basket</Link>
                </li>
              </ul>
            </nav>
            <div className="form">
              <Link to="/register">Register</Link>

              <Link to="/login">Login</Link>
            </div>
            <div className="button-menu" onClick={() => setMenu(!menu)}>
              {menu ? "☰" : "X"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
