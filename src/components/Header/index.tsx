import HeaderStatic4, {
  HeaderStatic1,
  HeaderStatic2,
  HeaderStatic3,
} from "../Static/Header";
import CartFloat from "../Hide/CartFloat";
import SearchBar from "../Hide/SearchBar";
import LeftMenu from "../Hide/LeftMenu";
import useToggle from "../../utils/hook/useToggle";
import {Link} from "react-router-dom";
import LogoWeb from "../../assets/img/logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  const [searchShow, searchShowToggle, _] = useToggle(false);

  return (
    <>
      <HeaderStatic1 />
      <header className="header">
        <HeaderStatic2 />
        {/* Phần navbar trên thanh header*/}
        <nav className="header-navbar">
          <div
            className="grid wide"
            style={{display: "flex", justifyContent: "space-between"}}>
            {/*icon Bar, logo , navbar */}
            <div className="header-navbar-nav display__flex">
              <label
                htmlFor="menu-model"
                className="header-navbar-nav-icon fz-2rem line-height-3rem">
                <FontAwesomeIcon
                  icon={faBars}
                  className="header-navbar-iconnav cur-pointer"
                />
              </label>
              <div className="header-navbar-img">
                <img src={LogoWeb} alt="logo" />
              </div>
              <ul className="header-navbar-list">
                <li className="header-navbar-item">
                  <Link to="/" className="header-navbar-item-link">
                    HOME
                  </Link>
                </li>
                <li className="header-navbar-item">
                  <span className="header-navbar-item-link">WOMEN</span>
                </li>
                <li className="header-navbar-item">
                  <span className="header-navbar-item-link">MEN</span>
                </li>
                <li className="header-navbar-item">
                  <span className="header-navbar-item-link">
                    SWEATSHIRTS & HOODIES
                  </span>
                </li>
                {/*<li className="header-navbar-item">*/}
                {/*  <span className="header-navbar-item-link">PANTS</span>*/}
                {/*</li>*/}
                <Link to="/recent" className="header-navbar-item">
                  <span className="header-navbar-item-link">RECENT VIEW</span>{" "}
                </Link>
                <Link to="/feedback" className="header-navbar-item">
                  <span className="header-navbar-item-link">FEEDBACK</span>
                </Link>
              </ul>
            </div>
            {/* phần thông tin icon user */}
            <div className="header-navbar-user">
              <span className="header-navbar-icon-user fz-2rem line-height-3rem hide-on-mobile">
                <Link
                  to="/account"
                  className="line-height-3rem fz-2rem cur-pointer">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </span>
              <div
                onClick={searchShowToggle}
                className="header-navbar-icon-search">
                <i className="hide-on-mobile cur-pointer">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </i>
              </div>
              <Link
                to="/account?part=Wishlist"
                className="header-navbar-wislist hide-on-mobile">
                <FontAwesomeIcon icon={faHeart} className="cur-pointer" />
                {/*<span className="wislist-count">5</span>*/}
              </Link>
              <CartFloat />
            </div>
            {/* Kết thúc phần thông tin icon user */}
          </div>
          {/*  */}
        </nav>
        {/* Kết thúc Phần navbar trên thanh header*/}
        <HeaderStatic3 />
      </header>
      {searchShow && <SearchBar />}
      {/* Kết thúc phần header */}
      {/* bắt đầu phần navbar mobile */}
      <HeaderStatic4 />
      {/* Kết thúc phần navbar mobile */}
      {/* Thanh menu phụ kế trái */}
      <LeftMenu />
      {/* Kết thúc thanh menu phụ */}
    </>
  );
};

export default Index;
