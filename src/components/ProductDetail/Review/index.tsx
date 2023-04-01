import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import SortReview from "./SortReview";
import AddReview from "./AddReview";
import {convertDateInOrderHistory, getUserIdFromReviewOfProduct, showNumberOfStars} from "../../../utils/helper";
import useStore from "../../../store/store";

const Review = ({reviewD}) => {
  const {user} = useStore();
  return (
    <>
      <div className="product-detail-tab-pane active">
        <SortReview />
        <div className="product-detail-list-reviews">
          {reviewD?.length > 0 && reviewD.map((x) => {
            if (x.rating == 0) {
              return;
            }
            return (
              <div key={x.id} className="product-detail-reviewer-cmt">
                <img
                  width={"60px"}
                  height={"60px"}
                  // key word: 60x60 pixel images
                  // src="https://secure.gravatar.com/avatar/3384f98a21c5dce2051e8f5a20928b05?s=60&d=mm&r=g"
                  // src="https://art.pixilart.com/f402092b706d0dd.png"
                  src={x.user.avatarUrl}
                  alt="user"
                />
                <div className="detail-reviewer-cmt-content">
                  <div className="detail-reviewer-cmt-rating">
                    {showNumberOfStars(x.rating)}
                  </div>
                  <div className="detail-reviewer-cmt-name_time">
                    <h5 className="name">{x.user.username}</h5> -{" "}
                    <span className="time">{convertDateInOrderHistory(x.updatedAt)}</span>
                  </div>
                  <p className="detail-reviewer-cmt-info">
                    {x.comment}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {getUserIdFromReviewOfProduct(reviewD, user.id) != null && (
          <div className="product-detail-add-review">
            <p className="product-detail-add-review-name">Add your review</p>
            <p className="detail-add-review-wran">Required fields are marked *</p>
            <AddReview reviewId={getUserIdFromReviewOfProduct(reviewD, user.id)} />
          </div>
        )}
      </div>
    </>
  );
};

export default Review;
