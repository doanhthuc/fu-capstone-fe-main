import Description from "./Description";
import Addition from "./Addition";
import Review from "./Review";
import ProductCardRecently from "../Reuse/ProductCardRecently";
import getParams from "../../utils/hook/getParam";
import {useOnlyInitialEffect} from "../../utils/hook/useUpdateEffect";
import clsx from "clsx";
import ImageShow from "./Parts/ImageShow";
import SelectSize from "./Parts/SelectSize";
import useMapState from "../../utils/hook/useMapState";
import SelectColor from "./Parts/SelectColor";
import SelectAmount from "./Parts/SelectAmount";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {useParams} from "react-router-dom";
import {useQueries} from "@tanstack/react-query";
import {getProductDetail1, getReviewOfProduct, getVariantOfProduct} from "../../api/product.api";
import {v4 as uuidv4} from "uuid";
import {useEffect, useState} from "react";
import {
  choosePriceStockBaseOnColorAndSize,
  chooseSizeBaseOnColor,
  currencyFormatter,
  scrollToTopPage,
  showNumberOfStars,
  splitDescription,
} from "../../utils/helper";
import useStore from "../../store/store";
import {LoadingSpinnerOverlay} from "../Reuse/Loading";
import {showPopupSuccess} from "../../utils/showPopup";
import PopupComment from "../Reuse/Popup/PopupComment";
import {isLoadingQueries} from "../../utils/reactquery.status";
import {toggleWishListAPI} from "../../api/wishlist.api";

const DETAIL_PROP = new Map<string, any>([
  ["color", "red"],
  ["size", "S"],
  ["amount", 1],
]);

const Index = () => {
  const [currentProduct, setCurrentProduct]: any = useState();
  const [detailProp, actionDetailProp] = useMapState<string, string>(
    DETAIL_PROP,
  );
  const [setSearchParams, [part]] = getParams("part");
  const {id: productId} = useParams();
  const {addToCart, wishlist, addWishList, user} = useStore();

  // Scroll to Top when first load page
  useOnlyInitialEffect(() => {
    scrollToTopPage();
  });
  // End scroll to Top when first load page

  // End param

  // Start get product detail api
  const getProductDetailQueries = useQueries({
    queries: [
      {
        queryKey: ["product1", productId],
        queryFn: () => getProductDetail1(productId),
      },
      {
        queryKey: ["product2", productId],
        queryFn: () => getVariantOfProduct(productId),
      },
      {
        queryKey: ["review", productId],
        queryFn: () => getReviewOfProduct(productId),
      },
    ],
  });

  // Start param
  useEffect(() => {
    if (!part) {
      setSearchParams({part: "description"});
    }
    const res = choosePriceStockBaseOnColorAndSize(
      detailProp.get("color"),
      detailProp.get("size"),
      getProductDetailQueries[1]?.data?.data,
    );

    if (Object.keys(res)?.length === 0) {
      setCurrentProduct(getProductDetailQueries[0]?.data?.data);
    } else {
      setCurrentProduct(res);
    }
  }, [
    part,
    detailProp.get("color"),
    detailProp.get("size"),
    getProductDetailQueries,
  ]);

  if (isLoadingQueries(getProductDetailQueries))
    return <LoadingSpinnerOverlay />;
  else {
    // console.log(getProductDetailQueries[2]);
  }
  // End get product detail api

  // Start add to cart
  const addToCartFunc = () => {
    showPopupSuccess("product added");
    addToCart({
      id: getProductDetailQueries[0]?.data?.data?.id,
      img: getProductDetailQueries[0]?.data?.data?.coverPhoto,
      name: getProductDetailQueries[0]?.data?.data?.name,
      color: detailProp.get("color"),
      size: detailProp.get("size"),
      price: currentProduct?.sellingPrice,
      quantity: detailProp.get("amount"),
    });
  };
  // End add to cart

  const toggleWishList = async () => {
    const wishlistsend = {
      userId: user.id,
      item: {
        productId: productId,
        productName: getProductDetailQueries[0]?.data?.data?.name,
        productPhotoUrl: getProductDetailQueries[0]?.data?.data?.coverPhoto,
      },
    };
    const wlres = await toggleWishListAPI(wishlistsend);
    addWishList(wlres.itemList);
  };

  return (
    <>
      <PopupComment />
      <div className="containerxx">
        <div className="grid wide">
          <div className="row">
            <div className="col p-12">
              <div className="pro-woocommerce">
                <ul className="pro-woocommerce-list">
                  <li className="pro-woocommerce-item">
                    <span className="pro-woocommerce-item-link">Home </span>/
                  </li>
                  <li className="pro-woocommerce-item">
                    <span className="pro-woocommerce-item-link">Products </span>
                    /
                  </li>
                  <li className="pro-woocommerce-item">
                    <h5> {getProductDetailQueries[0]?.data?.data?.name}</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col p-12 m-12">
              <div className="pro-product-detail">
                <div className="row no-gutters">
                  <ImageShow
                    imgMain={getProductDetailQueries[0]?.data?.data?.coverPhoto}
                    imgShow={getProductDetailQueries[0]?.data?.data?.photoUrls}
                  />
                  <div className="col p-7">
                    <div className="pro-product-detail-info">
                      <h2 className="pro-product-detail-info-name">
                        {getProductDetailQueries[0]?.data?.data?.name}
                      </h2>
                      <div className="pro-product-detail-info-evaluate">
                        <div className="detail-info-evaluate-star">
                          {showNumberOfStars(getProductDetailQueries[0]?.data?.data?.rating)}
                        </div>
                        <div className="detail-info-evaluate-reviews">
                          {getProductDetailQueries[0]?.data?.data?.reviewed} reviews
                        </div>
                      </div>
                      <div className="pro-product-detail-info-price">
                        {currentProduct?.basePrice ==
                        currentProduct?.sellingPrice ? (
                          <span className="detail-info-price-new">
                            {currencyFormatter(currentProduct?.sellingPrice)}
                          </span>
                        ) : (
                          <>
                            <span className="detail-info-price-old">
                              {currencyFormatter(currentProduct?.basePrice)}
                            </span>
                            <span className="detail-info-price-new">
                              {currencyFormatter(currentProduct?.sellingPrice)}
                            </span>
                          </>
                        )}
                      </div>
                      <div className="pro-product-detail-info-des">
                        {
                          splitDescription(
                            getProductDetailQueries[0]?.data?.data?.description,
                          )[0]
                        }
                      </div>
                      <div className="pro-product-detail-info-validate">
                        <SelectColor
                          setColorFunc={actionDetailProp.set}
                          colorShow={
                            getProductDetailQueries[0]?.data?.data?.colors
                          }
                        />
                        <SelectSize
                          setSizeFunc={actionDetailProp.set}
                          sizeShow={chooseSizeBaseOnColor(
                            detailProp.get("color"),
                            getProductDetailQueries[1]?.data?.data,
                          )}
                        />
                        <div className="pro-product-detail-info-count-add hide-on-mobile">
                          <SelectAmount setAmountFunc={actionDetailProp.set} />
                          <button
                            className="detail-info-count-add-btn"
                            onClick={addToCartFunc}
                            type="submit">
                            Add to cart
                          </button>
                        </div>
                      </div>
                      <h2 className="content-stock">
                        Stock: {currentProduct?.quantity}
                      </h2>
                      {wishlist?.length > 0 &&
                      wishlist?.some(o => o.productId == productId) ? (
                        <span
                          onClick={toggleWishList}
                          className="pro-product-detail-info-add-wishlist">
                          <i>
                            <FontAwesomeIcon icon={faHeart} color={"pink"} />
                          </i>
                          <div className="content">Added to Wishlist</div>
                        </span>
                      ) : (
                        <span
                          onClick={toggleWishList}
                          className="pro-product-detail-info-add-wishlist">
                          <i>
                            <FontAwesomeIcon icon={faHeart} />
                          </i>
                          <div className="content">Add to Wishlist</div>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col p-12 m-12">
              <div className="pro-product-detail-tabs">
                <div
                  className={clsx("pro-product-detail-tab-item", {
                    active: part === "description",
                  })}
                  onClick={() => setSearchParams({part: "description"})}>
                  Description
                </div>
                <div
                  className={clsx("pro-product-detail-tab-item", {
                    active: part === "addition",
                  })}
                  onClick={() => setSearchParams({part: "addition"})}>
                  Additional information
                </div>
                <div
                  className={clsx("pro-product-detail-tab-item", {
                    active: part === "review",
                  })}
                  onClick={() => setSearchParams({part: "review"})}>
                  Review (<span>{getProductDetailQueries[0]?.data?.data?.reviewed}</span>)
                </div>
              </div>
              <div className="pro-product-detail-tab-content">
                {part === "description" && (
                  <Description
                    descriptionShow={splitDescription(
                      getProductDetailQueries[0]?.data?.data?.description,
                    )}
                  />
                )}
                {part === "addition" && (
                  <Addition pro={getProductDetailQueries[0]?.data?.data} />
                )}
                {part === "review" && <Review reviewD={getProductDetailQueries[2]?.data?.data} />}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col p-12 m-12">
              <div className="body-view-products">
                <h2 className="body-view-products-name">
                  Recently Viewed Products
                </h2>
              </div>
            </div>
            <div className="col p-12 m-12">
              <div className="row">
                <ProductCardRecently />
                <ProductCardRecently />
                <ProductCardRecently />
                <ProductCardRecently />
                <ProductCardRecently />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
