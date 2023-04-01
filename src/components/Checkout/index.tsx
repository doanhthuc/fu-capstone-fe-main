import {CheckoutStatic1} from "../Static/Checkout";
import useStore from "../../store/store";
import {currencyFormatter} from "../../utils/helper";
import {useForm} from "react-hook-form";
import {submitRegisterLoginAxios} from "../../api/auth.api";
import {createOrderAxios} from "../../api/order.api";
import {useNavigate} from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const {address, user, carts, cartsInfo, clearAllCarts, addTransferfee, removeTransferfee} =
    useStore();

  const {register, handleSubmit} = useForm();

  const submitOrder = async data => {
    const orderItemDTOList = [];
    for (let cc of carts) {
      orderItemDTOList.push({
        productId: cc.id,
        productName: cc.name,
        productPhotoUrl: cc.img,
        color: cc.color,
        size: cc.size,
        quantity: cc.quantity,
      });
    }
    const dataSubmit = {
      ...data,
      userId: user.id,
      companyName: "fsoft",
      state: "Nothing",
      deliveryFee: 1.23,
      paymentMethod: "COD",
      orderItemDTOList,
    };
    const registerIdentity = await createOrderAxios(dataSubmit);
    if (registerIdentity) {
      clearAllCarts();
      navigate("/");
      navigate(0);
    }
  };

  return (
    <>
      <br />
      <div>
        <div className="containerxx">
          <div className="grid wide">
            <div className="row">
              <form className="checkout-form-validate">
                <div className="row">
                  <div className="col p-8 m-12">
                    <h2 className="form-validate-title">Billing details</h2>
                    <div className="row no-gutters">
                      <div className="col p-12 m-12">
                        <label className="form-validate-name">
                          First name *
                        </label>
                        <input
                          {...register("firstName")}
                          type="text"
                          className="form-validate-input"
                        />
                      </div>
                      <div className="col p-12 m-12">
                        <label className="form-validate-name">
                          Last name *
                        </label>
                        <input
                          {...register("lastName")}
                          type="text"
                          className="form-validate-input"
                        />
                      </div>

                      <div className="col p-12 m-12">
                        <label className="form-validate-name">
                          Country / Region *
                        </label>
                        <input
                          {...register("country")}
                          defaultValue={address.country}
                          type="text"
                          className="form-validate-input"
                        />
                      </div>

                      <div className="col p-12 m-12">
                        <label className="form-validate-name">City *</label>
                        <input
                          {...register("city")}
                          defaultValue={address.city}
                          type="text"
                          className="form-validate-input"
                        />
                      </div>

                      <div className="col p-12 m-12">
                        <label className="form-validate-name">
                          District (optional)
                        </label>
                        <input
                          defaultValue={address.district}
                          type="text"
                          className="form-validate-input"
                        />
                      </div>

                      <div className="col p-12 m-12">
                        <label className="form-validate-name">
                          Street address *
                        </label>
                        <input
                          {...register("streetAddress")}
                          defaultValue={address.streetAddress}
                          type="text"
                          className="form-validate-input"
                        />
                      </div>

                      <div className="col p-12 m-12">
                        <label className="form-validate-name">ZIP Code *</label>
                        <input
                          {...register("zipCode")}
                          defaultValue={address.zipCode}
                          type="text"
                          className="form-validate-input"
                        />
                      </div>
                      <div className="col p-12 m-12">
                        <label className="form-validate-name">Phone *</label>
                        <input
                          {...register("phone")}
                          defaultValue={user.phoneNumber}
                          type="text"
                          className="form-validate-input"
                        />
                      </div>
                      <div className="col p-12 m-12">
                        <label className="form-validate-name">
                          Email address *
                        </label>
                        <input
                          {...register("email")}
                          defaultValue={user.email}
                          type="text"
                          className="form-validate-input"
                        />
                      </div>
                      <div className="col p-12 m-12">
                        <div className="create-account">
                          <input type="checkbox" id="create-account" />
                          <label
                            htmlFor="create-account"
                            className="form-validate-name">
                            {" "}
                            Add my card
                          </label>
                          <div className="create-account-input">
                            <div className="row no-gutters">
                              <div className="col p-12 m-12">
                                <label className="form-validate-name">
                                  Your Card Number *
                                </label>
                                <input
                                  type="text"
                                  className="form-validate-input"
                                />
                              </div>
                              <div className="col p-12 m-12">
                                <label className="form-validate-name">
                                  Expiry date *
                                </label>
                                <input
                                  placeholder={"MM/YY"}
                                  type="password"
                                  className="form-validate-input"
                                />
                              </div>
                              {" "}
                              <div className="col p-12 m-12">
                                <label className="form-validate-name">
                                  CVV *
                                </label>
                                <input
                                  type="password"
                                  className="form-validate-input"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col p-12 m-12">
                        <label className="form-validate-name">
                          Order notes (optional)
                        </label>
                        <textarea
                          className="form-validate-input"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col p-4 m-12">
                    <div className="checkout-cart-order">
                      <h3 className="checkout-cart-order-name">Your order</h3>
                      <div className="checkout-cart-order-pro-subtotal">
                        <div className="product">Product</div>
                        <div className="Subtotal">Subtotal</div>
                      </div>
                      {carts.map(x => (
                        <div key={x.id} className="checkout-cart-order-type">
                          <div className="product_type">
                            <div className="product_type-name">
                              {x.name} X <strong>{x.quantity}</strong>
                            </div>
                          </div>
                          <div className="product_total">
                            {currencyFormatter(x.price)}
                          </div>
                        </div>
                      ))}
                      {/*<div className="checkout-cart-order-shipping">*/}
                      {/*  <div className="shipping-name">Subtotal</div>*/}
                      {/*  <div className="shipping-type">*/}
                      {/*    <label htmlFor="flat-rate" className="flat-rate">*/}
                      {/*      Flate rate: <span className="money">$15.00</span>*/}
                      {/*      <input name="type" type="radio" id="flat-rate" />*/}
                      {/*    </label>*/}
                      {/*    <label*/}
                      {/*      htmlFor="local-pickup"*/}
                      {/*      className="local-pickup">*/}
                      {/*      Local pickup*/}
                      {/*      <input name="type" type="radio" id="local-pickup" />*/}
                      {/*    </label>*/}
                      {/*  </div>*/}
                      {/*</div>*/}
                      <div className="checkout-cart-order-total">
                        <p className="total-allTotal-name">Coupon</p>
                        <div className="all-money">{cartsInfo.coupon}</div>
                      </div>
                      {" "}
                      <div className="checkout-cart-order-total">
                        <p className="total-allTotal-name">Total</p>
                        <div className="all-money">
                          {currencyFormatter(cartsInfo.totalPrice)}
                        </div>
                      </div>
                      <div className="checkout-cart-order-transfer">
                        <div className="transfer-type">
                          <input
                            onClick={() => removeTransferfee()}
                            type="radio"
                            name="transfer"
                            id="transfer-bank"
                          />
                          <label htmlFor="transfer-bank">
                            Direct bank transfer
                          </label>
                          <p className="transfer-des">
                            Make your payment directly into our bank account.
                            Please use your Order ID as the payment reference.
                            Your order will not be shipped until the funds have
                            cleared in our account.
                          </p>
                        </div>
                        <div className="transfer-type">
                          <input
                            onClick={() => addTransferfee()}
                            type="radio"
                            name="transfer"
                            id="transfer-delivery"
                          />
                          <label htmlFor="transfer-delivery">
                            Cash on delivery (+15$)
                          </label>
                          <p className="transfer-des">
                            Pay with cash upon delivery.
                          </p>
                        </div>
                      </div>
                      <CheckoutStatic1 />
                      <button
                        onClick={handleSubmit(submitOrder)}
                        className="checkout-cart-order-btn"
                        type="submit">
                        PLace order
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
