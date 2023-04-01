import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/img/logo.png";

const LeftMenu = () => {
  return (
    <>
      <nav className="model-menu bg_white">
        <div className="model-menu-logo align__item-center">
          <span className="model-menu-logo-link">
            <img src={logo} alt="" />
          </span>
          <label htmlFor="menu-model" className="bg_gray-light text_dark">
            <i>
              <FontAwesomeIcon icon={faX} className="fz-2rem" />
            </i>
          </label>
        </div>
        <div className="model-main-menu cur-pointer">
          <Link to="/" className="model-main-menu-name">
            Home
          </Link>
        </div>
        <div className="model-main-menu cur-pointer">
          <Link to="/checkout" className="model-main-menu-name">
            Check Out
          </Link>
        </div>
        <div className="model-main-menu cur-pointer">
          <Link to="cart" className="model-main-menu-name">
            Your Cart
          </Link>
        </div>{" "}
        <div className="model-main-menu cur-pointer">
          <Link to="/account" className="model-main-menu-name">
            Your Account
          </Link>
        </div>{" "}
        <div className="model-main-coppyright fz-1-6rem">
          We always put the customer first, if you are not satisfied or have any
          suggestions, please contact us !!!
        </div>
      </nav>
    </>
  );
};

export default LeftMenu;
