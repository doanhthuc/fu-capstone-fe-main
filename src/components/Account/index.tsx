import OrderHistory from "./OrderHistory";
import Address from "./Address";
import UserInfo from "./UserInfo";
import Wishlist from "./Wishlist";
import {useNormalEffect} from "../../utils/hook/useUpdateEffect";
import getParams from "../../utils/hook/getParam";
import clsx from "clsx";
import OrderStatus from "./OrderStatus";
import {useNavigate} from "react-router-dom";
import {getSearchProduct} from "../../api/product.api";
import {useQuery} from "@tanstack/react-query";
import useStore from "../../store/store";
import {getOrderHistoryAxios} from "../../api/order.api";
import {LoadingSpinnerOverlay} from "../Reuse/Loading";
import {createOrderHistory} from "../../utils/helper";

const PARTS = [
  // "Order Status",
  "Orders",
  "Address",
  "Account details",
  "Wishlist",
];

const Index = () => {
  const {user} = useStore();
  const navigate = useNavigate();
  const [setSearchParams, [part]] = getParams("part");

  useNormalEffect(() => {
    if (!part) {
      setSearchParams({part: PARTS[0]});
    }
  }, [part]);

  const LogoutAccount = () => {
    window.localStorage.removeItem("auth_token");
    navigate(0);
  };

  const getOrderHistory = useQuery({
    queryKey: ["order_history", "order"],
    queryFn: () => getOrderHistoryAxios(user.id),
  });

  if (
    // getProductsAtHomePageQuery.isFetching ||
    getOrderHistory.isLoading
  )
    return <LoadingSpinnerOverlay />;
  else {

  }

  return (
    <>
      <br />
      <div className="containerxx">
        <div className="grid wide">
          <div className="row">
            <div className="col p-3 m-12">
              <div className="info-navbar">
                <ul className="info-navbar-list">
                  <li className="info-navbar-item-info">
                    <img
                      // src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                      src={user.avatarUrl}
                      alt="user img"
                      className="info-navbar-img"
                    />
                    <div className="info-navbar-title">
                      <div className="wellcome">Wellcome back,</div>
                      <div className="UserName">{user.username}</div>
                    </div>
                  </li>
                  {PARTS.map((p, i) => {
                    return (
                      <li
                        key={i}
                        className={clsx("info-navbar-item", {
                          active: part === p,
                        })}
                        onClick={() => setSearchParams({part: p})}>
                        {p}
                      </li>
                    );
                  })}
                  {/**/}
                  <li className="info-navbar-item" onClick={LogoutAccount}>
                    Logout
                  </li>
                </ul>
              </div>
            </div>
            <div className="col p-9 m-12">
              <div className="info-content">
                {/*{PARTS[0] === part && <OrderStatus />}*/}
                {PARTS[0] === part && <OrderHistory orderItem={createOrderHistory(getOrderHistory?.data?.data)} />}
                {PARTS[1] === part && <Address />}
                {PARTS[2] === part && <UserInfo />}
                {PARTS[3] === part && <Wishlist />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
