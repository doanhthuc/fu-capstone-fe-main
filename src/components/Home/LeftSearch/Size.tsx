import {useMultiSelectableList} from "rooks";
import clsx from "clsx";
import {useNormalEffect} from "../../../utils/hook/useUpdateEffect";

const SIZE = [
  {size: "S"},
  {size: "M"},
  {size: "L"},
  {size: "XL"},
  {size: "XXL"},
];

const Size = ({setLeftSizeFunc}) => {
  const [selection, {matchSelection, toggleSelection}] = useMultiSelectableList(
    SIZE,
    [],
  );

  useNormalEffect(() => {
    setLeftSizeFunc("size", selection[1]);
  }, [toggleSelection]);

  return (
    <>
      <div className="body-filter-size">
        <h4 className="body-filter-products-name">Filter by Size</h4>
        <ul className="body-filter-products-list">
          {SIZE.map(({size}, i) => {
            return (
              <li
                onClick={() => toggleSelection({index: i})()}
                key={i}
                className="body-filter-products-item">
                <span className="body-filter-products-item-link">
                  <label className={clsx({active: matchSelection({index: i})})}>
                    {size}
                  </label>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Size;
