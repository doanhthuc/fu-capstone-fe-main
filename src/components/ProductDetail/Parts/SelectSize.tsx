import {useState} from "react";
import {useSelectableList} from "rooks";
import clsx from "clsx";

const SIZE = [
  {size: "S"},
  {size: "M"},
  {size: "L"},
  {size: "XL"},
  {size: "XXL"},
];

const SelectSize = ({setSizeFunc, sizeShow}) => {
  const [_, {toggleSelection}] = useSelectableList(SIZE, 0);
  const [curIndex, setCurIndex] = useState();


  console.log(sizeShow);
  const chooseSize = (s, i) => {
    toggleSelection({index: i})();
    setCurIndex(i);
    setSizeFunc("size", s);
  };

  if (sizeShow.length == 0) {
    return (
      <div className="pro-product-detail-info-size">
        Size:
        <ul className="detail-info-size-list">
          <li className="detail-info-size-item">Choose</li>
          <li className="detail-info-size-item">1 Color</li>
        </ul>
      </div>
    );
  }

  return (
    <>
      <div className="pro-product-detail-info-size">
        Size:
        <ul className="detail-info-size-list">
          {SIZE.map(({size}, i) => {
            if (!sizeShow.includes(size)) {
              return;
            }
            return (
              <li
                key={i}
                className={clsx("detail-info-size-item", {
                  active: i === curIndex,
                })}
                onClick={() => chooseSize(size, i)}>
                {size}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SelectSize;
