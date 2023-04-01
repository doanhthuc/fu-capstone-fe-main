import useMapState from "../../../utils/hook/useMapState";
import {useOnlyInitialEffect} from "../../../utils/hook/useUpdateEffect";

const IMG_MAP = new Map<string, any>([
  ["main_img", ""],
  ["number_img", 0],
]);

const ImageShow = ({imgMain, imgShow}) => {
  const [imgMap, actionMap] = useMapState<any, any>(IMG_MAP);
  useOnlyInitialEffect(() => {
    actionMap.set("main_img", imgMain);
  });

  const changeImage = (img, index) => {
    actionMap.set("main_img", img);
    actionMap.set("number_img", index);
  };

  return (
    <>
      <div className="col p-5 m-12">
        <div className="pro-product-detail-img">
          <div
            className="pro-product-detail-img-main"
            style={{
              backgroundImage: `url(${imgMap.get("main_img")})`,
            }}
          />

          <div className="pro-product-detail-img-sub">
            {imgShow.map((img, index) => {
              if (imgMap.get("number_img") === index) {
                return (
                  <div
                    key={index}
                    className="detail-img-sub-img active"
                    style={{backgroundImage: `url(${img})`}}
                    data-img-sub={img}
                    onClick={() => changeImage(img, index)}
                  />
                );
              }
              return (
                <div
                  key={index}
                  className="detail-img-sub-img"
                  style={{backgroundImage: `url(${img})`}}
                  data-img-sub={img}
                  onClick={() => changeImage(img, index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageShow;
