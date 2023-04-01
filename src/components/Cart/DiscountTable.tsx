import {useState} from "react";
import {CopyToClipboard} from "react-copy-to-clipboard";
import DISCOUNT from "../../api/fake/coupons.fake";
import DiscountTableStatic from "../Static/DiscountTableStatic";
import {showPopupSuccess} from "../../utils/showPopup";
import PopupComment from "../Reuse/Popup/PopupComment";

const DiscountTable = ({setCoupon, setCouponValue}) => {
  const [isCopyId, setIsCopyId] = useState("");

  const applyCoupon = c => {
    showPopupSuccess("copy successfully");
    setCoupon(c.coupon);
    setCouponValue(c.discount_str);
  };

  return (
    <>
      <PopupComment />
      <div id="wrapper">
        <h1 className="xcasxsadasdas">Discount coupon</h1>

        <table id="keywords" cellSpacing="0" cellPadding="0">
          <DiscountTableStatic />
          <tbody>
            {DISCOUNT.map(d => (
              <tr key={d.id}>
                <td className="lalign">
                  {d.coupon} &nbsp;&nbsp;&nbsp;
                  <CopyToClipboard
                    text={d.coupon}
                    onCopy={() => setIsCopyId(d.id)}>
                    <button
                      onClick={() => applyCoupon(d)}
                      className="add-little-buttonx">
                      {isCopyId === d.id ? "copied" : "copy"}
                    </button>
                  </CopyToClipboard>
                </td>
                <td>{d.discount_str}</td>
                <td>{d.description}</td>
                <td>{d.start}</td>
                <td>{d.end}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DiscountTable;
