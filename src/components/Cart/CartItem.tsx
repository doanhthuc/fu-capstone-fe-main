import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";
import useStore from "../../store/store";
import {currencyFormatter} from "../../utils/helper";

const CartItem = ({cart}) => {
  const {cartsInfo, deleteOneCart} = useStore();
  console.log(cart);
  return (
    <>
      <div className="has-products-pro-item">
        <span
          onClick={() => deleteOneCart(cart.id)}
          className="has-products-pro-item-del">
          <FontAwesomeIcon icon={faX} />
        </span>
        <div className="has-products-pro-item-img-name">
          <img src={cart.img} className="hide-on-mobile" alt="" />
          <div className="pro_item-name-type">
            <h4 className="name">{cart.name}</h4>
            <p className="type hide-on-mobile">
              Color: <span className="color">{cart.color}</span> / Size:{" "}
              <span className="size">{cart.size}</span>
            </p>
          </div>
        </div>
        <div className="has-products-pro-item-price">
          <div className="pro-item-price hide-on-mobile ">
            {currencyFormatter(cart.price)}
          </div>
          <div className="pro-item-quantity pro-item-quantity-extra">
            {/*<i>*/}
            {/*  <FontAwesomeIcon icon={faMinus} />*/}
            {/*</i>*/}
            <span>{cart.quantity}</span>
            {/*<i>*/}
            {/*  <FontAwesomeIcon icon={faPlus} />*/}
            {/*</i>*/}
          </div>
          <div className="pro-item-subtotal">
            {currencyFormatter(cart.quantity * cart.price)}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
