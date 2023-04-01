import {showNumberOfStars} from "../../utils/helper";

const CountingStar = ({numberOfStars}) => {
  return <>{showNumberOfStars(numberOfStars)}</>;
};

export default CountingStar;
