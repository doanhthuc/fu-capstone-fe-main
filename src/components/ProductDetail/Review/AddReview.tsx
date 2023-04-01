import {useState} from "react";
import {useInput} from "rooks";
import {z} from "zod";
import {showNumberOfStars} from "../../../utils/helper";
import {showPopupComment} from "../../../utils/showPopup";
import PopupComment from "../../Reuse/Popup/PopupComment";
import clsx from "clsx";
import {createAndUpdateReviewAxios} from "../../../api/review.api";
import {useNavigate} from "react-router-dom";

const Reviewschema = z.object({
  comment: z.string().min(1).max(40),
  star: z.number().min(1),
});

const AddReview = ({reviewId}) => {
  if (reviewId == null) return;
  const navigate = useNavigate();
  const comment = useInput("");
  const [star, setStar] = useState(1);
  const submitReview = async e => {
    e.preventDefault();
    if (comment.value.length === 0) {
      return showPopupComment("comment must not empty");
    } else if (comment.value.length > 40) {
      return showPopupComment("the maximum length of comment is 40 characters");
    }
    const data = {
      rating: star,
      comment: comment.value,
    };
    const cc = await createAndUpdateReviewAxios(reviewId, data);
    if (cc) {
      navigate(0);
    } else {
      alert("Something wrong");
    }
  };

  return (
    <>
      <PopupComment />
      <form
        className="detail-add-review-validate"
        method="post"
        encType="multipart/form-data">
        <div className="add-review-rating">
          Your rating *
          <ul className="add-review-rating-list">
            <li
              onClick={() => setStar(1)}
              className={clsx("add-review-rating-item", {
                "star-clicked": star === 1,
              })}>
              {showNumberOfStars(1)}
            </li>
            <li
              onClick={() => setStar(2)}
              className={clsx("add-review-rating-item", {
                "star-clicked": star === 2,
              })}>
              {showNumberOfStars(2)}
            </li>
            <li
              onClick={() => setStar(3)}
              className={clsx("add-review-rating-item", {
                "star-clicked": star === 3,
              })}>
              {showNumberOfStars(3)}
            </li>
            <li
              onClick={() => setStar(4)}
              className={clsx("add-review-rating-item", {
                "star-clicked": star === 4,
              })}>
              {showNumberOfStars(4)}
            </li>
            <li
              onClick={() => setStar(5)}
              className={clsx("add-review-rating-item", {
                "star-clicked": star === 5,
              })}>
              {showNumberOfStars(5)}
            </li>
          </ul>
        </div>
        <div className="add-review-content">
          <p className="name">Your review *</p>
          <input
            {...comment}
            placeholder="Add your review here"
            style={{padding: "15px 10px", borderRadius: "15px"}}
          />
        </div>
        <br />
        {/*<div className="add-review-save-name">*/}
        {/*  <input*/}
        {/*    type="checkbox"*/}
        {/*    className="add-review-remind"*/}
        {/*    id="add-review-remind"*/}
        {/*  />*/}
        {/*  <label htmlFor="add-review-remind">*/}
        {/*    &nbsp;Save my information for the next time I comment.*/}
        {/*  </label>*/}
        {/*</div>*/}
        <button
          onClick={e => submitReview(e)}
          className="add-review-submit"
          type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddReview;
