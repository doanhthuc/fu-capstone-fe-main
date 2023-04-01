import {useMultiSelectableList} from "rooks";
import {useNormalEffect} from "../../../utils/hook/useUpdateEffect";
import clsx from "clsx";

const CATEGORY = [
  {category: "Men"},
  {category: "Women"},
  {category: "Bags"},
  {category: "Sweatshirts & Hoodies"},
  {category: "Pants"},
  {category: "Dresses"},
  {category: "Jackets & Coats"},
];

const Category = ({setLeftCategoryFunc}) => {
  const [selection, {matchSelection, toggleSelection}] = useMultiSelectableList(
    CATEGORY,
    [],
  );

  useNormalEffect(() => {
    setLeftCategoryFunc("category", selection[1]);
  }, [toggleSelection]);

  return (
    <>
      <div className="body-filter-products">
        <h4 className="body-filter-products-name">Product Categories</h4>
        <ul className="body-filter-products-list">
          {CATEGORY.map(({category}, i) => {
            return (
              <li
                key={i}
                onClick={() => toggleSelection({index: i})()}
                className="body-filter-products-item">
                <span className="body-filter-products-item-link">
                  <label className={clsx({active: matchSelection({index: i})})}>
                    {category}
                  </label>{" "}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Category;
