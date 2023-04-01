import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";
import {convertDateInOrderHistory} from "../../utils/helper";
import {useNavigate} from "react-router-dom";

const OrderHistory = ({orderItem}) => {
    const navigate = useNavigate();
    console.log(orderItem);
    return (
      <>
        <div className="info-content-item active">
          {/* nếu không có order thì dùng */}

          {/* Nếu có order thì dùng */}
          <div className="info-content-order-has-pro">
            <div className="info-content-order-has-pro-item">
              <div className="cart-has-products-title">
                <ul className="has-products-title-list">
                  <li className="has-products-title-item">Products</li>
                  <li className="has-products-title-item hide-on-mobile">
                    Status
                  </li>
                  <li className="has-products-title-item">Date</li>
                  <li className="has-products-title-item">Message</li>
                </ul>
              </div>
              {orderItem?.length > 0 ? orderItem.map((x) => {
                return (<div key={x.id} className="cart-has-products-pro">
                  <div className="has-products-pro-item">
                    <div onClick={() => navigate(`/product/${x.productId}?part=review`)}
                         className="has-products-pro-item-img-name">
                      <img
                        src={x.productPhotoUrl}
                        className="hide-on-mobile"
                        alt=""
                      />
                      <div className="pro_item-name-type">
                        <h4 className="name">
                          Basic Colored Sweatpants With Elastic Hems Basic Colored
                          Sweatpants With Elastic Hems Basic Colored Sweatpants With
                          Elastic Hems
                        </h4>
                        <p className="type hide-on-mobile">
                          Color: <span className="color">{x.color} </span>- Size: {x.size}
                          <br /> Amount: {x.quantity}

                        </p>
                      </div>
                    </div>
                    <div className="has-products-pro-item-price">
                      <div className="pro-item-price hide-on-mobile">{x.status}</div>
                      <div className="pro-item-datetime ">{convertDateInOrderHistory(x.createdAt)}</div>
                      <div className="pro-item-address ">{x.message}</div>
                    </div>
                  </div>
                </div>);
              }) : (<>
                <div className="info-content-order-no-pro">
                  <span className="info-content-btn-order">Browse products</span>
                  <div className="info-content-order-des">
                    No order has been made yet
                  </div>
                </div>
              </>)}
            </div>
          </div>
        </div>
      </>
    );
  }
;

export default OrderHistory;
