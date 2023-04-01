import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {useMultiSelectableList} from "rooks";
import clsx from "clsx";
import {useNormalEffect} from "../../../utils/hook/useUpdateEffect";

const COLOR = [
  {color: "blueviolet"},
  {color: "green"},
  {color: "yellow"},
  {color: "gray"},
  {color: "cadetblue"},
];

const Color = ({setLeftColorFunc}) => {
  const [selection, {matchSelection, toggleSelection}] = useMultiSelectableList(
    COLOR,
    [],
  );

  useNormalEffect(() => {
    setLeftColorFunc("color", selection[1]);
  }, [toggleSelection]);

  return (
    <>
      <div className="body-filer-color">
        <h4 className="body-filter-products-name">Filter by Color</h4>
        <ul className="body-filer-color-list">
          {COLOR.map(({color}, i) => {
            return (
              <li
                onClick={() => toggleSelection({index: i})()}
                key={i}
                className="body-filer-color-item">
                <div className="body-filer-color-item-content">
                  <span
                    className={clsx("body-filer-color-type", {
                      active: matchSelection({index: i}),
                    })}
                    style={{backgroundColor: `${color}`}}>
                    <i>
                      <FontAwesomeIcon icon={faCheck} />
                    </i>
                  </span>
                  <span
                    style={{color: `${color}`}}
                    className="body-filer-color-link">
                    {color}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Color;
