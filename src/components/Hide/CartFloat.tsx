import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBagShopping, faX} from "@fortawesome/free-solid-svg-icons";
import cartEmpty from "../../assets/img/cart-empty.png";
import useStore from "../../store/store";
import {currencyFormatter} from "../../utils/helper";
import {showPopupSuccess} from "../../utils/showPopup";
import PopupComment from "../Reuse/Popup/PopupComment";

const CartFloat = () => {
  const {carts, cartsInfo, deleteOneCart, clearAllCarts} = useStore();

  const deleteCart = id => {
    deleteOneCart(id);
    showPopupSuccess("delete successfully");
  };

  return (
    <>
      <PopupComment />
      <span className="header-navbar-cart">
        <div className="navbar-cart-price fz-1-2rem">
          {currencyFormatter(cartsInfo.totalPrice)}
        </div>
        <div className="header-navbar-cart-icon">
          <i>
            <FontAwesomeIcon icon={faBagShopping} />
          </i>
          <span className="cart-icon-count">{cartsInfo.totalItem}</span>
          <div className="header-navbar-cart-drop hide-on-mobile">
            <div className="navbar-cart-empty display__none">
              <div className="navbar-cart-empty-img">
                <img src={cartEmpty} alt="empty cart" />
              </div>
              <h4>No products in cart</h4>
            </div>
            <div className="navbar-cart-not-empty">
              <div className="cart-not-empty-all-products">
                {carts.map(cart => (
                  <div key={cart.id} className="cart-not-empty-product">
                    <div
                      className="not-empty-products-img"
                      style={{
                        backgroundImage: `url(${cart.img})`,
                      }}
                    />
                    <div className="not-empty-products-info">
                      <span className="not-empty-products-name">
                        {cart.name}
                      </span>
                      <div className="not-empty-products-amount-price">
                        <span className="amount">{cart.quantity}</span> x{" "}
                        <span className="price">${cart.price}</span>
                      </div>
                      <div className="not-empty-products-color-size">
                        <span className="color">
                          color: <span>{cart.color} /&nbsp;</span>
                        </span>
                        <span className="size">
                          size: <span>{cart.size}</span>
                        </span>
                      </div>
                    </div>
                    <span className="not-empty-products-del">
                      <i onClick={() => deleteCart(cart.id)}>
                        <FontAwesomeIcon icon={faX} />
                      </i>
                    </span>
                  </div>
                ))}
              </div>
              <div className="cart-not-empty-subtotal">
                <div className="not-empty-total">
                  <p className="not-empty-total-name">Subtotal:</p>
                  <p className="not-empty-total-price">
                    {currencyFormatter(cartsInfo.totalPrice)}
                  </p>
                </div>
                <div className="not-empty-items-cart">
                  You have <span className="count">{cartsInfo.totalItem}</span>{" "}
                  items in your cart
                </div>
              </div>
              <div className="cart-not-empty-btn">
                <Link to="/cart" className="btn not-empty-btn-ViewCart">
                  View Cart
                </Link>
                <div
                  style={{backgroundColor: "#1A4845"}}
                  onClick={clearAllCarts}
                  className="btn not-empty-btn-ViewCart">
                  Clear All
                </div>
                <Link to="/checkout" className="btn not-empty-btn-CheckOut">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </span>
    </>
  );
};

export default CartFloat;
