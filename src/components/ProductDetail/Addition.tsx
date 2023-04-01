const Addition = ({pro}) => {
  return (
    <>
      <div className="product-detail-tab-pane active">
        <h3 className="product-detail-additional-name">
          Additional information
        </h3>
        <table className="product-detail-additional-table">
          <tbody>
            <tr>
              <td className="name">Color</td>
              <td className="list">{pro?.colors?.join(", ")}</td>
            </tr>
            <tr>
              <td className="name">Size</td>
              <td className="list">{pro?.sizes?.join(", ")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Addition;
