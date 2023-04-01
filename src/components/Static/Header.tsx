import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBoxArchive,
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const HeaderStatic1 = () => {
  return (
    <>
      <input
        type="checkbox"
        id="menu-model"
        hidden
        className="menu-model-check"
      />
      <input
        type="checkbox"
        id="menu-model-filter"
        hidden
        className="menu-model-filer-check"
      />
      <label htmlFor="menu-model" className="model-over-play" />
      <label htmlFor="menu-model-filter" className="model-filter-over-play" />
    </>
  );
};

const HeaderStatic2 = () => {
  return (
    <>
      <div className="header-introduce hide-on-mobile">
        <div className="grid wide">
          <div className="row no-gutters">
            <div className="col p-12">
              <p className="header-introduce-info fz-1-2rem line-height-2-4rem">
                SUMMER SALE FOR ALL SWIM SUITS AND FREE EXPRESS INTERNATIONAL
                DELIVERY - OFF 50% !
                <span className="header-intoduce-link"> SHOP NOW</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const HeaderStatic3 = () => {
  return (
    <>
      <div className="mobile-search">
        <input type="text" placeholder="Search your favorite product..." />
        <span className="mobile-search-btn">
          Search
          <i>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </i>
        </span>
      </div>
    </>
  );
};

const HeaderStatic4 = () => {
  return (
    <>
      <div className="navbar-mobile hide-on-pc">
        <ul className="navbar-mobile-list">
          <li className="navbar-mobile-item">
            <span className="navbar-mobile-item-link">
              <i>
                <FontAwesomeIcon icon={faBoxArchive} />
              </i>
              Home
            </span>
          </li>
          <li className="navbar-mobile-item">
            <label
              htmlFor="menu-model-filter"
              className="navbar-mobile-item-link">
              <i>
                <FontAwesomeIcon icon={faBars} />
              </i>
              Filter
            </label>
          </li>
          <li className="navbar-mobile-item">
            <span className="navbar-mobile-item-link navbar-mobile-item-search">
              <i>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </i>
              Search
            </span>
          </li>
          <li className="navbar-mobile-item">
            <span className="navbar-mobile-item-link">
              <i>
                <FontAwesomeIcon icon={faHeart} />
              </i>
              Wishlist
            </span>
          </li>
          <li className="navbar-mobile-item">
            <span className="navbar-mobile-item-link">
              <i>
                <FontAwesomeIcon icon={faUser} />
              </i>
              Account
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderStatic4;

export {HeaderStatic1, HeaderStatic2, HeaderStatic3, HeaderStatic4};
