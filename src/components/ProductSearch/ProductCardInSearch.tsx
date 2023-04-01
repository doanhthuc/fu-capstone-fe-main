import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBolt,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {currencyFormatter} from "../../utils/helper";
import {useNavigate} from "react-router-dom";
import CountingStar from "../Static/CountingStar";
import useStore from "../../store/store";

const ProductCard = ({product}) => {
  const navigate = useNavigate();
  const {addRecentViewProducts} = useStore();

  const moveToProductDetailsPage = id => {
    addRecentViewProducts({
      id: product.id,
      time: Date.now(),
      img: product.coverPhoto,
      star: "4",
      review: product.reviewed,
      name: product.name,
      oldPrice: product.basePrice,
      newPrice: product.sellingPrice,
    });
    navigate(`/product/${id}?part=description`);
  };

  return (
    <>
      <div className="col p-2-4 m-6">
        <div className="body-background-products">
          <div
            className="background-products-img"
            onClick={() => moveToProductDetailsPage(product.id)}
            style={{
              backgroundImage: `url(${product.coverPhoto})`,
              cursor: "pointer",
            }}></div>
          <div className="background-products-info">
            <div className="products-info-start fz-1-6rem">
              <CountingStar numberOfStars={Math.ceil(product.reviewed)} />
              &nbsp;
              {Math.ceil(product.reviewed)} review
            </div>
            <div
              onClick={() => moveToProductDetailsPage(product.id)}
              className="products-info-name fz-1-6rem">
              {/*Toi da 55 word*/}
              <span style={{cursor: "pointer"}} className="products-info-link">
                {product.name}
              </span>
            </div>
            <div className="products-info-price">
              {product.basePrice == product.sellingPrice ? (
                <>
                  {" "}
                  <div className="products-info-price-new fz-1-6rem">
                    {currencyFormatter(product.sellingPrice)}
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div className="products-info-price-new fz-1-6rem">
                    {currencyFormatter(product.sellingPrice)}
                  </div>
                  <div className="products-info-price-old">
                    {currencyFormatter(product.basePrice)}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="background-products-shopping">
            <div className="products-shopping-item active fz-1-6rem">
              <i>
                <FontAwesomeIcon icon={faHeart} />
              </i>
            </div>
            {/*Chua active*/}
            <div className="products-shopping-item fz-1-6rem">
              <i>
                <FontAwesomeIcon icon={faHeart} />
              </i>
            </div>
            <div className="products-shopping-item fz-1-6rem">
              <i onClick={() => moveToProductDetailsPage(product.id)}>
                <FontAwesomeIcon icon={faBagShopping} />
              </i>
            </div>
          </div>
          {product.basePrice != product.sellingPrice ? (
            <>
              <div className="products-shopping-discount fz-1-6rem">
                -
                {Math.ceil(
                  ((product.basePrice - product.sellingPrice) /
                    product.basePrice) *
                    100,
                )}
                %
              </div>
              <div className="products-shopping-flashsale fz-1-6rem">
                <i>
                  <FontAwesomeIcon icon={faBolt} />
                </i>
                Sale
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
