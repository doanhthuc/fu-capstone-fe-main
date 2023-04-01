import {useState} from "react";
import {useSelectableList} from "rooks";
import clsx from "clsx";

const COLOR = [
  {color: "blueviolet"},
  {color: "green"},
  {color: "yellow"},
  {color: "gray"},
  {color: "cadetblue"},
];

const SelectColor = ({setColorFunc, colorShow}) => {
  const [_, {toggleSelection}] = useSelectableList(COLOR, 0);
  const [curIndex, setCurIndex] = useState();
  const chooseColor = (c, i) => {
    toggleSelection({index: i})();
    setCurIndex(i);
    setColorFunc("color", c);
  };

  return (
    <>
      <div className="pro-product-detail-info-color">
        Color:
        <ul className="detail-info-color-list">
          {COLOR.map(({color}, i) => {
            if (!colorShow.includes(color)) {
              return;
            }
            return (
              <li
                key={i}
                className={clsx("detail-info-color-item", {
                  active: i === curIndex,
                })}
                data-color={color}
                onClick={() => chooseColor(color, i)}
                style={{backgroundColor: color}}></li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SelectColor;
