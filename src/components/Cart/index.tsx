import CartItem from "./CartItem";
import useStore from "../../store/store";
import {currencyFormatter} from "../../utils/helper";
import DiscountTable from "./DiscountTable";
import {useNavigate} from "react-router-dom";
import PopupComment from "../Reuse/Popup/PopupComment";
import {showPopupComment, showPopupSuccess} from "../../utils/showPopup";
import {useState} from "react";

const Index = () => {
  const {
    carts,
    cartsInfo,
    clearAllCarts,
    calculateDiscountTotalPrice,
    returnPrevTotalPrice,
  } = useStore();
  const [coupon, setCoupon] = useState();
  const [couponValue, setCouponValue] = useState();
  const [couponApplied, setCouponApplied] = useState("");
  const navigate = useNavigate();

  const ApplyCoupon = () => {
    showPopupSuccess("apply coupon sucessfully");
    console.log(coupon, couponValue);
    setCouponApplied(coupon);
    calculateDiscountTotalPrice(couponValue, coupon);
  };

  const removeAppliedCoupon = () => {
    showPopupComment("coupon deleted");
    returnPrevTotalPrice();
    setCouponApplied("");
  };

  return (
    <>
      <PopupComment />
      <br />
      <br />
      <div className="containerxx">
        <div className="grid wide">
          <div className="row">
            <div className="col p-9 m-12">
              <div className="cart-has-products">
                <div className="cart-has-products-title">
                  <ul className="has-products-title-list">
                    <li className="has-products-title-item">Products</li>
                    <li className="has-products-title-item hide-on-mobile">
                      Price
                    </li>
                    <li className="has-products-title-item">Quantity</li>
                    <li className="has-products-title-item">Subtotal</li>
                  </ul>
                </div>
                <div className="cart-has-products-pro">
                  {carts.map(c => (
                    <CartItem key={c.id} cart={c} />
                  ))}
                </div>
              </div>
              <div className="products-in-cart-coupon">
                <div className="products-in-cart-coupon-input">
                  <input type="text" placeholder="Coupon Code" />
                  <button onClick={ApplyCoupon} type="submit">
                    Apply a coupon
                  </button>
                </div>
                <button
                  onClick={clearAllCarts}
                  className="products-in-cart-coupon-update">
                  Clear All
                </button>
              </div>
            </div>
            <div className="col p-3 m-12">
              <div className="cart-products-cart_total">
                <h2 className="cart_total-name">Cart totals</h2>
                <div className="cart_total-subtotal">
                  <p className="name">Total Items:</p>
                  <p className="money">{cartsInfo.totalItem}</p>
                </div>
                <div className="cart_total-subtotal">
                  <p className="name">Subtotal:</p>
                  <p className="money">
                    {currencyFormatter(cartsInfo.prevPrice)}
                  </p>
                </div>{" "}
                <div className="cart_total-subtotal">
                  <p className="name">Coupon:</p>
                  <p className="money">
                    {couponApplied} {couponApplied && `(-${couponValue})`}
                    {couponApplied && (
                      <button
                        onClick={removeAppliedCoupon}
                        className="add-little-buttonx1">
                        X
                      </button>
                    )}
                  </p>
                </div>
                <div className="cart_total-shipping">
                  <p className="total-shipping-name">Shipping</p>
                  <div className="total-shipping-info">
                    {/*<label htmlFor="flat-rate" className="flat-rate">*/}
                    {/*  Flate rate: <span className="money">$15.00</span>*/}
                    {/*  <input name="type" type="radio" id="flat-rate" />*/}
                    {/*</label>*/}
                    <label htmlFor="local-pickup" className="local-pickup">
                      Evaluating ...
                    </label>
                  </div>
                </div>
                <div className="cart_total-allTotal">
                  <p className="total-allTotal-name">Total</p>
                  <div className="all-money">
                    {currencyFormatter(cartsInfo.totalPrice)}
                  </div>
                </div>
                <button
                  onClick={() => navigate("/checkout")}
                  className="cart-total-checkout-btn">
                  Proceed to check out
                </button>
              </div>
            </div>
          </div>
          <br />
          <br />
          <DiscountTable
            setCoupon={setCoupon}
            setCouponValue={setCouponValue}
          />
        </div>
      </div>
    </>
  );
};

export default Index;
