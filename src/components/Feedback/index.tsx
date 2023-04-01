import c from "./feedback.module.css";

const Index = () => {
  return (
    <>
      <br />
      <div className={c.card}>
        <h3>I am very happy to receive your feedback !</h3>
        <br />
        <br />
        <label className={c.input}>
          <input className={c.input__field} type="text" placeholder=" " />
          <span className={c.input__label}>Write Your Feedback Here</span>
        </label>
        <br />
        <div className={c.buttonGroup}>
          <button className={c.dfbsdhfbh}>Send</button>
          <button className={c.dfbsdhfbh1} type="reset">
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Index;
