const DATE = [{d: "Date"}, {d: "Newest to oldest"}, {d: "Oldest to newest"}];
const STAR = ["Star", "1 star", "2 star", "3 star", "4 star", "5 star"];

const SortReview = () => {
  return (
    <>
      <div className="sort-by-review">
        Sort by: &nbsp;
        <select
          style={{padding: "0 30px 0 5px"}}
          // onChange={e => setLeftPriceFunc("price", e.target.value)}
        >
          {DATE.map(({d}, i) => {
            return <option key={i}>{d}</option>;
          })}
        </select>
        &nbsp;
        <select
          style={{padding: "0 30px 0 5px"}}
          // onChange={e => setLeftPriceFunc("price", e.target.value)}
        >
          {STAR.map(d => {
            return <option key={d}>{d}</option>;
          })}
        </select>
      </div>
    </>
  );
};
export default SortReview;
