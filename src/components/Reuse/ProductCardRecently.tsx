import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faHeart,
  faShoppingBag,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const ProductCardRecently = () => {
  return (
    <>
      <div className="col p-2-4 m-6">
        <div className="body-background-products">
          <div
            className="background-products-img"
            style={{
              backgroundImage:
                "url(https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic1-500x750.jpeg)",
            }}>
            <img
              src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic1-500x750.jpeg"
              alt=""
            />
            <img
              src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic2-500x750.jpeg"
              alt=""
            />
            <img
              src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic3-500x750.jpeg"
              alt=""
            />
            <img
              src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic4-500x750.jpeg"
              alt=""
            />
            <img
              src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic5-500x750.jpeg"
              alt=""
            />
          </div>
          <div className="background-products-info">
            <div className="products-info-start fz-1-6rem">
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
              1 review
            </div>
            <div className="products-info-name fz-1-6rem">
              <span className="products-info-link">
                Basic High-Neck Puff Jacket
              </span>
            </div>
            <div className="products-info-price">
              <div className="products-info-price-new fz-1-6rem">$89.00</div>
              <del className="products-info-price-old">$100.00</del>
            </div>
          </div>
          <div className="background-products-shopping">
            <div className="products-shopping-item fz-1-6rem">
              <i>
                <FontAwesomeIcon icon={faHeart} />
              </i>
            </div>
            <div className="products-shopping-item fz-1-6rem">
              <i>
                <FontAwesomeIcon icon={faShoppingBag} />
              </i>
            </div>
          </div>
          <div className="products-shopping-discount fz-1-6rem">-17%</div>
          <div className="products-shopping-flashsale fz-1-6rem">
            <i>
              <FontAwesomeIcon icon={faBolt} />
            </i>
            Sale
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCardRecently;
