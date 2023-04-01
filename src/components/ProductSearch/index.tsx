import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faHeart,
  faShoppingBag,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import getParams from "../../utils/hook/getParam";
import {getHomeProducts, getSearchProduct} from "../../api/product.api";
import {convertOutputLeftSearch} from "../../utils/helper";
import {useQuery} from "@tanstack/react-query";
import {LoadingSpinnerOverlay} from "../Reuse/Loading";
import ProductCard from "../Home/ProductCard";
import ProductCardInSearch from "./ProductCardInSearch";

const Index = () => {
  const [_, [searchString]] = getParams("key");
  console.log(searchString);

  const getProductsAtSearch = useQuery({
    queryKey: ["products_search", searchString],
    queryFn: () => getSearchProduct(searchString),
  });

  if (getProductsAtSearch.isFetching || getProductsAtSearch.isLoading)
    return <LoadingSpinnerOverlay />;
  else {
    console.log(getProductsAtSearch);
  }

  return (
    <>
      <div className="containerxx">
        <div className="grid wide">
          <div className="row">
            {getProductsAtSearch.data?.data?.map(p => (
              <ProductCardInSearch key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
