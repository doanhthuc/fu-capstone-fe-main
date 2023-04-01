import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {useInput} from "rooks";
import PopupAuth from "../Reuse/Popup/PopupAuth";
import {showPopupSearch} from "../../utils/showPopup";

const SearchBar = () => {
  const navigate = useNavigate();

  const searchString = useInput();

  const startSearch = () => {
    if (searchString.value.length === 0) {
      return showPopupSearch("input is empty");
    } else if (searchString.value.length > 20) {
      return showPopupSearch("the maximum length of string is 20 characters");
    }
    navigate(`/search?key=${searchString.value}`);
  };

  return (
    <>
      <PopupAuth />
      <div className="grid wide hide-on-mobile">
        <div className="row add-little-margin2">
          <div className="col p-12">
            <div
              style={{display: "flex"}}
              className="header-input-search bg_white boder-gray">
              <input {...searchString} type="text" placeholder="Search here!" />
              <button
                onClick={startSearch}
                type="submit"
                className="header-input-search-btn align__item-center fz-1-6rem">
                Search
                <i>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
