const PRICE = [
  {price: "All"},
  {price: "$0 - $100"},
  {price: "$100 - $250"},
  {price: "$250 - $500"},
  {price: "$500 - $1000"},
  {price: "$1000 - $2000"},
  {price: "Over 2000$"},
];

const Price = ({setLeftPriceFunc}) => {
  const convertPriceToNum = p => {
    let numPrice;
    if (p == PRICE[0].price) numPrice = "all";
    else if (p == PRICE[1].price) numPrice = "0-100";
    else if (p == PRICE[2].price) numPrice = "100-250";
    else if (p == PRICE[3].price) numPrice = "250-500";
    else if (p == PRICE[4].price) numPrice = "500-1000";
    else if (p == PRICE[5].price) numPrice = "1000-2000";
    else if (p == PRICE[6].price) numPrice = "2000-10000";
    setLeftPriceFunc("price", numPrice);
  };

  return (
    <>
      <div className="body-filter-price">
        <h4 className="body-filter-products-name">Filter by price</h4>
        <div className="body-filter-price-sort align__item-center add-little-padding3x">
          <select onChange={e => convertPriceToNum(e.target.value)}>
            {PRICE.map(({price}, i) => {
              return <option key={i}>{price}</option>;
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default Price;
