import {faCheck, faX} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import banner from "../../../assets/img/banner-26.jpg";

const HomeStatic1 = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <div onClick={() => setShow(false)} className="row no-gutters">
          <div className="col p-12 m-12">
            <div className="body-background-baner">
              <img src={banner} alt="" />
              <span className="body-background-baner-link" />
              <div className="body-background-baner-content">
                <div className="row">
                  <div className="col p-5">
                    <h2 className="baner-content-name">
                      Plus-Size Style for Every Season
                    </h2>
                    <p className="baner-content-des">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Neque nobis cum officia accusamus rerum error
                    </p>
                    <br />
                    <br />
                    <h2>CLICK TO HIDE THIS BANNER</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const HomeStatic2 = () => {
  return (
    <>
      <nav className="model-filter">
        <div className="model-filter-name">
          <h3>Filter Products</h3>
          <label htmlFor="menu-model-filter" className="model-filter-close">
            <i>
              <FontAwesomeIcon icon={faX} className="fz-2rem" />
            </i>
          </label>
        </div>
        <div className="body-filter-products">
          <h4 className="body-filter-products-name">Product Categories</h4>
          <ul className="body-filter-products-list">
            <li className="body-filter-products-item">
              <span className="body-filter-products-item-link">
                <label>Men</label>
              </span>
            </li>
            <li className="body-filter-products-item">
              <span className="body-filter-products-item-link">
                <label>Men</label>
              </span>
            </li>
            <li className="body-filter-products-item">
              <span className="body-filter-products-item-link">
                <label className="active">Men</label>{" "}
              </span>
            </li>
            <li className="body-filter-products-item">
              <span className="body-filter-products-item-link">
                <label>Men</label>{" "}
              </span>
            </li>
            <li className="body-filter-products-item">
              <span className="body-filter-products-item-link">
                <label>Men</label>{" "}
              </span>
            </li>
          </ul>
        </div>
        <div className="body-filter-price">
          <h4 className="body-filter-products-name">Filter by price</h4>
          <div className="body-filter-price-sort align__item-center">
            <select>
              <option>$0 - $500</option>
              <option>$500 - $1000</option>
              <option>$1000 - $1500</option>
              <option>Price from lowest to highest</option>
              <option>Price from highest to lowest</option>
            </select>
            <button type="submit" className="body-filter-price-btn">
              FILTER
            </button>
          </div>
        </div>
        <div className="body-Filter-color">
          <h4 className="body-filter-products-name">Filter by Color</h4>
          <ul className="body-Filter-color-list">
            <li className="body-Filter-color-item">
              <div className="body-Filter-color-item-content">
                <span
                  className="body-Filter-color-type"
                  style={{backgroundColor: "red"}}>
                  <i>
                    <FontAwesomeIcon icon={faCheck} />
                  </i>
                </span>
                <span className="body-Filter-color-link">Bio Red</span>
              </div>
              <div className="body-Filter-color-item-result">(7)</div>
            </li>
            <li className="body-Filter-color-item">
              <div className="body-Filter-color-item-content">
                <span
                  className="body-Filter-color-type active"
                  style={{backgroundColor: "green"}}>
                  <i>
                    <FontAwesomeIcon icon={faCheck} />
                  </i>
                </span>
                <span className="body-Filter-color-link">Bio green</span>
              </div>
              <div className="body-Filter-color-item-result">(7)</div>
            </li>
            <li className="body-Filter-color-item">
              <div className="body-Filter-color-item-content">
                <span
                  className="body-Filter-color-type"
                  style={{backgroundColor: "yellow"}}>
                  <i>
                    <FontAwesomeIcon icon={faCheck} />
                  </i>
                </span>
                <span className="body-Filter-color-link">Bio yelow</span>
              </div>
              <div className="body-Filter-color-item-result">(7)</div>
            </li>
          </ul>
        </div>
        <div className="body-filter-size">
          <h4 className="body-filter-products-name">Filter by Size</h4>
          <ul className="body-filter-products-list">
            <li className="body-filter-products-item">
              <span className="body-filter-products-item-link">
                <label className="active">panst</label>
              </span>
              <div className="body-filter-products-result">(7)</div>
            </li>
          </ul>
        </div>
        <div className="body-filter-status">
          <h4 className="body-filter-products-name">Products Status</h4>
          <ul className="body-filter-products-list">
            <li className="body-filter-products-item">
              <span className="body-filter-products-item-link">
                <label className="active">panst</label>
              </span>
            </li>
            <li className="body-filter-products-item">
              <span className="body-filter-products-item-link">
                <label className="active">panst</label>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export {HomeStatic1, HomeStatic2};
