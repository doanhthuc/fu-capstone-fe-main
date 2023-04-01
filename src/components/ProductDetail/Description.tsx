const Description = ({descriptionShow}) => {
  return (
    <>
      <div className="product-detail-tab-pane active">
        {descriptionShow.map(desc => {
          return (
            <p key={desc} className="product-detail-tab-des">
              {desc}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default Description;
