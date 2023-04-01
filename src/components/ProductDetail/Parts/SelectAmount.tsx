import {useState} from "react";
import {useOnlyUpdateEffect} from "../../../utils/hook/useUpdateEffect";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

const SelectAmount = ({setAmountFunc}) => {
  const [count, setCount] = useState(1);

  const add = () => {
    setCount(c => {
      return c + 1;
    });
  };

  const substract = () => {
    setCount(c => {
      if (c - 1 > 0) return c - 1;
      return c;
    });
  };

  useOnlyUpdateEffect(() => {
    setAmountFunc("amount", count);
  }, [count]);

  return (
    <>
      <div className="detail-info-count-add-count">
        <i onClick={substract}>
          <FontAwesomeIcon icon={faMinus} />
        </i>
        <span>{count}</span>
        <i onClick={add}>
          <FontAwesomeIcon icon={faPlus} />
        </i>
      </div>
    </>
  );
};

export default SelectAmount;
