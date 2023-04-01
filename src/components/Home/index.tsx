import {HomeStatic1, HomeStatic2} from "../Static/Home";
import ProductCard from "./ProductCard";
import ProductCardRecently from "../Reuse/ProductCardRecently";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import {
  faFilter,
  faLeftLong,
  faRightLong,
} from "@fortawesome/free-solid-svg-icons";
import Category from "./LeftSearch/Category";
import Price from "./LeftSearch/Price";
import Color from "./LeftSearch/Color";
import Size from "./LeftSearch/Size";
import useMapState from "../../utils/hook/useMapState";
import {useMutation, useQuery} from "@tanstack/react-query";
import {getHomeProducts} from "../../api/product.api";
import {LoadingSpinnerOverlay} from "../Reuse/Loading";
import {convertOutputLeftSearch} from "../../utils/helper";
import {useState} from "react";
import {useNormalEffect} from "../../utils/hook/useUpdateEffect";

const DETAIL_PROP = new Map<string, any>([
  ["category", [""]],
  ["price", "all"],
  ["color", [""]],
  ["size", [""]],
]);

const Index = () => {
  // Find Prop Left Bar Search
  const [detailProp, actionDetailProp] = useMapState<string, any>(DETAIL_PROP);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");

  const findProductsLeftBar = () => {
    setPage(Math.floor(Math.random() * 1000) + 20);
  };
  const ReturnNormalHomePage = () => {
    setPage(1);
    setSort("");
    actionDetailProp.set("category", [""]);
    actionDetailProp.set("price", "all");
    actionDetailProp.set("color", [""]);
    actionDetailProp.set("size", [""]);
    setPage(1);
    setSort("");
    actionDetailProp.set("category", [""]);
    actionDetailProp.set("price", "all");
    actionDetailProp.set("color", [""]);
    actionDetailProp.set("size", [""]);
    console.log(convertOutputLeftSearch(detailProp));
    console.log(page);
  };
  // End find Prop Left Bar Search

  const getProductsAtHomePageQuery = useQuery({
    queryKey: ["products_home", page, sort],
    queryFn: () =>
      getHomeProducts(page, sort, convertOutputLeftSearch(detailProp)),
  });

  if (
    // getProductsAtHomePageQuery.isFetching ||
    getProductsAtHomePageQuery.isLoading
  )
    return <LoadingSpinnerOverlay />;
  else {
    console.log(getProductsAtHomePageQuery.data?.data);
  }
  // End get products at home page

  return (
    <>
      <HomeStatic2 />
      {/* Phần nội dung chính */}
      <div className="containerxx">
        <div className="grid wide">
          <div className="row">
            {/* Phần filter */}
            <div className="col p-3 hide-on-mobile">
              <div className="body-filter">
                {" "}
                <Category setLeftCategoryFunc={actionDetailProp.set} />
                <Price setLeftPriceFunc={actionDetailProp.set} />
                <Color setLeftColorFunc={actionDetailProp.set} />
                <Size setLeftSizeFunc={actionDetailProp.set} />
                <div className="body-filter-size">
                  <button
                    onClick={findProductsLeftBar}
                    className="button-add-1">
                    FIND
                  </button>
                </div>
                <div className="body-filter-size">
                  <button
                    onClick={ReturnNormalHomePage}
                    className="button-add-1">
                    RETURN
                  </button>
                </div>
              </div>
            </div>
            {/* Kết thúc phần filter */}
            <div className="col p-9">
              <HomeStatic1 />
              <div className="row no-gutters align__item-center add-little-fix1">
                <div className="col p-6 hide-on-mobile">
                  <div className="body-background-filter">
                    <p className="background-filter-show fz-1-6rem">
                      Showing 17–32 of 72 results
                    </p>
                  </div>
                </div>
                <div className="col p-6 m-6 hide-on-pc">
                  <label
                    htmlFor="menu-model-filter"
                    className="body-background-filter-setting">
                    <i>
                      <FontAwesomeIcon icon={faFilter} />
                    </i>
                    Filter
                  </label>
                </div>
                <div className="col p-6 m-6">
                  <div className="background-filter-sort-showing fz-1-6rem">
                    <p className="hide-on-mobile reduct-little-size-font">
                      Show:
                    </p>
                    <div className="filter-sort-showing-select hide-on-mobile">
                      <select>
                        <option>12 Items</option>
                        <option>4 Items</option>
                        <option>8 Items</option>
                      </select>
                    </div>
                    <div className="filter-sort-showing-sort">
                      <select
                        onChange={e => setSort(e.target.value)}
                        className="filter-sort-showing-sort">
                        <option value={0}>Sort</option>
                        <option value={1}>Sort by price ⇩</option>
                        <option value={2}>Sort by price ⇧</option>
                        <option value={3}>Sort by star ⇩</option>
                        <option value={4}>Sort by star ⇧</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {getProductsAtHomePageQuery.data?.data?.productList?.map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
              <div className="row">
                <div className="col p-12 m-12">
                  <div className="body-background-pagination">
                    <ul className="pagination-list">
                      {/*<li className="pagination-page">*/}
                      {/*  <i>*/}
                      {/*    <FontAwesomeIcon icon={faLeftLong} />*/}
                      {/*  </i>*/}
                      {/*</li>*/}

                      {[
                        ...Array(
                          Math.ceil(
                            getProductsAtHomePageQuery.data?.data?.total / 12,
                          ),
                        ).keys(),
                      ].map(key => (
                        <li
                          key={key}
                          onClick={() => setPage(key + 1)}
                          className={clsx("pagination-page", {
                            active: page === key + 1,
                          })}>
                          {key + 1}
                        </li>
                      ))}

                      {/*<li className="pagination-page">*/}
                      {/*  <i>*/}
                      {/*    <FontAwesomeIcon icon={faRightLong} />*/}
                      {/*  </i>*/}
                      {/*</li>*/}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Index;
