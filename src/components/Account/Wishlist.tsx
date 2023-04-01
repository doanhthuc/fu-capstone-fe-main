import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";
import useStore from "../../store/store";
import {useNavigate} from "react-router-dom";
import {toggleWishListAPI} from "../../api/wishlist.api";

const Wishlist = () => {
  const navigate = useNavigate();
  const {user, wishlist, addWishList} = useStore();

  const toggleWishList = async p => {
    const wishlistsend = {
      userId: user.id,
      item: {
        productId: p.productId,
        productName: p.productName,
        productPhotoUrl: p.productPhotoUrl,
      },
    };
    const wlres = await toggleWishListAPI(wishlistsend);
    addWishList(wlres.itemList);
  };

  return (
    <>
      <div className="info-content-item active">
        <h2 className="form-validate-title">Wishlist</h2>
        {wishlist?.length == 0 && (
          <div className="info-content-order-no-pro">
            <div className="info-content-order-des">
              No wishlist has been add yet
            </div>
          </div>
        )}
        <div className="info-content-order-has-pro">
          <div className="info-content-order-has-pro-item">
            <div className="cart-has-products-pro">
              {wishlist.map(x => (
                <div key={x.productId} className="has-products-pro-item">
                  <span
                    onClick={() => toggleWishList(x)}
                    className="has-products-pro-item-del">
                    <FontAwesomeIcon icon={faX} />
                  </span>
                  <div
                    onClick={() =>
                      // Phai co / truoc product hoac no se bi sai # https://stackoverflow.com/questions/75495249/navigate-the-user-to-another-url-using-usenavigate-of-react-router-dom-v6
                      navigate(`/product/${x.productId}?part=description`, {
                        replace: true,
                      })
                    }
                    className="has-products-pro-item-img-name">
                    <img
                      src={x.productPhotoUrl}
                      className="hide-on-mobile"
                      alt=""
                    />
                    <div className="pro_item-name-type">
                      <h4 className="name">{x.productName}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
