import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faStar, faX} from "@fortawesome/free-solid-svg-icons";
import {format as formatTimeago} from "timeago.js";
import useStore from "../../store/store";
import {currencyFormatter} from "../../utils/helper";
import {showPopupSuccess} from "../../utils/showPopup";
import PopupComment from "../Reuse/Popup/PopupComment";

const Index = () => {
  const {recentViewProducts, deleteOneRecentViewProduct} = useStore();

  const clickDeleteReviewProduct = id => {
    deleteOneRecentViewProduct(id);
    showPopupSuccess("product deleted");
  };

  return (
    <>
      <PopupComment />
      <br /> <br />
      <div className="containerxx">
        <div className="grid wide">
          <div className="row">
            {recentViewProducts.map(p => (
              <div key={p.id} className="col p-2-4 m-6">
                <div className="body-background-products">
                  <div
                    className="background-products-img"
                    style={{
                      backgroundImage: `url(${p.img})`,
                    }}></div>
                  <div className="background-products-info">
                    <div className="products-info-start fz-1-6rem">
                      <i>
                        <FontAwesomeIcon icon={faStar} /> &nbsp;
                      </i>
                      {Math.ceil(p.review)} review
                    </div>
                    <div className="products-info-name fz-1-6rem">
                      <span className="products-info-link">{p.name}</span>
                    </div>
                    <div className="products-info-price">
                      <div className="products-info-price-new fz-1-6rem">
                        {currencyFormatter(p.newPrice)}
                      </div>
                      <del className="products-info-price-old">
                        {currencyFormatter(p.oldPrice)}
                      </del>
                    </div>
                  </div>
                  <div className="background-products-shopping">
                    <div className="products-shopping-item active fz-1-6rem">
                      <i>
                        <FontAwesomeIcon icon={faHeart} />
                      </i>
                    </div>{" "}
                    <div className="products-shopping-item fz-1-6rem">
                      <i>
                        <FontAwesomeIcon icon={faHeart} />
                      </i>
                    </div>
                    <div
                      onClick={() => clickDeleteReviewProduct(p.id)}
                      className="products-shopping-item fz-1-6rem">
                      <i>
                        <FontAwesomeIcon icon={faX} />
                      </i>
                    </div>
                  </div>
                  <div
                    style={{color: "darkslateblue"}}
                    className="products-shopping-discount fz-1-6rem">
                    {formatTimeago(p.time, "en_US")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
